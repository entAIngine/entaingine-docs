# Webhook Guide for Process Outputs

## Overview

Instead of polling the API to check if a process has completed, you can configure webhooks to receive real-time notifications when processes and tasks complete. This guide explains how to set up and use webhooks for process outputs.

## Table of Contents

1. [Why Use Webhooks Instead of Polling](#why-use-webhooks-instead-of-polling)
2. [How Webhooks Work](#how-webhooks-work)
3. [Setting Up Webhooks](#setting-up-webhooks)
4. [Webhook Events](#webhook-events)
5. [Webhook Payloads](#webhook-payloads)
6. [Security: HMAC Signature Verification](#security-hmac-signature-verification)
7. [Retry Mechanism](#retry-mechanism)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)

---

## Why Use Webhooks Instead of Polling

### Polling Approach (Traditional)
- **Inefficient**: Requires repeated API calls to check process status
- **Delayed**: There's always a delay between completion and detection
- **Resource Intensive**: Wastes bandwidth and server resources
- **Example**: Client polls `/api/processes/{id}/tasks/outputs` every few seconds

### Webhook Approach (Recommended)
- **Real-time**: Instant notification when events occur
- **Efficient**: No unnecessary API calls
- **Scalable**: Reduces server load
- **Event-driven**: Receive notifications for task completion, process completion, and errors

---

## How Webhooks Work

1. **Configuration**: When creating a process, provide a `webhookUrl` in the request
2. **Execution**: The system executes tasks asynchronously
3. **Notification**: When events occur (task completion, process completion, errors), the system sends HTTP POST requests to your webhook URL
4. **Verification**: Your endpoint verifies the HMAC signature to ensure authenticity
5. **Processing**: Your application processes the webhook payload

### Flow Diagram

```
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│   Client    │         │  AI Engine   │         │  Webhook    │
│             │         │   Service    │         │   Endpoint  │
└──────┬──────┘         └──────┬───────┘         └──────┬──────┘
       │                       │                        │
       │ POST /api/processes   │                        │
       │ {webhookUrl: "..."}   │                        │
       ├──────────────────────>│                        │
       │                       │                        │
       │ 201 Created           │                        │
       │<──────────────────────┤                        │
       │                       │                        │
       │                       │ Process Execution      │
       │                       │ (async)                │
       │                       │                        │
       │                       │ Task Completed         │
       │                       ├────────────────────────>
       │                       │ POST {task data}       │
       │                       │                        │
       │                       │ Process Completed      │
       │                       ├────────────────────────>
       │                       │ POST {process data}   │
       │                       │                        │
```

---

## Setting Up Webhooks

### Step 1: Create a Process with Webhook URL

When creating a process via `POST /api/processes`, include the `webhookUrl` field:

```json
{
  "processTemplate": 123,
  "spaceId": "your-space-id",
  "inputs": [...],
  "webhookUrl": "https://your-domain.com/webhooks/process-callback"
}
```

**Note**: The webhook URL must be:
- A valid HTTPS URL (HTTP is not recommended for security)
- Publicly accessible (not behind a firewall)
- Capable of receiving POST requests

### Step 2: Configure Webhook Secret (Optional but Recommended)

The webhook secret is used to generate HMAC signatures for security. You can provide it via the authentication context:

- The secret is automatically encrypted and stored with the process
- If not provided, a default secret from configuration is used
- The secret is used to verify webhook authenticity

### Step 3: Implement Your Webhook Endpoint

Your endpoint should:
1. Accept POST requests with JSON payloads
2. Verify the HMAC signature (see Security section)
3. Process the event based on `eventType`
4. Return a 200 OK response quickly (within 5 seconds)

---

## Webhook Events

The system sends three types of webhook events:

### 1. TASK_COMPLETED

Triggered when an individual task within a process completes.

**When it fires**: After each task finishes execution successfully

**Use case**: Track progress of multi-task processes, process intermediate results

### 2. PROCESS_COMPLETED

Triggered when the entire process completes successfully.

**When it fires**: After all tasks finish and the process is finalized

**Use case**: Fetch final outputs, trigger downstream workflows

### 3. PROCESS_ERROR

Triggered when a process encounters an error.

**When it fires**: When any task fails or the process encounters an exception

**Use case**: Error handling, alerting, retry logic

---

## Webhook Payloads

### TASK_COMPLETED Payload

```json
{
  "eventType": "TASK_COMPLETED",
  "processId": 12345,
  "taskId": 67890,
  "taskPosition": 1,
  "outputs": [
    {
      "id": 111,
      "outputText": "Generated text output",
      "outputUrl": "https://storage.example.com/outputs/file.pdf",
      "position": 0
    }
  ]
}
```

**Fields**:
- `eventType`: Always `"TASK_COMPLETED"`
- `processId`: The ID of the parent process
- `taskId`: The ID of the completed task
- `taskPosition`: The position/order of the task in the process
- `outputs`: Array of output objects from the task

### PROCESS_COMPLETED Payload

```json
{
  "eventType": "PROCESS_COMPLETED",
  "processId": 12345,
  "processOutputUrl": "https://storage.example.com/processes/final-output.pdf",
  "processOutputText": "Final process output text",
  "totalExecutionTime": 15234
}
```

**Fields**:
- `eventType`: Always `"PROCESS_COMPLETED"`
- `processId`: The ID of the completed process
- `processOutputUrl`: URL to the final output file (if available)
- `processOutputText`: Final output text (if available)
- `totalExecutionTime`: Total execution time in milliseconds

### PROCESS_ERROR Payload

```json
{
  "eventType": "PROCESS_ERROR",
  "processId": 12345,
  "errorMessage": "An unexpected error occurred during processing: Task execution failed"
}
```

**Fields**:
- `eventType`: Always `"PROCESS_ERROR"`
- `processId`: The ID of the process that encountered an error
- `errorMessage`: Description of the error (max 1000 characters)

---

## Security: HMAC Signature Verification

All webhook requests include an HMAC signature in the `X-Webhook-Signature` header. You **must** verify this signature to ensure the request is authentic.

### Signature Generation

The signature is generated using:
- **Algorithm**: HMAC-SHA256
- **Secret**: The webhook secret (encrypted in database, decrypted for signing)
- **Payload**: The JSON body of the request
- **Encoding**: Base64

### Verification Steps

1. Extract the signature from the `X-Webhook-Signature` header
2. Compute HMAC-SHA256 of the request body using your secret
3. Encode the result in Base64
4. Compare the computed signature with the header value (use constant-time comparison)

---

## Retry Mechanism

The webhook service implements automatic retries with exponential backoff:

### Retry Configuration

- **Max Attempts**: 3 (configurable via `webhook.retry.max-attempts`)
- **Initial Delay**: 2000ms (configurable via `webhook.retry.initial-delay`)
- **Max Delay**: 10000ms (configurable via `webhook.retry.max-delay`)

### Retry Behavior

1. **First attempt**: Immediate
2. **Second attempt**: After initial delay (default: 2 seconds)
3. **Third attempt**: After exponential backoff (up to max delay: 10 seconds)

### Best Practices for Your Endpoint

- **Respond quickly**: Return 200 OK within 5 seconds
- **Idempotency**: Handle duplicate webhooks gracefully (use `processId` + `eventType` as idempotency key)
- **Async processing**: Process webhook payloads asynchronously if heavy work is required
- **Return 200 OK**: Even if processing fails internally, return 200 OK and handle errors separately

### What Happens on Failure

- If your endpoint returns a non-2xx status code, the system retries
- After max attempts, the webhook is considered failed (logged but not retried further)
- Failed webhooks do not block process execution

---

## Best Practices

### 1. **Always Verify Signatures**
- Never process webhooks without signature verification
- Use constant-time comparison to prevent timing attacks

### 2. **Handle Idempotency**
- Webhooks may be retried, so handle duplicates gracefully
- Use `processId` + `eventType` + `taskId` (if applicable) as idempotency key

### 3. **Respond Quickly**
- Return 200 OK within 5 seconds
- Process heavy work asynchronously

### 4. **Log Everything**
- Log all webhook events for debugging
- Store webhook payloads for audit trails

### 5. **Error Handling**
- Return 200 OK even if processing fails (prevents retries)
- Handle errors internally and alert separately

### 6. **Use HTTPS**
- Always use HTTPS for webhook endpoints
- Never expose webhook secrets in logs or code

### 7. **Monitor Webhook Delivery**
- Track webhook delivery success/failure rates
- Set up alerts for repeated failures

### 8. **Test Webhooks Locally**
- Use tools like ngrok or localtunnel to test webhooks locally
- Verify signature generation matches the system

---

## Troubleshooting

### Webhook Not Received

**Check**:
1. Is the webhook URL publicly accessible?
2. Is HTTPS configured correctly?
3. Are firewall rules blocking incoming requests?
4. Check application logs for webhook delivery errors

### Invalid Signature Error

**Check**:
1. Are you using the correct secret?
2. Are you computing the signature on the raw request body (not parsed JSON)?
3. Are you using HMAC-SHA256 with Base64 encoding?
4. Is the `X-Webhook-Signature` header present?

### Webhook Received Multiple Times

**This is normal**:
- The system retries failed webhooks
- Implement idempotency handling
- Use database checks to prevent duplicate processing

### Webhook Timeout

**Solution**:
- Return 200 OK immediately
- Process payload asynchronously
- Keep webhook handler lightweight

### Process Completed but No Webhook

**Check**:
1. Was `webhookUrl` provided when creating the process?
2. Check process status via API: `GET /api/processes/{id}`
3. Review application logs for webhook delivery attempts
4. Verify webhook endpoint is responding with 200 OK

---

## API Reference

### Creating a Process with Webhook

**Endpoint**: `POST /api/processes`

**Request Body**:
```json
{
  "processTemplate": 123,
  "spaceId": "your-space-id",
  "inputs": [...],
  "webhookUrl": "https://your-domain.com/webhooks/process-callback"
}
```

### Checking Process Status (Fallback)

If webhooks fail or you need to poll:

**Endpoint**: `GET /api/processes/{id}`

**Response**: Process details including status and outputs

**Endpoint**: `GET /api/processes/{id}/tasks/outputs`

**Response**: All task outputs for the process

---

## Configuration

### Application Properties

The following properties can be configured in `application.yml`:

```yaml
webhook:
  retry:
    max-attempts: 3          # Maximum retry attempts
    initial-delay: 2000      # Initial retry delay in milliseconds
    max-delay: 10000         # Maximum retry delay in milliseconds
  default-secret: "your-default-secret"  # Default webhook secret if not provided
```

---

## Summary

Webhooks provide a real-time, efficient alternative to polling for process outputs. By configuring a webhook URL when creating a process, you receive instant notifications when:

- Individual tasks complete (`TASK_COMPLETED`)
- The entire process completes (`PROCESS_COMPLETED`)
- Errors occur (`PROCESS_ERROR`)

Always verify HMAC signatures, handle idempotency, and respond quickly to ensure reliable webhook delivery.

For questions or issues, refer to the application logs or contact support.
