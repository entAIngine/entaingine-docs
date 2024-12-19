"use strict";(self.webpackChunkentaingine_docs=self.webpackChunkentaingine_docs||[]).push([[3549],{9025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(4848),s=n(8453);const r={sidebar_position:7},o="Orchestrating, Testing, Scaling, and Automating the Process",a={id:"getting-started/orchestration-and-testing",title:"Orchestrating, Testing, Scaling, and Automating the Process",description:"After setting up the application and defining your variables, it\u2019s time to design, test, scale, and automate the workflow using entAIngine\u2019s orchestration tools. This section covers structuring the process, building prompts, testing each step, and expanding the workflow for greater efficiency.",source:"@site/docs/getting-started/orchestration-and-testing.md",sourceDirName:"getting-started",slug:"/getting-started/orchestration-and-testing",permalink:"/getting-started/orchestration-and-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/entAIngine/entaingine-docs/tree/main/docs/getting-started/orchestration-and-testing.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Application Setup in entAIngine",permalink:"/getting-started/application-setup"},next:{title:"Scaling and Customizing",permalink:"/getting-started/scaling-and-automation"}},c={},d=[{value:"Workflow Orchestration",id:"workflow-orchestration",level:2},{value:"Launching and Testing the Process",id:"launching-and-testing-the-process",level:2},{value:"Adding the Next Step: Email Drafting",id:"adding-the-next-step-email-drafting",level:2},{value:"Using the Debugger",id:"using-the-debugger",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"orchestrating-testing-scaling-and-automating-the-process",children:"Orchestrating, Testing, Scaling, and Automating the Process"}),"\n",(0,i.jsx)(t.p,{children:"After setting up the application and defining your variables, it\u2019s time to design, test, scale, and automate the workflow using entAIngine\u2019s orchestration tools. This section covers structuring the process, building prompts, testing each step, and expanding the workflow for greater efficiency."}),"\n",(0,i.jsx)(t.h2,{id:"workflow-orchestration",children:"Workflow Orchestration"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Selecting Models"}),": Start by choosing a text completion model, such as Azure GPT-4o, to identify the department responsible for each invoice."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Creating Prompts"}),": Set up an initial prompt that guides the model in processing the input data. Here\u2019s an example prompt you can use:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plaintext",children:"I am the CFO of a company, and I need to do invoice controlling. This is my invoice: {Invoice}. I also have a document listing the projects, departments, and their leaders: {Department Mapping}. Tell me the name and email of the person responsible for this invoice.\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This prompt provides the necessary context for the model to process the data and determine which project lead is responsible for the invoice."}),"\n",(0,i.jsx)(t.h2,{id:"launching-and-testing-the-process",children:"Launching and Testing the Process"}),"\n",(0,i.jsxs)(t.p,{children:["Once the template is built, press ",(0,i.jsx)(t.strong,{children:'"Launch"'})," to begin using the process application. The dashboard will display the process template you have built, titled ",(0,i.jsx)(t.strong,{children:'"Invoice Controlling for Departments."'})]}),"\n",(0,i.jsx)(t.p,{children:"To use the template, upload the relevant variables:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Invoice"}),": Upload the specific invoice you need to process."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Department Mapping"}),": Upload the mapping document."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Upon pressing ",(0,i.jsx)(t.strong,{children:'"Generate,"'}),' the backend processes the template, replacing variables with the actual data. The output will identify the responsible department and the project lead, for example, "The project associated with the invoice is called Microserver, which falls under the IT security department, led by Max Meyer."']}),"\n",(0,i.jsx)(t.h2,{id:"adding-the-next-step-email-drafting",children:"Adding the Next Step: Email Drafting"}),"\n",(0,i.jsx)(t.p,{children:"To complete the process, we need a second step to draft an email to the responsible person. Add another text completion model and create a prompt that includes the context from the first step:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Second prompt example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plaintext",children:"I am the CFO of a company doing invoice controlling. This is my invoice. I have already identified the responsible person: {Output from Step 1}. Write a professional email asking them to verify the invoice items and confirm whether I should pay it.\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The output of this step will be a drafted email addressed to the responsible department head, requesting confirmation."}),"\n",(0,i.jsx)(t.h2,{id:"using-the-debugger",children:"Using the Debugger"}),"\n",(0,i.jsx)(t.p,{children:"entAIngine provides a debugger to test your process and see intermediate outputs. This is useful for validating each step before running the complete process. You can upload the inputs, run each step, and verify that the outputs are correct."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);