/* ITS style lineup: themes the real ordering prototype (site.html) in place.
   Colors come from industrialtube.com: steel blue #2b516c, deep blue #19546e, ITS red #ed3523,
   logo black #231f20, greys #4a4a4a / #888a8c / #d6d6d6, pale blue #cde7f9, teal #457579, sky #48b5e5. */
(function(root){
const FONTS={
  'Jost':'Jost:wght@400;500;600;700',
  'Barlow Condensed':'Barlow+Condensed:wght@600;700;800',
  'Saira Condensed':'Saira+Condensed:wght@600;700;800',
  'IBM Plex Sans':'IBM+Plex+Sans:wght@400;500;600;700',
  'Archivo':'Archivo:wdth,wght@75..100,400..800',
  'Figtree':'Figtree:wght@400;500;600;700;800',
};
const THEMES=[
 {id:'proto',name:'Prototype today',sum:'The ordering prototype as built: Apple-style glass header, ITS orange for every action.',sw:['#f2f2f7','#ffffff','#f26522','#1c1c1e'],fonts:'Figtree',feel:'Light, modern'},
 {id:'classic',name:'ITS Classic',sum:'Closest to industrialtube.com: steel-blue header, ITS red buttons, condensed uppercase headings.',accent:'#ed3523',brand:'#2b516c',header:'brand',
  tok:{bg:'#f3f5f7',fill:'#eef1f4',fill2:'#e2e7ec',sep:'#dde3e8',ink:'#231f20',ink2:'#4a4a4a',ink3:'#888a8c'},sans:'Jost',head:'Barlow Condensed',upper:1,rc:8,rt:6,sw:['#2b516c','#ed3523','#f3f5f7','#231f20'],fonts:'Barlow Condensed + Jost',feel:'Familiar to ITS customers'},
 {id:'redline',name:'Red Line',sum:'White header with an ITS-red rule underneath. Red carries every order action.',accent:'#ed3523',brand:'#231f20',header:'redline',
  tok:{bg:'#f6f6f6',fill:'#f0f0f0',fill2:'#e4e4e4',sep:'#e2e2e2',ink:'#231f20',ink2:'#4a4a4a',ink3:'#888a8c'},sans:'Jost',head:'Jost',rc:12,rt:9,sw:['#ffffff','#ed3523','#231f20','#d6d6d6'],fonts:'Jost',feel:'Clean, on-brand'},
 {id:'steel',name:'Steel Blue',sum:'All-blue: deep blue header, steel-blue buttons, sky-blue highlights. Calm and corporate.',accent:'#2b516c',brand:'#19546e',header:'brand',hi:'#48b5e5',
  tok:{bg:'#eff3f6',fill:'#e8eef3',fill2:'#dbe4eb',sep:'#d9e1e8',ink:'#1b2a35',ink2:'#46596a',ink3:'#7f8e9b'},sans:'IBM Plex Sans',head:'IBM Plex Sans',rc:12,rt:8,sw:['#19546e','#2b516c','#48b5e5','#eff3f6'],fonts:'IBM Plex Sans',feel:'Calm, corporate'},
 {id:'charcoal',name:'Charcoal & Red',sum:'Logo-black header, red actions, near-square corners. Heavy and industrial.',accent:'#ed3523',brand:'#231f20',header:'brand',
  tok:{bg:'#ececec',fill:'#e6e6e6',fill2:'#d9d9d9',sep:'#d6d6d6',ink:'#231f20',ink2:'#4a4a4a',ink3:'#888a8c'},sans:'Archivo',head:'Saira Condensed',upper:1,rc:3,rt:2,sw:['#231f20','#ed3523','#ececec','#888a8c'],fonts:'Saira Condensed + Archivo',feel:'Bold, industrial'},
 {id:'hardware',name:'Hardware Store',sum:'Grey header, big condensed headings, square corners. Reads like the ITS print catalog.',accent:'#ed3523',brand:'#4a4a4a',header:'brand',
  tok:{bg:'#f2f2f2',fill:'#ebebeb',fill2:'#dedede',sep:'#d6d6d6',ink:'#231f20',ink2:'#4a4a4a',ink3:'#888a8c'},sans:'Archivo',head:'Barlow Condensed',upper:1,big:1,rc:0,rt:0,sw:['#4a4a4a','#ed3523','#f2f2f2','#d6d6d6'],fonts:'Barlow Condensed + Archivo',feel:'Catalog, no-nonsense'},
 {id:'teal',name:'Teal Works',sum:'ITS teal header and buttons with red kept for prices and alerts. Softer corners.',accent:'#457579',brand:'#2f5558',header:'brand',
  tok:{bg:'#f1f5f5',fill:'#e9f0f0',fill2:'#dbe6e6',sep:'#d8e2e2',ink:'#1f2b2c',ink2:'#4a5a5b',ink3:'#86979a'},sans:'Figtree',head:'Figtree',rc:16,rt:11,sw:['#2f5558','#457579','#ed3523','#f1f5f5'],fonts:'Figtree',feel:'Fresh, friendly'},
 {id:'sky',name:'Pale Sky',sum:'White header on pale-blue ground, steel-blue buttons, generous rounding.',accent:'#2b516c',brand:'#2b516c',header:'white',
  tok:{bg:'#eaf4fb',fill:'#e1eef8',fill2:'#cde7f9',sep:'#d3e4f1',ink:'#1b2a35',ink2:'#46596a',ink3:'#7f8e9b'},sans:'Jost',head:'Jost',rc:20,rt:14,sw:['#ffffff','#cde7f9','#2b516c','#1b2a35'],fonts:'Jost',feel:'Light, approachable'},
 {id:'futura',name:'Futura Black',sum:'White and logo black with square corners. Red only where money or status is involved.',accent:'#231f20',brand:'#231f20',header:'white',
  tok:{bg:'#ffffff',fill:'#f4f4f4',fill2:'#e9e9e9',sep:'#e4e4e4',ink:'#231f20',ink2:'#4a4a4a',ink3:'#888a8c'},sans:'Jost',head:'Jost',upper:1,rc:0,rt:0,sw:['#ffffff','#231f20','#ed3523','#e4e4e4'],fonts:'Jost',feel:'Minimal, premium'},
 {id:'blueprint',name:'Blueprint Header',sum:'Deep-blue header with a drawing grid and sky-blue type; the rest stays light and red.',accent:'#ed3523',brand:'#19546e',header:'grid',
  tok:{bg:'#f2f6f9',fill:'#eaf0f5',fill2:'#dce6ee',sep:'#d8e2ea',ink:'#16263a',ink2:'#45596d',ink3:'#7f8fa0'},sans:'IBM Plex Sans',head:'Barlow Condensed',upper:1,rc:6,rt:4,sw:['#19546e','#48b5e5','#ed3523','#f2f6f9'],fonts:'Barlow Condensed + Plex Sans',feel:'Technical'},
];

/* ---- color math ---- */
const hx=h=>{h=h.replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');return [0,2,4].map(i=>parseInt(h.slice(i,i+2),16))};
const toHex=(r,g,b)=>'#'+[r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
function rgb2hsl([r,g,b]){r/=255;g/=255;b/=255;const M=Math.max(r,g,b),m=Math.min(r,g,b),l=(M+m)/2;let h=0,s=0;if(M!==m){const d=M-m;s=l>.5?d/(2-M-m):d/(M+m);h=M===r?(g-b)/d+(g<b?6:0):M===g?(b-r)/d+2:(r-g)/d+4;h*=60}return [h,s,l]}
function hsl2rgb(h,s,l){h/=360;if(!s)return [l*255,l*255,l*255];const q=l<.5?l*(1+s):l+s-l*s,p=2*l-q,f=t=>{t<0&&(t+=1);t>1&&(t-=1);return t<1/6?p+(q-p)*6*t:t<1/2?q:t<2/3?p+(q-p)*(2/3-t)*6:p};return [f(h+1/3)*255,f(h)*255,f(h-1/3)*255]}
const ORANGE_L=rgb2hsl(hx('#f26522'))[2];
function mapHex(hex,T){
  const c=rgb2hsl(hx(hex));const [h,s,l]=c;
  if(h>=8&&h<=36&&s>.45){ // the prototype's orange family -> this theme's accent family
    const a=rgb2hsl(hx(T.accent));let nl=a[2]+(l-ORANGE_L)*(l>ORANGE_L?(1-a[2])/(1-ORANGE_L):a[2]/ORANGE_L);
    return toHex(...hsl2rgb(a[0],a[1]*(l>.9?.6:1),Math.max(0,Math.min(1,nl))));
  }
  if(h>=200&&h<=228&&l<.35&&s>.3){const b=rgb2hsl(hx(T.brand));return toHex(...hsl2rgb(b[0],b[1],Math.max(0,Math.min(1,b[2]+(l-.2)))))}
  return hex;
}
function rewrite(text,T){
  const ac=hx(T.accent);
  return text.replace(/#[0-9a-fA-F]{6}\b/g,m=>mapHex(m,T)).replace(/rgba\(\s*242\s*,\s*101\s*,\s*34\s*,/g,`rgba(${ac[0]},${ac[1]},${ac[2]},`);
}
function themeCSS(T){
  const t=T.tok,v=`--bg:${t.bg};--fill:${t.fill};--fill-2:${t.fill2};--sep:${t.sep};--ink:${t.ink};--ink-2:${t.ink2};--ink-3:${t.ink3};--sans:"${T.sans}",system-ui,sans-serif;--r-card:${T.rc}px;--r-ctl:${T.rt}px;--head:"${T.head}","${T.sans}",system-ui,sans-serif;`;
  const onDark=`--ink:#ffffff;--ink-2:rgba(255,255,255,.82);--ink-3:rgba(255,255,255,.6);--fill:rgba(255,255,255,.14);--fill-2:rgba(255,255,255,.2);--sep:rgba(255,255,255,.18);--glass:transparent;--surface:rgba(255,255,255,.16);--glass-strong:rgba(255,255,255,.16);}
      #header .mega,#header .suggest{--ink:${t.ink};--ink-2:${t.ink2};--ink-3:${t.ink3};--fill:${t.fill};--fill-2:${t.fill2};--sep:${t.sep};--surface:#ffffff;--glass:rgba(255,255,255,.96);--glass-strong:#ffffff;color:var(--ink)}
      #header .btn-red,#header #cartJump{background:${T.accent}!important;color:#fff!important;border-color:transparent!important}
      #header ul.navlist>li.active>a{background:#fff!important;color:${T.brand}!important}
      #header{`;
  const hdr={
    brand:`#header{background:${T.brand}!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;border-bottom:0!important;${onDark}color:#fff}
      #header input{background:rgba(255,255,255,.95)!important;color:#231f20!important}#header input::placeholder{color:#6b6b6b}`,
    redline:`#header{background:#fff!important;backdrop-filter:none!important;border-bottom:4px solid ${T.accent}!important}`,
    white:`#header{background:#fff!important;backdrop-filter:none!important;border-bottom:1px solid ${T.tok.sep}!important}`,
    grid:`#header{background-color:${T.brand}!important;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)!important;background-size:16px 16px!important;backdrop-filter:none!important;border-bottom:2px solid ${T.hi||'#48b5e5'}!important;${onDark}color:#fff}
      #header input{background:rgba(255,255,255,.95)!important;color:#231f20!important}`,
  }[T.header]||'';
  const up=T.upper?`h1,h2,h3{text-transform:uppercase;letter-spacing:.01em}`:'';
  const big=T.big?`h1{font-size:clamp(34px,4.4vw,58px)!important;line-height:.95!important}h2{font-size:clamp(24px,2.6vw,34px)!important}`:'';
  return `:root{${v}}
body{font-family:var(--sans)}
h1,h2,h3,h4,.its-head{font-family:var(--head)}
${up}${big}
.concept,.gt-pgnav,.gt-pgopen{display:none!important}
.btn-red{background:${T.brand};color:#fff}
${hdr}`;
}
function loadFonts(doc,T){
  const fams=[...new Set([T.sans,T.head])].filter(f=>FONTS[f]).map(f=>'family='+FONTS[f]).join('&');
  if(!fams||doc.getElementById('its-theme-fonts'))return;
  const l=doc.createElement('link');l.id='its-theme-fonts';l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?'+fams+'&display=swap';doc.head.appendChild(l);
}
function fixAttrs(el,T){
  const st=el.getAttribute&&el.getAttribute('style');if(st&&/#f|rgba\(\s*242/i.test(st)){const n=rewrite(st,T);if(n!==st)el.setAttribute('style',n)}
  for(const a of ['fill','stroke','stop-color']){const v=el.getAttribute&&el.getAttribute(a);if(v&&/^#[0-9a-f]{6}$/i.test(v)){const n=mapHex(v,T);if(n!==v)el.setAttribute(a,n)}}
}
function applyTheme(doc,id){
  const T=THEMES.find(t=>t.id===id);if(!T)return;
  const old=doc.getElementById('its-theme');if(old)old.remove();
  if(id==='proto'){doc.querySelectorAll('style').forEach(s=>{if(s.__orig!=null){s.textContent=s.__orig}});const st=doc.createElement('style');st.id='its-theme';st.textContent='.concept,.gt-pgnav,.gt-pgopen{display:none!important}';doc.head.appendChild(st);return}
  loadFonts(doc,T);
  doc.querySelectorAll('style').forEach(s=>{if(s.id==='its-theme')return;if(s.__orig==null)s.__orig=s.textContent;s.textContent=rewrite(s.__orig,T)});
  const st=doc.createElement('style');st.id='its-theme';st.textContent=themeCSS(T);doc.head.appendChild(st);
  const all=n=>{fixAttrs(n,T);n.querySelectorAll&&n.querySelectorAll('[style],[fill],[stroke],[stop-color]').forEach(e=>fixAttrs(e,T))};
  all(doc.body);
  if(doc.__itsObs)doc.__itsObs.disconnect();
  const obs=new (doc.defaultView.MutationObserver)(ms=>{for(const m of ms){if(m.type==='attributes')fixAttrs(m.target,T);else m.addedNodes.forEach(n=>n.nodeType===1&&all(n))}});
  obs.observe(doc.body,{subtree:true,childList:true,attributes:true,attributeFilter:['style','fill','stroke']});doc.__itsObs=obs;
}

/* ---- pages and ordering flows of the real prototype ---- */
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function q(w,sel,ms=3000){const t=Date.now();while(Date.now()-t<ms){const e=w.document.querySelector(sel);if(e&&e.getClientRects().length)return e;await wait(80)}return null}
const IN="if(!S.acct){gtEnter({name:'Pat Rivera',email:'pat@riverafab.com',company:'Rivera Fabrication'},'Signed in')}";
const OUT="S.acct=null;saveAcct();GT.tab='signin';GT.mode='pw';GT.step=1;GT.err='';GT.d={};GT.files={};GT.app=null;";
const CLEAN="(function(){const s=document.getElementById('sheet');if(s){s.hidden=true;s.innerHTML='';s.classList.remove('full')}document.documentElement.style.overflow='';})();";
const CART="if(!S.cart.length){const k=Object.keys(qoIdx()).find(x=>qoIdx()[x][0].id==='dom')||Object.keys(qoIdx())[0];const[l,r]=qoIdx()[k];const it=makeItem(l,r,{ft:'20',inch:'0',tol:'±1/8\"',qty:4,det:{part:'',wo:''}});S.cart.push(it);cartChanged();erpLoad([it]);save()}";
const AT=(view,extra='')=>`${CLEAN}${IN};S.acctOrder=null;S.view='${view}';${extra}render();window.scrollTo(0,0);`;
const VIEWS=[
 {id:'gate',name:'Sign in',kind:'Page',go:async w=>{w.eval(CLEAN+OUT+"render();gtSync();gtDraw();")}},
 {id:'home',name:'Homepage',kind:'Page',go:async w=>{w.eval(AT('home'))}},
 {id:'shop',name:'Build your order',kind:'Ordering flow',go:async w=>{w.eval(AT('shop',"S.line='dom';"+CART))}},
 {id:'quick',name:'Quick Order',kind:'Ordering flow',go:async w=>{w.eval(AT('quick',"S.qoCat=null;"))}},
 {id:'quote',name:'Request a quote',kind:'Ordering flow',go:async w=>{w.eval(AT('account',"S.acctTab='quotes';"));const b=await q(w,'[data-rfq]');if(b){b.click();const l=await q(w,'#sheet [data-q3line="dom"]');if(l){l.click();const o=await q(w,'#sheet [data-q3k="od"][data-q3v="2.5"]');if(o)o.click()}}}},
 {id:'checkout',name:'Checkout',kind:'Ordering flow',go:async w=>{w.eval(AT('shop',"S.line='dom';"+CART));const b=await q(w,'#toOrder');if(b){b.click();const s=await q(w,'#sheet [data-ck="ship"]');if(s){s.click();const p=await q(w,'#sheet [data-usepay="0"]',1500);if(p)p.click()}}}},
 {id:'reorder',name:'Reorder from history',kind:'Ordering flow',go:async w=>{w.eval(AT('account',"S.acctTab='orders';"))}},
];
async function showView(w,id){const v=VIEWS.find(x=>x.id===id)||VIEWS[1];try{await v.go(w)}catch(e){console.warn('view',id,e)}await wait(250)}
root.ITS_LINEUP={THEMES,VIEWS,applyTheme,showView};
})(typeof window!=='undefined'?window:globalThis);
