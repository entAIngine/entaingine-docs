---
sidebar_position: 6
---

# Application Setup in entAIngine

To begin, log in to entAIngine Studio by visiting www.studio.entaingine.com. If you don't yet have an account, please visit www.entAIngine.com to request one.
In this example, we will build a process to automate the invoice-controlling workflow, making the CFO's work easier.

# Example Data

We have two example documents:

- **Invoice Document**: A sample invoice from Amazon Web Services, containing line items for EC2, S3, RDS, and Lambda services totaling 701.3 EUR, including VAT.
- **Department Mapping Document**: A mapping document that links projects to departments and their respective leads, including contact details.

The objective is to match the invoice with the relevant project and determine which department is responsible.

## Creating the Application

- Log in to **entAIngine Studio**.
- Create a new application:
  - Select **"AI Process Application"** as the type.
  - Name the app **"Invoice Controlling App"**.
  - Associate it with your organization.
- Once the application is created, you will see a dedicated **dashboard**:
  - Adjust app settings, including **styles** and **logos**.
- To start building the process:
  - Navigate to the **"Logic"** section of the app.
- Define the application structure:
  - Each application in entAIngine includes one or more **process templates**.
  - For this use case, create a process template called **"Invoice Controlling for Departments"**.

This template will guide you in building the orchestration of this workflow.

## Defining Variables

Next, define the variables for the template:

- **Invoice**:
  - This is **case-specific**, meaning each invoice will vary for each instance of the process.
  - Define this as a **PDF file input**.

- **Department Mapping**:
  - This variable is used to identify the **relevant department** and is also an input to the process.

These variables will help manage the inputs for each process instance.

