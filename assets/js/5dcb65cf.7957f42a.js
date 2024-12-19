"use strict";(self.webpackChunkentaingine_docs=self.webpackChunkentaingine_docs||[]).push([[9827],{1772:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),a=i(8453);const r={sidebar_position:9},s="Understanding Retrieval-Augmented Generation (RAG)",o={id:"getting-started/understanding-rag",title:"Understanding Retrieval-Augmented Generation (RAG)",description:"Large language models (LLMs) can do a lot and enable many applications, but there are scenarios where LLMs fall short. This often happens when you need to leverage private knowledge, update information periodically, or work with very large knowledge bases. This is why we use retrieval-augmented generation (RAG) \u2014 a powerful approach for integrating dynamic and private information with generative AI.",source:"@site/docs/getting-started/understanding-rag.md",sourceDirName:"getting-started",slug:"/getting-started/understanding-rag",permalink:"/getting-started/understanding-rag",draft:!1,unlisted:!1,editUrl:"https://github.com/entAIngine/entaingine-docs/tree/main/docs/getting-started/understanding-rag.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Scaling and Customizing",permalink:"/getting-started/scaling-and-automation"},next:{title:"Conceptual Onboarding",permalink:"/category/conceptual-onboarding"}},l={},d=[{value:"Why Do We Need Retrieval-Augmented Generation?",id:"why-do-we-need-retrieval-augmented-generation",level:2},{value:"Challenges of LLM-Only Solutions",id:"challenges-of-llm-only-solutions",level:2},{value:"What Is Retrieval-Augmented Generation?",id:"what-is-retrieval-augmented-generation",level:2},{value:"Building a RAG Pipeline",id:"building-a-rag-pipeline",level:2},{value:"Embedding and Vector Representation",id:"embedding-and-vector-representation",level:3},{value:"Querying and Generating Responses",id:"querying-and-generating-responses",level:3},{value:"Advantages of RAG Over LLM-Only Approaches",id:"advantages-of-rag-over-llm-only-approaches",level:2},{value:"Summary",id:"summary",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"understanding-retrieval-augmented-generation-rag",children:"Understanding Retrieval-Augmented Generation (RAG)"}),"\n",(0,t.jsx)(n.p,{children:"Large language models (LLMs) can do a lot and enable many applications, but there are scenarios where LLMs fall short. This often happens when you need to leverage private knowledge, update information periodically, or work with very large knowledge bases. This is why we use retrieval-augmented generation (RAG) \u2014 a powerful approach for integrating dynamic and private information with generative AI."}),"\n",(0,t.jsx)(n.h2,{id:"why-do-we-need-retrieval-augmented-generation",children:"Why Do We Need Retrieval-Augmented Generation?"}),"\n",(0,t.jsx)(n.p,{children:"To understand the necessity of RAG, consider this: if you ask an LLM about your company's revenue in the EMEA region for the previous year, it will likely respond that it doesn't have access to your financial data. Alternatively, it might generate an inaccurate response by guessing. This limitation exists because LLMs rely on pre-trained data, and there is no direct way for them to access proprietary, private, or frequently changing information."}),"\n",(0,t.jsx)(n.p,{children:"LLMs like GPT-4 are trained on a vast dataset of publicly available content, including forums, blogs, and books. They are statistical models that predict text based on patterns and probabilities derived from this training data, rather than accessing specific sources of information. This means that the knowledge they provide is representative of general public knowledge \u2014 often accurate, but not always verifiable or complete."}),"\n",(0,t.jsx)(n.h2,{id:"challenges-of-llm-only-solutions",children:"Challenges of LLM-Only Solutions"}),"\n",(0,t.jsx)(n.p,{children:"When using only LLMs without supporting structures, several challenges arise:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Static Knowledge"}),": LLMs are frozen in time. The knowledge they hold is limited to what was available during the training period. Updating an LLM requires costly retraining or fine-tuning, and outdated information can be difficult to remove."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lack of Domain-Specific Knowledge"}),": General-purpose LLMs are not trained on your company's proprietary data, such as revenue statements or project reports. This limits their ability to provide context-specific answers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Opaque Decision-Making"}),": LLMs function as black boxes, making it impossible to trace back the exact sources behind a generated answer. This is problematic for enterprises that require verifiability and accountability."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costly and Complex to Train"}),": Building and fine-tuning LLMs is expensive and requires significant technical expertise. Fine-tuning adds more knowledge to the model but doesn't solve the inherent issues of opacity and outdated information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Context Size Limitations"}),": LLMs have limits on the amount of context they can handle in a single prompt. For example, GPT-4o can take up to 128,000 tokens \u2014 enough for a 100-page book, but insufficient for larger knowledge bases."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These challenges make LLMs unsuitable for scenarios where up-to-date, verifiable, and extensive information is required, especially for enterprise applications."}),"\n",(0,t.jsx)(n.h2,{id:"what-is-retrieval-augmented-generation",children:"What Is Retrieval-Augmented Generation?"}),"\n",(0,t.jsx)(n.p,{children:"RAG augments the capabilities of LLMs by incorporating data retrieval mechanisms. It works in two phases:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Building a Knowledge Base"}),": The first phase involves building a vector database with your organization's knowledge. This includes raw documents, chunks of information, and their corresponding vector representations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Querying the Knowledge Base"}),": In the second phase, when a user queries the system, a semantic search is performed on the vector database. The search results are then used to generate an enriched and context-specific response using an LLM."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"building-a-rag-pipeline",children:"Building a RAG Pipeline"}),"\n",(0,t.jsxs)(n.p,{children:["The first step in creating a RAG pipeline is ",(0,t.jsx)(n.strong,{children:"chunking"})," \u2014 dividing large documents into smaller, meaningful sections called chunks. These chunks are then translated into vectors using an embedding model, which provides a numeric representation of the semantics of each chunk."]}),"\n",(0,t.jsx)(n.p,{children:"The vectors are stored in a vector database, which allows for efficient semantic searches. When a query is made, the system searches through these vectors to find the chunks that are semantically closest to the query. This enables us to provide highly relevant information without relying solely on the LLM's pre-trained knowledge."}),"\n",(0,t.jsx)("img",{src:"/img/getting-started/how-rag-works.png",alt:"how rag works"}),"\n",(0,t.jsx)(n.h3,{id:"embedding-and-vector-representation",children:"Embedding and Vector Representation"}),"\n",(0,t.jsx)(n.p,{children:'An embedding model translates each chunk into a vector, capturing the semantic meaning of the text. These vectors are then stored in a vector database. For example, similar sentences like "a little boy is walking" and "a little boy is running" will have similar vector representations, allowing the system to recognize their semantic closeness.'}),"\n",(0,t.jsx)(n.h3,{id:"querying-and-generating-responses",children:"Querying and Generating Responses"}),"\n",(0,t.jsx)(n.p,{children:"When a user makes a query, an embedding of that query is generated and compared to the stored vectors. The closest matching chunks are retrieved, and these chunks are then used to generate a response."}),"\n",(0,t.jsxs)(n.p,{children:["To further enhance quality, an optional step called ",(0,t.jsx)(n.strong,{children:"retrieval reranking"})," can be added. In this step, the top K results are fed into an LLM for re-ranking, ensuring the final output is both relevant and accurate."]}),"\n",(0,t.jsx)(n.h2,{id:"advantages-of-rag-over-llm-only-approaches",children:"Advantages of RAG Over LLM-Only Approaches"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Knowledge"}),": Unlike LLMs, RAG pipelines are not static. You can easily add, update, or delete information in the vector database, ensuring your knowledge base remains up to date."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Domain-Specific Knowledge"}),": With RAG, you can insert proprietary and domain-specific knowledge, giving your organization control over the data used in generating responses."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Traceability"}),": RAG enables traceability by allowing you to link the generated output back to its original source. This is particularly useful for enterprises that require verifiable information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cost Efficiency"}),": Embedding models and vector searches are much less costly compared to running large LLMs for every query. This makes RAG a cost-effective solution for handling large amounts of data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Handling Large Knowledge Bases"}),": RAG allows you to efficiently work with large knowledge bases, avoiding the context size limitations inherent to LLMs."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"Retrieval-Augmented Generation combines the strengths of LLMs with the flexibility and efficiency of data retrieval. By using RAG, you can overcome the limitations of LLM-only approaches, such as static knowledge, lack of domain-specific information, and high costs. RAG pipelines allow you to leverage private knowledge, ensure verifiability, and create dynamic, enterprise-grade AI solutions."}),"\n",(0,t.jsx)(n.p,{children:"For enterprises looking to harness the power of generative AI in a secure, scalable, and cost-efficient way, RAG provides a compelling solution."}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(n.p,{children:"To get started with building your own RAG pipeline, explore our detailed guides on setting up vector databases, choosing the right embedding models, and integrating retrieval mechanisms into your existing workflows. RAG can transform how your organization leverages AI, enabling more accurate, efficient, and traceable insights."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(6540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);