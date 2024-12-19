---
sidebar_position: 3
---

# Developing a Process Mindset

Before building your first application, it is essential to adopt what we call the "process mindset." This mindset is critical for creating enterprise-grade AI solutions that are process-centric and impact-driven, rather than just building basic chatbots. In this guide, we will discuss the key elements of the process mindset, including multi-step orchestration, reusable templates, and effective model customization.

## The Importance of Multi-Step Orchestration

Building AI applications for enterprise use requires more than simple chat interactions. While tools like ChatGPT make AI accessible through easy-to-use chat interfaces, enterprise applications demand complex workflows involving multiple steps and models. This is where multi-step orchestration becomes crucial.

Instead of just a "prompt-answer" interaction cycle, think of application building as a series of orchestrated steps, each designed to accomplish a specific goal. For instance, the user triggers a multi-step process involving different models, possibly even multimodal inputs, to generate a more effective output. Integrating retrieval-augmented generation (RAG) and minimizing human input allows you to create more powerful and automated workflows.

<img src="/img/getting-started/interactive-chat-and-orchestration.png" alt="orchestration"/>

## Understanding Process-Driven Thinking

Every business activity can be thought of as a process. These processes may not always be well-documented, but they are a series of actions that lead to a specific outcome. The "divide and conquer" approach is an essential mindset for creating successful AI-driven workflows. It encourages breaking down complex tasks into smaller, manageable steps that can be efficiently executed by models.

For example, imagine creating a project proposal for a request for proposals (RFP). This process involves several steps: gathering material, reviewing past references, sketching a concept, and writing sections like the introduction or related work. Instead of tackling the entire project at once, break it down into individual tasks, allowing the language model to perform each part more effectively. This helps ensure high quality and efficiency throughout the entire process.

<img src="/img/getting-started/rfp-example.png" alt="rfp example"/>

## Reusable Process Templates

To make process orchestration scalable, reusable process templates can be developed. These templates act as blueprints for recurring tasks, providing consistency and efficiency. For example, when responding to RFPs, instead of creating prompts from scratch each time, you can use a template with parameterized steps that adapt to each specific RFP.

We distinguish between two types of inputs in these templates:

- **Case-Specific Input**: Unique data that varies from case to case. For example, each RFP document contains specific requirements that need to be addressed individually.
- **Case-Independent Input**: Data that remains constant across different cases. For example, a database of past projects or standard reference materials can be reused.

<img src="/img/getting-started/case-inputs.png" alt="case inputs"/>

By building templates that account for both input types, you can efficiently handle different scenarios without compromising quality.

## Customizing Models for Specific Tasks

Customization of models is another key element in creating effective process workflows. Each step of the process may require different types of models based on the task at hand. For instance, analyzing a lengthy document might be best suited for a specific variant of GPT-4, while scanning documents with complex forms may require an Optical Character Recognition (OCR) model.

To enhance efficiency, it is crucial to define which model to use for each step in the process template. For example, always using GPT-4 mini for document analysis or a dedicated OCR model for handling scanned documents. This level of customization allows you to generalize processes while ensuring each task is completed effectively.

## Moving Beyond Chat Interfaces

While chat interfaces can be useful for creative tasks and one-off scenarios, they are often not the best solution for repeatable tasks requiring consistency across an entire organization. For these types of tasks, a chat interface may be too limiting. Instead, it’s more effective to design applications that can trigger complex processes automatically and deliver the required output.

<img src="/img/getting-started/interaction-and-process-trigers.png" alt="interaction and process trigers"/>

For instance, you could use entAIngine’s auto-generated frontends or API-triggered processes to handle tasks like automated invoice analysis. Such workflows eliminate the need for repeated manual interaction, enabling you to feed in case-specific information and deliver consistent results in the right format at the right time.

The ultimate goal of adopting a process mindset is to move beyond just creating chatbots and to develop sophisticated, AI-powered processes that save time, ensure reproducible quality, and create tangible impact for your organization.

---

Next, let’s build your first process with entAIngine!

