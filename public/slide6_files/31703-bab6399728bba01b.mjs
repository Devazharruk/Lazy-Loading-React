"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[31703],{552341:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(149722);let r=()=>{let e=(0,a.Z)(),t=!!e.isAuth&&e.isPartner;return t}},354500:(e,t,s)=>{s.d(t,{Oz:()=>a,mo:()=>i,nt:()=>n,v8:()=>r});let a={BUSINESS_ACCOUNT:"BUSINESS_ACCOUNT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",USER_ACCOUNT:"USER",AD_ACCOUNT:"AD_ACCOUNT",PROFILE:"PROFILE"},r="BUSINESS_PANEL",n="ASSET_PANEL",i=500},368552:(e,t,s)=>{s.d(t,{FE:()=>T,lG:()=>O,d9:()=>N});var a=s(667294),r=s(616550),n=s(552341),i=s(516018),u=s(340523),l=s(149722),c=s(953565);let d=()=>{let e=(0,l.Z)(),{checkExperiment:t}=(0,u.F)(),s=(0,n.Z)()&&t("web_m10n_business_reporting_business_entity_service").anyEnabled,[r,d]=(0,a.useState)({isReady:!1}),_=(0,a.useCallback)(async({entityId:e,actingBusinessId:t,favorites:a})=>{s&&(await (0,i.yo)({entityId:e,actingBusinessId:t,favorites:a}),d(e=>{let s={...e,actingBusinessId:t};return a&&(s.favoriteAdAccounts={favoriteAdAccountsMap:{...e.favoriteAdAccounts?.favoriteAdAccountsMap||{},[a.actingBusinessId]:{advertiserId:a.adAccounts}}}),s}))},[s]);return(0,a.useEffect)(()=>{s&&e.isAuth&&!r.isReady&&(async()=>{let t=!1;try{let t=await (0,i.SF)({entityId:e.id});d(e=>({...e,...t}))}catch{t=!0}finally{(0,c.nP)("globalAccountSwitcher.getFavoriteAdAccounts",{sampleRate:1,tags:{businessId:e.id,hasError:t}}),d(e=>({...e,isReady:!0}))}})()},[r.isReady,s,e]),{accountSwitcherConfig:r,setConfig:_}};var _=s(354500),A=s(214877),E=s(342513),S=s(96157),o=s(624797),m=s(938927),p=s(441354),C=s(785893);let{Provider:I,useHook:N}=(0,E.Z)("AccountSwitcherContext"),O=e=>e.search&&(0,o.mB)(e.search).advertiserId,T=({children:e})=>{let{checkExperiment:t}=(0,u.F)(),{anyEnabled:s}=t("business_access_assets_and_history_api_v4_migration"),c=(0,r.TH)(),{params:{userBizId:E,businessHierarchyId:o,advertiserId:N,username:T}}=(0,r.$B)(),g=O(c),y=(0,l.Z)(),[R,U]=(0,a.useState)(""),[f,D]=(0,a.useState)(null),[P,h]=(0,a.useState)(!1),[b,L]=(0,a.useState)(null),$=new URLSearchParams(c.search),[v,B]=(0,a.useState)($.has("actingBusinessId")?null:{id:y.id||"",name:y.fullName||"",img:y.imageMediumUrl||""}),[w,M]=(0,a.useState)(!1),G=(0,n.Z)(),{logContextEvent:H}=(0,A.v)(),{accountSwitcherConfig:Z,setConfig:F}=d();(0,a.useEffect)(()=>{o?U(o):U("")},[o]);let k=(0,a.useCallback)(async({id:e,username:t})=>{let s=await (0,i.bG)({user_id:e,username:t});s&&L({type:e?_.Oz.BUSINESS_ACCOUNT:_.Oz.PROFILE,id:e||s.id,name:s.full_name,img:s.image_medium_url,username:t}),M(!1)},[]),z=(0,p.rc)(T);(0,a.useEffect)(()=>{(0,S.cD)(c)&&b&&z!==T&&T===y.username&&(k({username:y.username}),B({id:y.id||"",name:y.fullName||"",img:y.imageMediumUrl||""}),D({type:_.nt,id:y.id}))},[c,z,k,b,T,y.fullName,y.id,y.imageMediumUrl,y.username]),(0,a.useEffect)(()=>{let e=async({businessId:e,assetId:t})=>{if(!e){M(!1);return}try{let a={asset:{name:""},type:"AD_ACCOUNT"};if(s&&y.isAuth){let{data:{data:e={[t]:a}}={}}=await (0,m.pI)({businessId:y.id,assetIds:[t],resourceType:"AD_ACCOUNT"})||{},{asset:s,type:r}=e[t]||a;L({id:t,name:s.name,img:"",type:r})}else{let{data:{data:{asset:s,type:a}}}=await (0,m.G2)({businessId:e,assetId:t,resourceType:"AD_ACCOUNT",includeAssetSummary:!0});L({id:t,name:s.name,img:"",type:a})}}catch{L({id:y.id||"",name:y.fullName||"",img:y.imageMediumUrl||"",type:_.Oz.BUSINESS_ACCOUNT})}M(!1)},t=async({id:e})=>{let t=await (0,i.p)({hierarchyId:e});L({id:e,name:t?.data?t.data.name:"",img:t?.data?t.data.img_medium_url:"",type:_.Oz.BUSINESS_HIERARCHY}),M(!1)};if(y.isAuth&&G){let s=b&&b.username&&b.username!==T;if((!b||s)&&!w){let s=(0,S.TI)(c)||(0,S.h3)(c),a=N||!!g&&!s;M(!0),o?t({id:o}):E?k({id:E}):(0,S.cD)(c)&&T?k({username:T}):a?e({businessId:y.id,assetId:N||g||""}):b&&b.id===y.id||(L({type:_.Oz.BUSINESS_ACCOUNT,id:y.id||"",name:y.fullName||"",img:y.imageMediumUrl||""}),M(!1))}}},[b,y,o,E,T,N,g,v,G,c,k,w,s]);let V=(0,a.useMemo)(()=>({activePanel:f,selectedHierarchyId:R,switcherOpen:P,openAccountSwitcher:()=>{if(H({event_type:101,view_type:608,component:14346}),!f){if((0,S.TI)(c))D({type:_.v8});else{let e=new URLSearchParams(c.search),t=e.get("actingBusinessId");D({type:_.nt,id:t??v?.id})}}h(!0)},closeAccountSwitcher:()=>h(!1),openAssetPanel:e=>{D({type:_.nt,id:e})},closeAssetPanel:()=>{D({type:_.v8})},actingBusiness:v,selectedAccount:b,setSelectedAccount:L,setActingBusiness:B,accountSwitcherConfig:Z,setConfig:F}),[f,R,P,v,b,Z,F,H,c]);return(0,C.jsx)(I,{value:V,children:e})}},593882:(e,t,s)=>{s.d(t,{C:()=>p,H:()=>C});var a=s(667294),r=s(552341),n=s(354500),i=s(516018),u=s(29156),l=s(250304),c=s(24691),d=s(342513),_=s(107366),A=s(244413),E=s(149722),S=s(186966),o=s(785893);let{Provider:m,useHook:p}=(0,d.Z)("BusinessHierarchyContext"),C=({children:e})=>{let[t,s]=(0,a.useState)([]),[d,p]=(0,a.useState)(!1),[C,I]=(0,a.useState)(!1),[N,O]=(0,a.useState)({}),[T,g]=(0,a.useState)(null),[y,R]=(0,a.useState)([]),[U,f]=(0,a.useState)({}),D=(0,S.Z)(),P=(0,a.useRef)(D),h=(0,E.Z)(),b=(0,r.Z)(),L=(0,a.useRef)({}),$=(0,a.useCallback)((e,t)=>{let s;t===n.Oz.BUSINESS_HIERARCHY?s=(0,c.Z)(l.Q6.DASHBOARD,"","",e):t===n.Oz.BUSINESS_ACCOUNT&&(s=(0,c.Z)(l.Q6.DASHBOARD,e));let a=(0,A.Z)({site:"www",path:s});(0,u.Z)(a)},[]),v=(0,a.useCallback)(async e=>{if(!b)return[];if(I(!0),L.current[e])return I(!1),L.current[e];{let t=await (0,_.Z)({url:"ads/v4/business_access/business_hierarchies/",data:{search_by:["FULL_NAME","BUSINESS_ID"],search_value:e}}),{data:s}=t.resource_response,a=s&&s.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=n.Oz.USER_ACCOUNT,e))),e))||[],r=/^\d+$/.test(e),u=RegExp(e.toLowerCase(),"g"),l=[];T||g(l=await P.current());let c=T??l,d=c.filter(t=>{if(r)return t.id.includes(e);let s=t.user.full_name.toLowerCase();return s.match(u)}).map(i.IT),A=[...a.map(e=>e.id),...d.map(e=>e.id)],E=r?(h.id||"").includes(e):(h.fullName||"").toLowerCase().match(u);return h.isAuth&&E&&A.push(h.id),L.current[e]=A,I(!1),A}},[b,P,h.id,h.fullName,h.isAuth,T]),{id:B="",username:w="",email:M="",fullName:G="",imageSmallUrl:H="",imageMediumUrl:Z="",isAuth:F}=h,k=async e=>{if((!F||!b||T)&&!e)return;p(!0);let t=[];try{let e=await (0,_.Z)({url:"ads/v4/business_access/business_hierarchies/"}),{data:a}=e.resource_response;t=a&&a.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=n.Oz.USER_ACCOUNT,e))),e))||[],s(t)}catch{s([])}try{let e=[];T||(e=await P.current(),g(e));let s=T??e;R(s.map(i.IT)),f(s.reduce((e,t)=>(e[t.id]=t.business_roles||[],e),{})),O((0,i.WP)({id:B,username:w,email:M,fullName:G,imageSmallUrl:H,imageMediumUrl:Z})),L.current[""]=[...t.map(e=>e.id),...s.map(i.IT).map(e=>e.id),B],p(!1)}catch{p(!1)}},z=(0,a.useCallback)(k,[B,w,M,G,H,Z,F,b,T]),V=(0,a.useCallback)(e=>t.some(t=>t.id===e||t.children.some(t=>t.id===e||t.user.id===e)),[t]),x=(0,a.useCallback)(e=>t.map(e=>"BUSINESS_HIERARCHY"===e.entity_type?e:null).find(t=>!!t&&t.children.some(t=>t.user.id===e)),[t]),Y=(0,a.useMemo)(()=>({businessHierarchies:[...N.id&&!V(N.id)?[N]:[],...t,...y.filter(e=>!V(e.id))],switchAccount:$,searchAccounts:v,loadingAccounts:d,isSearchingAccounts:C,fetchData:z,getParentHierarchyForIdIfExists:x,viewerRolesOfEachEmployer:U}),[t,$,v,y,d,C,N,z,V,x,U]);return(0,o.jsx)(m,{value:Y,children:e})}},516018:(e,t,s)=>{s.d(t,{IT:()=>d,SF:()=>o,Vq:()=>c,WP:()=>_,Yu:()=>S,bG:()=>E,p:()=>A,yo:()=>m});var a=s(216167),r=s(354500),n=s(107366),i=s(288673),u=s(562967),l=s(785893);let c=e=>({id:e.id,entity_type:r.Oz.BUSINESS_ACCOUNT,user:{id:e.user.id,entity_type:r.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),d=e=>({id:e.id,entity_type:r.Oz.BUSINESS_ACCOUNT,requires_mfa_for_roles:e.requires_mfa_for_roles,user:{id:e.user.id,entity_type:r.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),_=e=>({id:e.id,entity_type:r.Oz.BUSINESS_ACCOUNT,user:{id:e.id,entity_type:r.Oz.USER_ACCOUNT,username:e.username,email:e.email,full_name:e.fullName,image_small_url:e.imageSmallUrl,image_medium_url:e.imageMediumUrl}}),A=async({hierarchyId:e})=>{let t=await (0,n.Z)({url:`ads/v4/business_access/business_hierarchy/${e}/`});return t.resource_response},E=async({user_id:e,username:t})=>{if(!t&&!e)return null;let s=await a.Z.create("UserResource",{user_id:e,username:t}).callGet(),{resource_response:{data:r}}=s;return r},S=(0,l.jsx)("hr",{style:{borderTop:"1px solid #e9e9e9"}}),o=async({entityId:e})=>{let t=await (0,i.FO)([{entity_type:"BIZ_USER",entity_id:e,property_keys:["GLOBAL_ACCOUNT_SWITCHER_CONFIG"]}]),s=t[0];if(!(s&&s.properties))return{};let a=s.properties.GLOBAL_ACCOUNT_SWITCHER_CONFIG;return a},m=async({entityId:e,actingBusinessId:t,favorites:s})=>{let a={};(0,u.k)(t)||(a.actingBusinessId=t),s&&(a.favoriteAdAccounts={favoriteAdAccountsMap:{[s.actingBusinessId]:{advertiserId:s.adAccounts}}}),Object.keys(a).length>0&&await (0,i.RM)([{entity_type:"BIZ_USER",entity_id:e,properties:{GLOBAL_ACCOUNT_SWITCHER_CONFIG:a}}])}},24691:(e,t,s)=>{s.d(t,{Z:()=>n});let a="/business/business-manager/",r="/business/business-hierarchy/",n=(e,t,s,n)=>{switch(e){case"DASHBOARD":return n?`${r}${String(n)}/dashboard/`:`${a}${String(t)}/dashboard/`;case"PEOPLE":return`${a}${String(t)}/employees/`;case"PARTNERS":return`${a}${String(t)}/partners/`;case"AD_ACCOUNTS":return`${a}${String(t)}/ad-accounts/`;case"HISTORY":return`${a}${String(t)}/history/`;case"PEOPLE_DETAIL":return`${a}${String(t)}/employees/${String(s)}/details/`;case"PARTNERS_DETAIL":return`${a}${String(t)}/partners/${String(s)}/details/`;case"SHARED_PARTNERS_DETAIL":return`${a}${String(t)}/shared/${String(s)}/details/`;case"AD_ACCOUNTS_DETAIL":return`${a}${String(t)}/ad-accounts/${String(s)}/details/`;case"PENDING_AD_ACCOUNTS_DETAIL":return`${a}${String(t)}/ad-accounts/pending/${String(s)}/details/`;case"PEOPLE_INVITES":return`${a}${String(t)}/employees/invites/`;case"PEOPLE_PENDING_TAB":return`${a}${String(t)}/employees/pending/`;case"PARTNERS_PENDING_TAB":return`${a}${String(t)}/partners/pending/`;case"AD_ACCOUNTS_PENDING_TAB":return`${a}${String(t)}/ad-accounts/pending`;case"AD_ACCOUNTS_CEE_MIGRATION":return`${a}${String(t)}/ad-accounts/cee-migration`;case"PARTNERS_INVITE_PAGE":return`${a}${String(t)}/partners/invites/`;case"PARTNERS_REQUEST_PAGE":return`${a}${String(t)}/partners/requests/`;case"PROFILES":return`${a}${String(t)}/profiles/`;case"PROFILES_DETAIL":return`${a}${String(t)}/profiles/${String(s)}/details/`;case"BUSINESS_SECURITY":return`${a}${String(t)}/security/`;case"SUPPORT_TOOL":return`${a}${String(t)}/support/`;case"ASSET_GROUPS":return s?`${a}${String(t)}/asset-groups/?asset_group_id=${String(s)}`:`${a}${String(t)}/asset-groups/`;case"INVOICE_MANAGEMENT":return`${a}${String(t)}/invoice-management/`;case"BUSINESS_HIERARCHY":return`${r}${String(n)}/hierarchy/`;case"BUSINESS_HIERARCHY_BUSINESS_SECURITY":return`${r}${String(n)}/business_security/`;case"MANAGERS":return`${r}${String(n)}/managers/`;case"AUDIENCES":return`${a}${String(t)}/audiences/`;case"SHARED_TAGS":return`${a}${String(t)}/shared-tags/`;case"CATALOGS":return`${a}${String(t)}/catalogs/`;case"BRAND_SAFETY":return`${a}${String(t)}/brand-safety/`;default:return a}}},317540:(e,t,s)=>{s.d(t,{Z:()=>a});let a={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},186966:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(107366);function r(){return async()=>{let e=await (0,a.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),t=e.resource_response?e.resource_response.data:{data:[]};return await Promise.all(t&&t.data||[])}}},665407:(e,t,s)=>{s.d(t,{By:()=>n,di:()=>u,s8:()=>i});var a=s(250304),r=s(107366);let n=async({limit:e,sortBy:t="FULL_NAME",sortDirection:s="ASCENDING",searchBy:n="FULL_NAME",searchTerm:i="",startIndex:u=0})=>{let l=e&&e<a.xX?e:a.xX,c=await (0,r.Z)({url:"ads/v4/business_access/businesses/me/get_pinterest_support_businesses",data:{sort_by:t,sort_ascending:"ASCENDING"===s,search_by:n,search_value:i,start_index:u,page_size:l}});return c.resource_response},i=async e=>{let t=await (0,r.Z)({url:`ads/v4/business_access/businesses/${e}/get_pinterest_support_access`});return t.resource_response},u=async()=>{let e=await (0,r.Z)({url:"ads/v4/pinterest_support_managed_advertisers",data:{add_fields:"advertiser.owner_user()"}});return e.resource_response}},939341:(e,t,s)=>{s.d(t,{I:()=>p,a:()=>o});var a=s(667294),r=s(616550),n=s(516018),i=s(700280),u=s(342513),l=s(340523),c=s(149722),d=s(665407),_=s(130371);let A=()=>{let{checkExperiment:e}=(0,l.F)(),t=(0,c.Z)(),s=!!(t.isAuth&&t.isPartner&&e("web_m10n_pin_support_tool").anyEnabled),{state:r,receiveAdAccounts:n}=(0,_.Z)(s),{managedBusinessesMap:i,error:u,fetching:A}=r,E=!!u||i.size>0,S=(0,a.useCallback)(async()=>{let e=await (0,d.di)();n(e?.data??[])},[n]);return(0,a.useEffect)(()=>{E||A||S()},[S,E,A]),i};var E=s(785893);let{Provider:S,useMaybeHook:o}=(0,u.Z)("PinSupportToolContext"),m=()=>{let{search:e}=(0,r.TH)();return(0,a.useMemo)(()=>new URLSearchParams(e),[e])},p=({children:e,viewerAdvertiser:t})=>{let{checkExperiment:s}=(0,l.F)(),r=(0,c.Z)(),u=r.isAuth&&r.isPartner&&s("web_m10n_pin_support_tool").anyEnabled,{state:d,actions:o}=(0,_.Z)(u),p=A(),C=[...p.values()].map(e=>(0,n.Vq)(e)),{sterling_on_steroids_ldap:I}=(0,i.u)(),{activeAdAccount:N,headerVisible:O}=d,T=r.isAuth&&!!I,{changeClient:g,changeAdAccount:y,toggleHeaderVisibility:R}=o;(0,a.useEffect)(()=>{u&&(T&&!O&&R(!0),!T&&O&&R(!1))},[R,T,u,O]);let U=m(),f=U.get("managedClientId"),D=U.get("advertiserId"),P=D||t?.id;(0,a.useEffect)(()=>{f&&P?y(P,f):f&&g(f)},[g,y,f,P]);let h=p.get(N?.clientId||""),b=h?.managedAdAccounts||new Map,L=b.get(N?.adAccountId||""),$=[...p.values()];return(0,E.jsx)(S,{value:{managedBusinesses:$,managedBusinessAccounts:C,headerVisible:d.headerVisible,activeClient:h,activeAdAccount:L,viewerAdvertiser:t,changeClient:g,changeAdAccount:y,toggleHeaderVisibility:R},children:e})}},130371:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(667294),r=s(573810);let n=e=>{let t=e.map(e=>({id:e.business.id,ownedAndManagedAdAccounts:e.business.ad_account_count,user:e.business.pinterest_support_business,managedAdAccounts:e.advertisers.reduce((e,t)=>e.set(t.id,t),new Map)})),s=[...t].sort(({user:{username:e}},{user:{username:t}})=>e.localeCompare(t)),a=s.map(e=>{let t=e.managedAdAccounts.values(),s=[...t].sort(({name:e},{name:t})=>e.localeCompare(t));return e.managedAdAccounts=s.reduce((e,t)=>e.set(t.id,t),new Map),e}),r=a.reduce((e,t)=>e.set(t.id,t),new Map);return r},i={managedBusinessesMap:new Map,headerVisible:!1,activeAdAccount:{clientId:void 0,adAccountId:void 0},fetching:!1,error:!1},u=(e,t)=>{switch(t.type){case"LOAD_AD_ACCOUNTS":return{...e,managedBusinessesMap:t.payload.managedBusinesses};case"SET_ACTIVE_CLIENT":case"SET_ACTIVE_AD_ACCOUNT":return{...e,activeAdAccount:t.payload};case"TOGGLE_HEADER_VISIBILITY":return{...e,headerVisible:t.payload};default:return e}},l=({dispatch:e,isEnabled:t,state:s})=>{let{headerVisible:r}=s,n=(0,a.useCallback)(s=>{t&&e({type:"SET_ACTIVE_CLIENT",payload:{clientId:s,adAccountId:null}})},[t,e]),i=(0,a.useCallback)((s,a)=>{t&&e({type:"SET_ACTIVE_AD_ACCOUNT",payload:{adAccountId:s,clientId:a}})},[t,e]),u=(0,a.useCallback)(s=>{t&&e({type:"TOGGLE_HEADER_VISIBILITY",payload:s??!r})},[t,e,r]);return{changeClient:n,changeAdAccount:i,toggleHeaderVisibility:u}},c=e=>{let[t,s]=(0,a.useReducer)(u,i),c=l({dispatch:s,isEnabled:e,state:t}),{activeAdAccount:d}=t;(0,a.useEffect)(()=>{let e=JSON.parse((0,r.qn)("psToolAdAccount",!1));e&&s({type:"SET_ACTIVE_AD_ACCOUNT",payload:e})},[]),(0,a.useEffect)(()=>{(0,r.Nh)("psToolAdAccount",JSON.stringify(d))},[d]);let _=(0,a.useCallback)(e=>{let t=n(e);s({type:"LOAD_AD_ACCOUNTS",payload:{managedBusinesses:t}})},[s]);return{state:t,actions:c,receiveAdAccounts:_}}},441354:(e,t,s)=>{s.d(t,{XI:()=>r,YZ:()=>i,rc:()=>n,sU:()=>c});var a=s(667294);function r(e){let[t,s]=(0,a.useState)(!1),r=()=>s(!0),n=()=>s(!1);return(0,a.useEffect)(()=>{let{current:t}=e;return t&&(t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",n)),()=>{t&&(t.removeEventListener("mouseenter",r),t.removeEventListener("mouseleave",n))}}),t}let n=e=>{let t=(0,a.useRef)(e);return(0,a.useEffect)(()=>{t.current=e}),t.current};function i(){let e=(0,a.useRef)(!0);return(0,a.useEffect)(()=>{e.current=!1},[]),e.current}function u(e,t){return Object.is(e,t)}let l=Symbol("pre-initial value");function c(e,{equal:t=u,delta:s}={equal:u}){let r=(0,a.useRef)(l),n=r.current;return(0,a.useEffect)(()=>{r.current=e}),{previousValue:n,changed:n===l||!t(n,e),delta:s?.(n,e)}}},983983:(e,t,s)=>{s.d(t,{L1:()=>n,Rz:()=>l,WZ:()=>i,cI:()=>r,fe:()=>u,hu:()=>a});let a=64,r=80,n=22,i="HeaderContent",u=671,l={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}},520719:(e,t,s)=>{s.d(t,{$o:()=>i,GW:()=>a,Jo:()=>n,MS:()=>p,Q8:()=>o,VX:()=>E,Zo:()=>l,aD:()=>c,b2:()=>_,g2:()=>A,s4:()=>u,tK:()=>m,ym:()=>d,zQ:()=>S});let a="/business/hub/?show_vmp=true",r=["FR"],n=["US","GB","CA","AU","DE","FR"].concat(["ES","IT","AT","CH","NL","BR","MX"]).filter(e=>!r.includes(e)),i={APPROVED:"approved",PENDING:"pending",DISAPPROVED:"declined",APPEAL_PENDING:"appeal_pending"},u=Object.freeze({APPLIED:"APPLIED",ACCEPTED:"ACCEPTED",NON_COMPLIANT:"NON_COMPLIANT",SUSPENDED:"SUSPENDED",CANCELLED:"CANCELLED"}),l=Object.freeze({UNSTARTED:"workflow-status-unstarted",IN_PROGRESS:"workflow-status-in-progress",ACCEPTED:"check-circle",ATTENTION:"workflow-status-warning",REJECTED:"workflow-status-problem",RECOMMENDED:"info-circle"}),c=Object.freeze({UNSTARTED:"dark",IN_PROGRESS:"success",ACCEPTED:"success",ATTENTION:"warning",REJECTED:"error",RECOMMENDED:"subtle"}),d="Verified merchant program not yet available in this country",_=2e3,A={can_appeal:!0,is_appeal:!1,appeal_count:0,appeal_comment:"",shipping_policy_url:"",return_policy_url:"",review_status:2,review_reasons:[]},E=Object.freeze({ACCOUNT_AGE:"ACCOUNT_AGE",DOMAIN_AGE:"DOMAIN_AGE",PROFILE_IMAGE:"PROFILE_IMAGE",PROFILE_COVER_IMAGE:"PROFILE_COVER_IMAGE",BIO:"BIO",SHOP_TAB:"SHOP_TAB",PINNER_FEEDBACK:"PINNER_FEEDBACK"}),S=[E.ACCOUNT_AGE,E.DOMAIN_AGE,E.PROFILE_IMAGE,E.PROFILE_COVER_IMAGE,E.BIO,E.SHOP_TAB,E.PINNER_FEEDBACK],o=Object.freeze({PASS:"PASS",FAIL:"FAIL"}),m=30,p=.5}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/31703-bab6399728bba01b.mjs.map