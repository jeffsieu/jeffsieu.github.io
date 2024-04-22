var D=Object.defineProperty;var P=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var d=(e,t,n)=>(P(e,typeof t!="symbol"?t+"":t,n),n);import{r as y,n as w,f as A,h as j,i as L,j as z,k as E,l as I,m as W,p as S,q as R,v as q,w as G}from"./scheduler.DtFFBhRN.js";let g=!1;function O(){g=!0}function U(){g=!1}function V(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function k(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let o=0;o<t.length;o++){const u=t[o];u.claim_order!==void 0&&l.push(u)}t=l}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let l=0;l<t.length;l++){const o=t[l].claim_order,u=(s>0&&t[n[s]].claim_order<=o?s+1:V(1,s,m=>t[n[m]].claim_order,o))-1;i[l]=n[u]+1;const f=u+1;n[f]=l,s=Math.max(f,s)}const a=[],r=[];let c=t.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(a.push(t[l-1]);c>=l;c--)r.push(t[c]);c--}for(;c>=0;c--)r.push(t[c]);a.reverse(),r.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<r.length;l++){for(;o<a.length&&r[l].claim_order>=a[o].claim_order;)o++;const u=o<a.length?a[o]:null;e.insertBefore(r[l],u)}}function F(e,t){e.appendChild(t)}function J(e,t){if(g){for(k(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function K(e,t,n){e.insertBefore(t,n||null)}function Q(e,t,n){g&&!n?J(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function fe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function X(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function ue(){return b(" ")}function de(){return b("")}function H(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function _e(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function he(e){return e.dataset.svelteH}function Y(e){return Array.from(e.childNodes)}function M(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function B(e,t,n,i,s=!1){M(e);const a=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const c=e[r];if(t(c)){const l=n(c);return l===void 0?e.splice(r,1):e[r]=l,s||(e.claim_info.last_index=r),c}}for(let r=e.claim_info.last_index-1;r>=0;r--){const c=e[r];if(t(c)){const l=n(c);return l===void 0?e.splice(r,1):e[r]=l,s?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,c}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function Z(e,t,n,i){return B(e,s=>s.nodeName===t,s=>{const a=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||a.push(c.name)}a.forEach(r=>s.removeAttribute(r))},()=>i(t))}function me(e,t,n){return Z(e,t,n,v)}function ee(e,t){return B(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>b(t),!0)}function pe(e){return ee(e," ")}function C(e,t,n){for(let i=n;i<e.length;i+=1){const s=e[i];if(s.nodeType===8&&s.textContent.trim()===t)return i}return-1}function $e(e,t){const n=C(e,"HTML_TAG_START",0),i=C(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new x(t);M(e);const s=e.splice(n,i-n+1);h(s[0]),h(s[s.length-1]);const a=s.slice(1,s.length-1);if(a.length===0)return new x(t);for(const r of a)r.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new x(t,a)}function ye(e,t){t=""+t,e.data!==t&&(e.data=t)}function ge(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}let p;function te(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function xe(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=v("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=te();let a;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=H(window,"message",r=>{r.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{a=H(i.contentWindow,"resize",t),t()}),F(e,i),()=>{(s||a&&i.contentWindow)&&a(),h(i)}}function we(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const a=s.textContent.trim();a===`HEAD_${e}_END`?(i-=1,n.push(s)):a===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ne{constructor(t=!1){d(this,"is_svg",!1);d(this,"e");d(this,"n");d(this,"t");d(this,"a");this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=X(n.nodeName):this.e=v(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)K(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}class x extends ne{constructor(n=!1,i){super(n);d(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Q(this.t,this.n[i],n)}}function ve(e,t){return new e(t)}const $=new Set;let _;function be(){_={r:0,c:[],p:_}}function Te(){_.r||y(_.c),_=_.p}function ie(e,t){e&&e.i&&($.delete(e),e.i(t))}function Ne(e,t,n,i){if(e&&e.o){if($.has(e))return;$.add(e),_.c.push(()=>{$.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Ae(e){e&&e.c()}function Ee(e,t){e&&e.l(t)}function se(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),E(()=>{const a=e.$$.on_mount.map(R).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...a):y(a),e.$$.on_mount=[]}),s.forEach(E)}function re(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function le(e,t){e.$$.dirty[0]===-1&&(q.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Se(e,t,n,i,s,a,r=null,c=[-1]){const l=W;S(e);const o=e.$$={fragment:null,ctx:[],props:a,update:w,not_equal:s,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:A(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};r&&r(o.root);let u=!1;if(o.ctx=n?n(e,t.props||{},(f,m,...T)=>{const N=T.length?T[0]:m;return o.ctx&&s(o.ctx[f],o.ctx[f]=N)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](N),u&&le(e,f)),m}):[],o.update(),u=!0,y(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){O();const f=Y(t.target);o.fragment&&o.fragment.l(f),f.forEach(h)}else o.fragment&&o.fragment.c();t.intro&&ie(e.$$.fragment),se(e,t.target,t.anchor),U(),j()}S(l)}class He{constructor(){d(this,"$$");d(this,"$$set")}$destroy(){re(this,1),this.$destroy=w}$on(t,n){if(!L(n))return w;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(oe);export{$e as A,xe as B,H as C,fe as D,x as H,He as S,Ne as a,b,me as c,Y as d,v as e,ee as f,h as g,pe as h,Se as i,Q as j,J as k,ye as l,de as m,Te as n,_e as o,ge as p,be as q,ve as r,ue as s,ie as t,Ae as u,Ee as v,se as w,re as x,he as y,we as z};
