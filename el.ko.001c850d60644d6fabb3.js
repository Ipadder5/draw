(window.webpackJsonp=window.webpackJsonp||[]).push([["el.ko"],{485:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(191),u=a(192),r=a(506),s=a(509),o=a(473),m=a(464),i=a(471),p=a(470),d=a(508),b=a(467),O=a(468),j=a(474),E=a(507),N=a(472),P=a(469);function f(){return{currentMatchupNum:0,currentPotNum:1,possiblePairings:null}}t.default=Object(n.memo)(({season:e,pots:t})=>{const[a,h]=Object(m.a)("draw-"),M=Object(n.useMemo)(()=>t.map(e=>u(e)),[t,a]),g=Object(n.useMemo)(()=>l(16).map(()=>[]),[t,a]),k=Object(n.useMemo)(()=>Object(s.a)(e),[e]),w=Object(n.useMemo)(f,[]),[{currentMatchupNum:T,currentPotNum:G,possiblePairings:y},S]=Object(n.useState)(w),[$,v]=Object(o.a)(),x=Object(n.useCallback)(e=>{const t=M[G],a=y?y[e]:e,n=t.splice(a,1)[0];g[T].push(n);const c=1===G?Object(r.a)(M,g,k):null;S({currentPotNum:1-G,currentMatchupNum:T-G+1,possiblePairings:c}),v.add(n)},[k,M,g,G,T,y,$]),C=()=>{(y&&1===y.length||1===G&&1===M[1].length)&&x(0)};Object(n.useEffect)(()=>{setTimeout(C,250)},[G]);const J=Object(n.useCallback)(()=>{h(),S({currentMatchupNum:0,currentPotNum:1,possiblePairings:null})},[t]),A=Object(n.useMemo)(()=>y&&M[0].filter((e,t)=>y.includes(t)),[y]),I=T>=t[0].length,R=y?y.map(e=>M[0][e]):[];return c.a.createElement(P.a,null,c.a.createElement(b.a,null,c.a.createElement(p.a,{selectedTeams:R,initialPots:t,pots:M,currentPotNum:G,split:!0}),c.a.createElement(d.a,{currentMatchupNum:T,matchups:g,airborneTeams:$})),c.a.createElement(O.a,null,!I&&c.a.createElement(E.a,null,"Runners-up"),c.a.createElement(j.a,{forceNoSelect:0===G,display:!I,selectedTeam:null,pot:M[1],onPick:x}),!I&&c.a.createElement(E.a,null,"Group Winners"),I&&c.a.createElement(N.a,{long:!1,completed:I,selectedTeam:null,pickedGroup:null,possibleGroups:null,numGroups:0,reset:J}),A&&c.a.createElement(j.a,{forceNoSelect:1===G,display:!I,selectedTeam:null,pot:A,onPick:x})),$.map(e=>{const t=g.findIndex(t=>t.includes(e)),a=g[t].indexOf(e);return c.a.createElement(i.a,{key:e.id,from:`[data-cellid='${e.id}']`,to:`[data-cellid='${t}${1===a?"gw":"ru"}']`,duration:350,data:e,onAnimationEnd:v.remove})}))})}}]);