import{r,R as e}from"./index-ff614419.js";import{n as L,o as q,B as I,p as P,q as S,r as O,s as R,t as D,u as z,v as K,E as M}from"./Write1-f730c4ea.js";import{c as B}from"./createRuntimeFn-62c9670f.esm-edc6fb2c.js";import{F as v}from"./Frame-43ccd6dd.js";import{c as b}from"./index-a20f67f3.js";var g="r95_z2881c0",C="r95_z2881c1",V="r95_z2881c2",k="r95_z2881c3",x="r95_z2881c4",X="r95_z2881c5",f=B({defaultClassName:"r95_z2881c6",variantClassNames:{hasChildren:{true:"r95_z2881c7",false:"r95_z2881c8"}},defaultVariants:{},compoundVariants:[]});const j={FILE_MEDIA:L,FILE_TEXT:q,FILE_UNKNOWN:I,FILE_FONT:P,FILE_PEN:S,FILE_SETTINGS:O,FILE_TEXT_SETTINGS:R,FILE_EXECUTABLE:D},h=({hasChildren:a,isOpen:t})=>a?t?e.createElement(z,{variant:"16x16_4","data-testid":"react95-default-icon-folder-open"}):e.createElement(K,{variant:"16x16_4","data-testid":"react95-default-icon-folder"}):e.createElement(I,{variant:"16x16_4","data-testid":"react95-default-icon-bat"}),_=({children:a=[],id:t,icon:s,label:c,onClick:d=()=>{},...u})=>{const[n,l]=r.useState(!1),p=a.length>0,N=i=>{d(i,{id:t,icon:s,label:c,children:a})},A=i=>{i.key===" "&&(l(!n),N(i))};return e.createElement(v,{as:"li",...u,className:C},e.createElement("div",{className:k},p&&e.createElement("div",{className:X,onClick:()=>l(!n)},n?"-":"+"),e.createElement("div",{className:f({hasChildren:p})},s||e.createElement(h,{hasChildren:p,isOpen:n})),e.createElement("label",{className:x,tabIndex:0,onDoubleClick:()=>l(!n),onClick:N,onKeyDown:A},c)),p&&n&&e.createElement("ul",{className:g},a==null?void 0:a.map(i=>e.createElement(_,{key:i.id,...i}))))},w=({id:a,icon:t,label:s,onClick:c=()=>{},...d})=>{const u=l=>{c(l,{id:a,icon:t,label:s})},n=l=>{l.key===" "&&u(l)};return e.createElement(v,{...d,className:b(C,V)},e.createElement("div",{className:k},e.createElement("div",{className:b(f.classNames.base,f.classNames.variants.hasChildren.true)},t||e.createElement(h,{hasChildren:!1,isOpen:!0})),e.createElement("label",{className:x,tabIndex:0,onClick:u,onKeyDown:n},s)))};_.__docgenInfo={description:"",methods:[],displayName:"Node",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactElement"},description:""},id:{required:!0,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  label: string;
  icon?: ReactElement;
  id: number;
  children?: Array<NodeProps>;
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeProps): void;
} & Omit<FrameProps<'li'>, 'id' | 'children'>`,elements:[{name:"signature",type:"object",raw:`{
  label: string;
  icon?: ReactElement;
  id: number;
  children?: Array<NodeProps>;
  onClick?(event: MouseEvent | KeyboardEvent, props: NodeProps): void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactElement",required:!1}},{key:"id",value:{name:"number",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"NodeProps"}],raw:"Array<NodeProps>",required:!1}},{key:"onClick",value:{name:"void",required:!1}}]}},{name:"Omit",elements:[{name:"intersection",raw:`{
  as?: TAs;
} & DistributiveOmit<
  ComponentPropsWithRef<ElementType extends TAs ? 'div' : TAs>,
  'as'
> &
  Sprinkles`,elements:[{name:"signature",type:"object",raw:`{
  as?: TAs;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'li'",required:!1}}]}},{name:"unknown"},{name:"Parameters[0]",raw:"Parameters<typeof sprinkles>[0]"}]},{name:"union",raw:"'id' | 'children'",elements:[{name:"literal",value:"'id'"},{name:"literal",value:"'children'"}]}],raw:"Omit<FrameProps<'li'>, 'id' | 'children'>"}]}],raw:"Array<NodeProps>"},description:"",defaultValue:{value:"[]",computed:!1}},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};w.__docgenInfo={description:"",methods:[],displayName:"NodeRoot",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const m=r.forwardRef(({data:a,root:t,...s},c)=>e.createElement(e.Fragment,null,t&&e.createElement(w,{...t}),e.createElement(v,{...s,className:g,as:"ul",ref:c},a.map(d=>e.createElement(_,{key:d.id,...d})))));m.defaultProps={data:[]};m.icons=j;m.__docgenInfo={description:"",methods:[],displayName:"Tree",props:{data:{defaultValue:{value:"[]",computed:!1},required:!1}}};const{icons:o}=m,H={data:[{id:0,label:"Applications",children:[{id:1,label:"virus.exe",icon:r.createElement(o.FILE_EXECUTABLE,{variant:"16x16_4"})}]},{id:2,label:"Music",children:[{id:3,label:"Indie",children:[{id:4,label:"Weezer",icon:r.createElement(o.FILE_MEDIA,{variant:"16x16_4"}),onClick:()=>alert("nice!")},{id:5,label:"Supergrass",icon:r.createElement(o.FILE_MEDIA,{variant:"16x16_4"})}]}]},{id:3,label:"Other",children:[{id:0,label:"Fira Code.ttf",icon:r.createElement(o.FILE_FONT,{variant:"16x16_4"})},{id:1,label:"Journal.txt",icon:r.createElement(o.FILE_TEXT,{variant:"16x16_4"})}]},{id:4,label:"config.cfg",icon:r.createElement(o.FILE_SETTINGS,{variant:"16x16_4"})},{id:5,label:"random_file",icon:r.createElement(o.FILE_UNKNOWN,{variant:"16x16_4"})}]},U={id:6,label:"My Computer",icon:r.createElement(M,{variant:"16x16_4"})},Y={title:"Tree",component:m,tags:["autodocs"]},E={render:()=>r.createElement(m,{...H,root:U}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20"}}};var y,T,F;E.parameters={...E.parameters,docs:{...(y=E.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Tree {...treeNodes} root={root} />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20'
    }
  }
}`,...(F=(T=E.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const $=["Simple"];export{E as Simple,$ as __namedExportsOrder,Y as default};
