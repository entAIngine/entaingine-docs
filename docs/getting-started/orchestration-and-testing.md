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

This prompt provides the necessary context for the model to process the data and determine which project lead is responsible for the invoice.

## Launching and Testing the Process

Once the template is built, press **"Launch"** to begin using the process application. The dashboard will display the process template you have built, titled **"Invoice Controlling for Departments."**

To use the template, upload the relevant variables:

- **Invoice**: Upload the specific invoice you need to process.
- **Department Mapping**: Upload the mapping document.

Upon pressing **"Generate,"** the backend processes the template, replacing variables with the actual data. The output will identify the responsible department and the project lead, for example, "The project associated with the invoice is called Microserver, which falls under the IT security department, led by Max Meyer."

## Adding the Next Step: Email Drafting

To complete the process, we need a second step to draft an email to the responsible person. Add another text completion model and create a prompt that includes the context from the first step:

1. Second prompt example

   ```plaintext
   I am the CFO of a company doing invoice controlling. This is my invoice. I have already identified the responsible person: {Output from Step 1}. Write a professional email asking them to verify the invoice items and confirm whether I should pay it.

The output of this step will be a drafted email addressed to the responsible department head, requesting confirmation.

## Using the Debugger

entAIngine provides a debugger to test your process and see intermediate outputs. This is useful for validating each step before running the complete process. You can upload the inputs, run each step, and verify that the outputs are correct.

