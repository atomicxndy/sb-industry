"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[391],{62772:(_s,V,s)=>{s.d(V,{ReviewWorkflowsCreatePage:()=>J});var t=s(92132),l=s(21272),z=s(85963),h=s(83997),k=s(43064),A=s(30893),D=s(91134),N=s(54514),c=s(61535),Y=s(54894),i=s(82437),Q=s(17703),$=s(16751),G=s(54892),o=s(90370),I=s(8214),O=s(3626),r=s(45084),P=s(25524),H=s(1121),ls=s(35658),rs=s(56336),is=s(48940),Es=s(12083),ds=s(15126),Ms=s(63299),Ds=s(67014),Os=s(59080),Ps=s(79275),gs=s(14718),ms=s(5790),fs=s(35223),vs=s(5409),hs=s(74930),cs=s(2600),Cs=s(41286),Ls=s(51187),Ts=s(39404),Rs=s(58692),Ws=s(54257),As=s(501),Is=s(57646),Bs=s(23120),Ks=s(44414),Us=s(25962),ys=s(14664),ws=s(42588),us=s(90325),js=s(62785),xs=s(87443),ps=s(41032),Ss=s(22957),Fs=s(93179),Vs=s(73055),zs=s(15747),ks=s(85306),Ns=s(77965),Ys=s(26509),Qs=s(84624),$s=s(71210),Gs=s(32058),Hs=s(81185),Js=s(82261),Xs=s(55830);const J=()=>{const{formatMessage:a}=(0,Y.A)(),{push:X}=(0,Q.W6)(),{_unstableFormatAPIError:Z,_unstableFormatValidationErrors:b}=(0,D.wq)(),_=(0,i.wA)(),E=(0,D.hN)(),{collectionTypes:B,singleTypes:K,isLoading:C}=(0,G.u)(),{isLoading:g,meta:U,workflows:m,createWorkflow:q}=(0,H.u)(),{isLoading:L,roles:y}=(0,$.u)(),f=(0,i.d4)(o.s),ss=(0,i.d4)(o.a),n=(0,i.d4)(o.b),w=(0,i.d4)(o.c),[u,d]=l.useState(null),{isLoading:j,getFeature:ts}=(0,I.m)(),[os,es]=l.useState(),[x,T]=l.useState({}),v=ts("review-workflows"),p=v?.[P.C],M=v?.[P.a],S=m?.flatMap(e=>e.contentTypes),F=async()=>{T({});try{const e=await q({data:n});if("error"in e){(0,I.x)(e.error)&&e.error.name==="ValidationError"&&es(b(e.error)),E({type:"warning",message:Z(e.error)});return}E({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}}),X(`/settings/review-workflows/${e.data.id}`)}catch{E({type:"warning",message:{id:"Settings.review-workflows.create.page.notification.error",defaultMessage:"An error occurred"}})}},as=async()=>{await F()},ns=()=>{T({})},R=(0,c.Wx)({enableReinitialize:!0,initialErrors:os,initialValues:n,async onSubmit(){const e=n.contentTypes?.some(W=>S?.includes(W));U&&p&&U?.workflowCount>=parseInt(p,10)?d("workflow"):n.stages&&M&&n.stages.length>=parseInt(M,10)?d("stage"):e?T(W=>({...W,hasReassignedContentTypes:!0})):F()},validate(e){return(0,o.v)({values:e,formatMessage:a})}});return(0,o.u)(P.R,o.i),l.useEffect(()=>{_((0,o.r)()),!g&&m&&_((0,o.d)({workflows:m})),C||_((0,o.e)({collectionTypes:B,singleTypes:K})),L||_((0,o.f)(y)),_((0,o.g)(C||L)),_((0,o.h)({name:""}))},[B,_,C,L,g,y,K,m]),l.useEffect(()=>{!g&&!j&&n.stages&&v?.[P.a]&&M&&n.stages.length>=parseInt(M,10)&&d("stage")},[j,g,v,n.stages,M]),l.useEffect(()=>{!f&&w?.length===0&&E({blockTransition:!0,type:"warning",message:a({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[a,f,w,E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.D,{}),(0,t.jsx)(c.QI,{value:R,children:(0,t.jsxs)(c.lV,{onSubmit:R.handleSubmit,children:[(0,t.jsx)(O.H,{navigationAction:(0,t.jsx)(O.B,{href:"/settings/review-workflows"}),primaryAction:(0,t.jsx)(z.$,{startIcon:(0,t.jsx)(N.A,{}),type:"submit",size:"M",disabled:!ss,children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:a({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:n?.stages?.length??0})}),(0,t.jsx)(O.R,{children:(0,t.jsx)(h.s,{alignItems:"stretch",direction:"column",gap:7,children:f?(0,t.jsx)(k.a,{children:a({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})}):(0,t.jsxs)(h.s,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(o.W,{}),(0,t.jsx)(o.S,{stages:R.values?.stages})]})})})]})}),(0,t.jsx)(D.TM.Root,{isConfirmButtonLoading:f,isOpen:Object.keys(x).length>0,onToggleDialog:ns,onConfirm:as,children:(0,t.jsx)(D.TM.Body,{children:(0,t.jsxs)(h.s,{direction:"column",gap:5,children:[x.hasReassignedContentTypes&&(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:S?.filter(e=>n.contentTypes?.includes(e)).length})}),(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(r.L.Root,{isOpen:u==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(r.L.Root,{isOpen:u==="stage",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
