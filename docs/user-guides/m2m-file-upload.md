---
sidebar_position: 7
---

# Uploading Files via API with Api Key

You can upload files directly using the entAIngine API. This is useful for integrating file uploads into automated workflows or custom applications. Uploaded files can then be referenced in prompts using Input Template placeholders (like `{MY_UPLOADED_FILE}`).

## API Endpoint

To upload a file, send a `POST` request to the following endpoint:

`/api/v1/m2m/files/upload`

The request must be of type `multipart/form-data` and include the following parts:

*   **`file`**: The actual file to upload (required).
*   **`storageType`**: The target storage (`BLOB` or `S3`) (required).
*   **`spaceId`**: The ID of the space to upload the file to (optional).

**Authentication:**

This endpoint requires authentication. Ensure you include your API key in the request header as specified by the security requirements (e.g., `Authorization: Bearer YOUR_API_KEY`).

**Example (using cURL):**

```bash
curl -X POST "https://api.entaingine.com/aiengine/api/v1/m2m/files/upload" \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@/path/to/your/local/file.txt" \
     -F "storageType=BLOB" \
     -F "spaceId=your-space-id"
```

Upon successful upload, the API will return a `200 OK` response with the URL or identifier of the uploaded file in the response body (as plain text). This identifier can then be used in subsequent process executions.

## Allowed File Formats

For security and processing reasons, only certain file types are allowed for upload. The system validates files based on:

1.  **File Extension:** The filename extension must be in the allowed list.
2.  **Detected MIME Type:** The system internally detects the MIME type (also known as media type or content type) from the file's content. This detected type must match an allowed MIME type.
3.  **Magic Bytes:** The actual content of the file is inspected at the byte level to verify its true type, providing an additional layer of validation.

**Allowed Extensions:**

*   **Text & Markup:** `txt`, `md`, `html`, `htm`, `xml`, `json`, `yaml`, `yml`, `csv`, `tsv`, `ini`, `toml`, `log`, `rtf`, `tex`
*   **Office & E-Book:** `docx`, `xlsx`, `pptx`, `doc`, `xls`, `ppt`, `odt`, `ods`, `odp`, `pdf`, `epub`, `mobi`
*   **Data & Config:** `sql`, `db`, `sqlite`, `parquet`, `avro`, `orc`
*   **Archives:** `zip`, `tar`
*   **Images:** `png`, `jpg`, `jpeg`, `webp`
*   **Audio:** `m4a`, `mp3`, `wav`, `webm`, `mp4`, `mpga`, `mpeg`
*   **Special:** `p93`

**Allowed MIME Types (Detected Internally):**

*   **Text & Markup:** `text/plain`, `text/markdown`, `text/html`, `application/xml`, `application/json`, `application/x-yaml`, `text/csv`, `text/tab-separated-values`, `application/toml`, `application/rtf`, `application/x-tex`
*   **Office & E-Book:** `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, `application/vnd.openxmlformats-officedocument.presentationml.presentation`, `application/msword`, `application/vnd.ms-excel`, `application/vnd.ms-powerpoint`, `application/vnd.oasis.opendocument.text`, `application/vnd.oasis.opendocument.spreadsheet`, `application/vnd.oasis.opendocument.presentation`, `application/pdf`, `application/epub+zip`, `application/x-mobipocket-ebook`
*   **Data & Config:** `application/sql`, `application/octet-stream`, `application/x-sqlite3`, `application/parquet`, `application/avro-binary`, `application/orc`
*   **Archives:** `application/zip`, `application/x-tar`
*   **Images:** `image/png`, `image/jpeg`, `image/webp`
*   **Audio:** `audio/mp4`, `audio/mpeg`, `audio/wav`, `video/webm`, `video/mp4`, `video/mpeg`

> **Note:** Ensure the file extension matches the actual content type. Uploading a file with a mismatched extension or a detected content type that is not allowed will result in an error (`415 Unsupported Media Type`). An empty file will result in a `400 Bad Request` error. 