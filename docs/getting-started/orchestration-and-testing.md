---
sidebar_position: 7
---

# Orchestrating, Testing, Scaling, and Automating the Process

After setting up the application and defining your variables, it’s time to design, test, scale, and automate the workflow using entAIngine’s orchestration tools. This section covers structuring the process, building prompts, testing each step, and expanding the workflow for greater efficiency.

## Workflow Orchestration

1. **Selecting Models**: Start by choosing a text completion model, such as Azure GPT-4o, to identify the department responsible for each invoice.

2. **Creating Prompts**: Set up an initial prompt that guides the model in processing the input data. Here’s an example prompt you can use:

   ```plaintext
   I am the CFO of a company, and I need to do invoice controlling. This is my invoice: {Invoice}. I also have a document listing the projects, departments, and their leaders: {Department Mapping}. Tell me the name and email of the person responsible for this invoice.

This prompt instructs the model to process the invoice and identify the relevant department head.

3. **Adding Steps**: You can add additional steps for drafting emails or sending notifications.

## Testing and Debugging

entAIngine provides a debugger to test your process before deploying it fully.

- **Load Inputs**: Upload sample documents to test each step.
- **Validate Outputs**: Ensure the model correctly identifies departments and generates appropriate responses.
- **Iterate and Refine**: Adjust prompts or models if the output doesn’t meet expectations.

Debugging is essential for fine-tuning the process and ensuring each step functions as expected.
