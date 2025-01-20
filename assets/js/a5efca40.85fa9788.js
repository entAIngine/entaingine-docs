"use strict";(self.webpackChunkentaingine_docs=self.webpackChunkentaingine_docs||[]).push([[5144],{9023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(4848),a=n(8453);const i={sidebar_position:5},r="Placeholder Patterns",o={id:"user-guides/placeholder-patterns",title:"Placeholder Patterns",description:"There are different kinds of placeholders, which can be used to supply user-defined content, reference previous tasks or ingest data for retrieval augmented generation (RAG).",source:"@site/docs/user-guides/placeholder-patterns.md",sourceDirName:"user-guides",slug:"/user-guides/placeholder-patterns",permalink:"/user-guides/placeholder-patterns",draft:!1,unlisted:!1,editUrl:"https://github.com/entAIngine/entaingine-docs/tree/main/docs/user-guides/placeholder-patterns.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"User Guides",permalink:"/category/user-guides"},next:{title:"Using GPT-Vision",permalink:"/user-guides/gpt-vision"}},l={},c=[{value:"Input Templates",id:"input-templates",level:2},{value:"Chaining Tasks",id:"chaining-tasks",level:2},{value:"Vector Store Retrieval",id:"vector-store-retrieval",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"placeholder-patterns",children:"Placeholder Patterns"}),"\n",(0,s.jsx)(t.p,{children:"There are different kinds of placeholders, which can be used to supply user-defined content, reference previous tasks or ingest data for retrieval augmented generation (RAG)."}),"\n",(0,s.jsxs)(t.p,{children:["Placeholders are always marked using curly brackets ",(0,s.jsx)(t.code,{children:"{}"})," in the prompt. Depending on the type (resolving Input Templates or Chaining Tasks), a predefined syntax must be followed. Each type of placeholder is only getting resolved once per occurrence to avoid inflating the prompt infinetely due to recursion."]}),"\n",(0,s.jsxs)(t.p,{children:["The example below shows a placeholder for an Input Template. The placeholder ",(0,s.jsx)(t.code,{children:"{FILE_CONTENT}"})," will be replaced with the parsed content of the uploaded file at runtime. In case the file contains the sequence for another ",(0,s.jsx)(t.code,{children:"{PLACEHOLDER_FOR_INPUT_TEMPLATE}"}),", that placeholder will not get resolved."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Placeholder for Input Templates",src:n(6615).A+"",width:"1336",height:"1182"})}),"\n",(0,s.jsx)(t.p,{children:"The following subsection describe the syntax for the different kinds of placeholders and their behaviour."}),"\n",(0,s.jsx)(t.h2,{id:"input-templates",children:"Input Templates"}),"\n",(0,s.jsxs)(t.p,{children:["The placeholders for the Input Templates must always be in ",(0,s.jsx)(t.code,{children:"{SNAKE_CASE}"}),". The process will not throw errors or warnings in case your prompt contains placeholders with typos, that can not be matched with any Input Template. There will also be no warnings or errors, in case you define an Input Template, but it is never used in a prompt."]}),"\n",(0,s.jsx)(t.h2,{id:"chaining-tasks",children:"Chaining Tasks"}),"\n",(0,s.jsxs)(t.p,{children:["When you chain tasks by drawing an edge between them, the placeholder ",(0,s.jsx)(t.code,{children:"{task_x.output_0}"})," is used internally. Whereas the ",(0,s.jsx)(t.code,{children:"x"}),"is used to denote the logical position of the task inside the process template (starting at 0). You can check the logical position of the task by clicking on the ",(0,s.jsx)(t.code,{children:"i"}),"-icon on the respective node. You do not have to dive deeper into those placeholders, in case you are just chaining simple text completion tasks. We are taking care of the placeholders for you."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Simple chaining with an edge",src:n(7482).A+"",width:"970",height:"582"})}),"\n",(0,s.jsx)(t.p,{children:"Whenever you are working with tasks that generate multiple outputs (e.g. by setting the amounts of images to be generated or top_k for vector store retrieval tasks to >1), or you want to access structured metadata from certain tasks (metadata from retrieval tasks), you can use the following placeholder patterns manually to finish the job:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"{task_x.output_y}"})," - You can use a different value for y to reference different outputs. For example, you can use ",(0,s.jsx)(t.code,{children:"{task_1.output_2}"})," to reference the third best result (we start counting at 0) from a vector store retrieval task."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"{task_x.output_all}"})," - All outputs from the task at position ",(0,s.jsx)(t.code,{children:"x"})," will be concatenated using new-line characters."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"vector-store-retrieval",children:"Vector Store Retrieval"}),"\n",(0,s.jsx)(t.p,{children:"The example below uses an edge between the Vector Store Retrieval Task and the Text Completion Task. This will use the chunk text from the top result. Though, the other results are not incorporated by just using an edge."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Vector Store Retrieval Placeholders",src:n(7668).A+"",width:"921",height:"852"})}),"\n",(0,s.jsx)(t.p,{children:"More patterns are available to reference outputs from Vector Store Retrieval Tasks:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"{task_x.output_y.chunkSimilarityMetadata}"})," - This uses all metadata fields and wraps them in a single JSON element like below:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "chunkSimilarityMetadata":  // - always used to wrap the metadata\n    {\n        "score": 0.76, // - always present, marks the similarity score\n        "chunkId": "chunkId_xyz_2", // - always present, contains the id of the chunk\n        "chunkText": "<chunk text>", // - (almost) always present, contains the chunk text behind the embedding\n        "parenUrl": "http://example.com/some-file", // - can be used to fetch and parse the file inside the process, can get an updated SAS-token if hosted by entaingine\n        "file-url": "http://example.com/some-file", // - can be used to fetch and parse the file inside the process, can get an updated SAS-token if hosted by entaingine\n        "another-url-key": "http://example.com/some-file" // - can NOT be used to fetch and parse the file inside the process, the maintainer of the vectorStore is responsible to keep the URL up to date and reachable\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"{task_x.output_y.chunkSimilarityMetadata.<someMetadatakey>}"})," - This just returns the data at a specifc metadata key without any added formatting.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"{task_x.output_y.chunkSimilarityMetadata.parentUrl}"})," - This is a special case, where the entire document behind the URL is getting fetched and parsed. This also works for the key ",(0,s.jsx)(t.code,{children:"file_url"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"{task_x.output_all.chunkSimilarityMetadata}"})," - This wraps chunkSimilarityMetada JSON-objects from all outputs into a JSON-array like below:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[\n    {\n        "chunkSimilarityMetadata": {...}\n    },\n    {\n        "chunkSimilarityMetadata": {...}\n    }\n]\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"{task_x.output_all.chunkSimilarityMetadata.<someMetadatakey>}"})," - This returns the data at a specifc metadata key for all outputs concatenated with new-line characters ",(0,s.jsx)(t.code,{children:"\\n"}),". Be careful, as ",(0,s.jsx)(t.code,{children:"file_url"})," and ",(0,s.jsx)(t.code,{children:"parentUrl"})," metadata keys will be replaced with the full content of the files. This could easily fill out the entire context window in some cases!"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7668:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/user-guides_placeholder-pattern_vector-store-retrieval-c894215e1142935e215998c7b562432d.png"},6615:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/user-guides_placeholder-patterns_inputTemplates-99e25e938496f7df2d41ac32c694ff0d.png"},7482:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/user-guides_placeholder-patterns_simple-chaining-53f4bceebf99c57ce5733dcb7ce191ba.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);