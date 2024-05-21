import{a as s}from"./jsx-runtime-e43ccb36.js";import{r as c,R as p}from"./index-1b03fe98.js";import{M as y}from"./ModalContext-888db322.js";let v=(o=21)=>crypto.getRandomValues(new Uint8Array(o)).reduce((t,e)=>(e&=63,e<36?t+=e.toString(36):e<62?t+=(e-26).toString(36).toUpperCase():e>62?t+="-":t+="_",t),"");const m=(o,t)=>{const e={...o};switch(t.type){case"ADD_WINDOW":return e[t.id]=t.window,e;case"REMOVE_WINDOW":return delete e[t.id],e;case"UPDATE_WINDOW":return e[t.id]=t.window,e;default:return o}},_=({children:o})=>{const[t,e]=c.useReducer(m,{}),[n,i]=c.useState(),u=l=>{const r=v();return e({type:"ADD_WINDOW",id:r,window:l}),r},d=l=>{e({type:"REMOVE_WINDOW",id:l})},b=(l,r)=>{e({type:"UPDATE_WINDOW",id:l,window:r})};return s(y.Provider,{value:{windows:t,addWindows:u,removeWindow:d,updateWindow:b,setActiveWindow:i,activeWindow:n},children:o})};try{_.displayName="ModalProvider",_.__docgenInfo={description:"",displayName:"ModalProvider",props:{}}}catch{}const g=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const S=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const f=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const O=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const j=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const T=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const M=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const P=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const z=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const h=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const w=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const D=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const k=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const W=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const A=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const x=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const N=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const R=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const E=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const I=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const U=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const C=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const G=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const V=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const F=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const L=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const $=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const q=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const B=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const H=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const J=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const K=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const Q=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const X=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const Y=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const Z=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),ee=Object.freeze(Object.defineProperty({__proto__:null,azureOrange:S,bee:f,blackAndWhite:O,brick:j,candy:T,coldGray:M,counterStrike:P,eggplant:z,highContrast:h,lilac:w,lilacRoseDark:D,maple:k,marine:W,matrix:A,millenium:x,modernDark:N,molecule:R,ninjaTurtles:E,olive:I,pamelaAnderson:U,plum:C,rainyDay:G,rose:V,slate:F,spruce:L,storm:$,theSixtiesUSA:q,tokyoDark:B,tooSexy:H,travel:J,vaporTeal:K,vermillion:Q,violetDark:X,water:Y,win95:Z},Symbol.toStringTag,{value:"Module"}));console.log({GlobalStyle:g});global.themes=Object.keys(ee);const te=(o,{globals:t})=>{const{selectedTheme:e}=t;return p.useEffect(()=>{{const n=`r95_theme_${e}`;return document.body.classList.add(n),()=>{document.body.classList.remove(n)}}},[e]),s("div",{style:{padding:10},children:s(o,{})})},oe=te;const a=(o,t)=>s(_,{children:s(o,{...t})});a.__docgenInfo={description:"",methods:[],displayName:"withModal"};const re={selectedTheme:{name:"Theme",description:"Global theme for components",defaultValue:"win95"}},_e=[oe,a];export{_e as decorators,re as globalTypes};
