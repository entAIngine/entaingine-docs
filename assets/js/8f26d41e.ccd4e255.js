"use strict";(self.webpackChunkentaingine_docs=self.webpackChunkentaingine_docs||[]).push([[5639],{8720:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=n(4848),t=n(8453);const o={sidebar_position:6},r="Using GPT-Vision",l={id:"user-guides/gpt-vision",title:"Using GPT-Vision",description:"Many OpenAI models support a Vision feature that allows you to upload images and reference them in your prompts. To create tasks using this feature, utilize the Prompt with Files node.",source:"@site/docs/user-guides/gpt-vision.md",sourceDirName:"user-guides",slug:"/user-guides/gpt-vision",permalink:"/user-guides/gpt-vision",draft:!1,unlisted:!1,editUrl:"https://github.com/entAIngine/entaingine-docs/tree/main/docs/user-guides/gpt-vision.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Placeholder Patterns",permalink:"/user-guides/placeholder-patterns"},next:{title:"Developer Guide",permalink:"/category/developer-guide"}},d={},a=[{value:"Setting Up the Input Template",id:"setting-up-the-input-template",level:2},{value:"Allowed File Types",id:"allowed-file-types",level:2},{value:"Image Submission Limits",id:"image-submission-limits",level:2},{value:"Models Supporting Vision",id:"models-supporting-vision",level:2}];function u(e){const i={blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"using-gpt-vision",children:"Using GPT-Vision"}),"\n",(0,s.jsxs)(i.p,{children:["Many OpenAI models support a ",(0,s.jsx)(i.strong,{children:"Vision"})," feature that allows you to upload images and reference them in your prompts. To create tasks using this feature, utilize the ",(0,s.jsx)(i.strong,{children:"Prompt with Files"})," node."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Prompt with Files Node",src:n(2784).A+"",width:"740",height:"845"})}),"\n",(0,s.jsx)(i.h2,{id:"setting-up-the-input-template",children:"Setting Up the Input Template"}),"\n",(0,s.jsxs)(i.p,{children:["Before using the Prompt with Files node, define an ",(0,s.jsx)(i.strong,{children:"Input Template"})," of the ",(0,s.jsx)(i.strong,{children:"File URL"})," input type. This ensures the template will be available when configuring prompts with files."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Allowed file types for vision requests",src:n(9134).A+"",width:"994",height:"744"})}),"\n",(0,s.jsx)(i.h2,{id:"allowed-file-types",children:"Allowed File Types"}),"\n",(0,s.jsx)(i.p,{children:"When using GPT-Vision, the following file types are supported:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"webp"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"png"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"jpeg"})}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"pdf"})," \u2013 Converted into one image per page:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The quality may be lower than the original."}),"\n",(0,s.jsx)(i.li,{children:"Large or unusual dimensions can be problematic."}),"\n",(0,s.jsx)(i.li,{children:"If you need to preserve very high quality, submit pages individually."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"pptx"})," \u2013 Converted into one image per slide (quality may be reduced)."]}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note:"})," Make sure the file extension matches the actual file type."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"image-submission-limits",children:"Image Submission Limits"}),"\n",(0,s.jsxs)(i.p,{children:["You can submit up to ",(0,s.jsx)(i.strong,{children:"10 images"})," in a single request. Tests suggest that including more images in one request may reduce output quality."]}),"\n",(0,s.jsx)(i.h2,{id:"models-supporting-vision",children:"Models Supporting Vision"}),"\n",(0,s.jsx)(i.p,{children:"The following models support vision:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"azure gpt-4o-mini"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"gpt-4o-mini"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"azure-4-o"})}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"gpt-4-turbo-with-vision"})," (only describes the first picture)"]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"gpt-4-o"})}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Important:"})," If you select a model that does not support vision, it may hallucinate and describe a random image you did not provide. Some models may explicitly indicate they cannot process images."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9134:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/user-guides_gpt-vision_input-allowed-types-b7c10dbd90a1b71547841e659b233a8d.png"},2784:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/user-guides_gpt-vision_prompt-with-files-606b973472fafeb236e59f5230b37b54.png"},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var s=n(6540);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);