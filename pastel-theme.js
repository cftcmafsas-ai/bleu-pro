(function(){
  var palettes=[
    {id:"rose",name:"Rose poudré",bg:"#fff3f5",card:"#fffafb",text:"#684c56",muted:"#987b85",accent:"#e8b7c5",soft:"#f8dfe6",border:"#f0dce2"},
    {id:"lavande",name:"Lavande",bg:"#f7f3ff",card:"#fdfbff",text:"#594f70",muted:"#887e9e",accent:"#cbbbe9",soft:"#e9e0f8",border:"#e8e0f1"},
    {id:"ciel",name:"Bleu ciel",bg:"#eff8ff",card:"#fbfdff",text:"#435d73",muted:"#7891a5",accent:"#b9dcf5",soft:"#dceefa",border:"#dceaf4"},
    {id:"menthe",name:"Menthe",bg:"#effaf5",card:"#fbfffd",text:"#45665a",muted:"#78978a",accent:"#b9e2d0",soft:"#dff3e9",border:"#dceee5"},
    {id:"peche",name:"Pêche",bg:"#fff5ef",card:"#fffdfb",text:"#76584a",muted:"#a08070",accent:"#f2c7ae",soft:"#fbe5d8",border:"#f2e3d9"},
    {id:"vanille",name:"Jaune vanille",bg:"#fffbed",card:"#fffef8",text:"#6b6245",muted:"#958a68",accent:"#efe0a7",soft:"#f8f0d1",border:"#eee7cf"}
  ];
  var key="pastel-theme-v1";
  var current=localStorage.getItem(key)||"ciel";
  var style=document.createElement("style");
  style.id="pastel-theme-styles";
  style.textContent=
    "body{background:var(--site-bg)!important;color:var(--site-text)!important;transition:background .2s,color .2s}" +
    "header,footer,.hero,.feature-card,.box,.c,.card,.duo-card,.spaces-card,.color-system,main,.modal-card{background-color:var(--site-card)!important;color:var(--site-text)!important;border-color:var(--site-border)!important}" +
    "h1,h2,h3,h4,p,label,li,small,strong,b{color:inherit}" +
    "p,.muted,.sub,footer{color:var(--site-muted)!important}" +
    "a{color:var(--site-text)} .btn,button,.button,.space-btn,.duo-btn{background:var(--site-accent)!important;color:var(--site-text)!important;border-color:var(--site-border)!important}" +
    "nav a,.ck{background:var(--site-soft)!important;color:var(--site-text)!important}" +
    "input,textarea,select{background:var(--site-card)!important;color:var(--site-text)!important;border-color:var(--site-border)!important}" +
    "body{--bg:var(--site-bg);--card:var(--site-card);--tx:var(--site-text);--text:var(--site-text);--mu:var(--site-muted);--muted:var(--site-muted);--bd:var(--site-border);--border:var(--site-border);--p1:var(--site-soft);--p2:var(--site-soft);--p3:var(--site-accent);--accent:var(--site-accent);--ac:var(--site-accent);--dk:var(--site-text)}" +
    "#pastel-theme-panel{position:fixed;right:14px;bottom:66px;z-index:9999;width:min(300px,calc(100vw - 28px));padding:14px;background:var(--site-card);color:var(--site-text);border:1px solid var(--site-border);border-radius:18px;box-shadow:0 12px 36px rgba(50,60,80,.18);font:14px/1.4 system-ui,sans-serif}" +
    "#pastel-theme-panel .pt-title{font-weight:700;margin:0 0 10px}" +
    "#pastel-theme-panel .pt-colors{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}" +
    "#pastel-theme-panel button{display:flex;align-items:center;gap:7px;width:100%;padding:7px 8px;border:1px solid var(--site-border);border-radius:11px;background:var(--site-soft)!important;color:var(--site-text)!important;font:12px system-ui,sans-serif;cursor:pointer}" +
    "#pastel-theme-panel button[aria-pressed=true]{outline:2px solid var(--site-text);outline-offset:1px}" +
    "#pastel-theme-panel i{display:block;width:19px;height:19px;flex:none;border-radius:50%;border:1px solid rgba(0,0,0,.08)}" +
    "#pastel-theme-toggle{position:fixed;right:14px;bottom:14px;z-index:10000;padding:8px 13px;border:1px solid var(--site-border);border-radius:999px;background:var(--site-accent)!important;color:var(--site-text)!important;font-weight:700;cursor:pointer}" +
    "#pastel-theme-panel[hidden]{display:none}" +
    "#pastel-theme-close{float:right;border:0;border-radius:50%;width:28px;height:28px;font-size:18px;line-height:1;cursor:pointer;background:var(--site-soft)!important;color:var(--site-text)!important}";

  style.textContent +=
    "header{background:linear-gradient(105deg,#edf6ff 0%,#e4f3f7 55%,#f8f2fb 100%)!important;border:0!important;box-shadow:0 5px 18px rgba(80,125,155,.08)}" +
    "header img{border-radius:14px;object-fit:contain}" +
    "nav{gap:8px;padding:3px 2px}" +
    "nav a{border:1px solid var(--site-border)!important;border-radius:999px!important;padding:8px 15px!important;box-shadow:0 3px 9px rgba(90,110,140,.06)}" +
    ".hero{background:linear-gradient(135deg,#e7f2fc 0%,#e4f5f5 52%,#f4edfb 100%)!important;padding:clamp(34px,6vw,64px) 20px!important}" +
    ".hero img{border:1px solid #e1edf5;border-radius:22px;box-shadow:0 8px 24px rgba(90,120,150,.08)}" +
    "h1,h2{color:#647d9a!important}" +
    "section{max-width:980px;padding:clamp(28px,5vw,48px) clamp(16px,3vw,26px)!important}" +
    ".c,.box,.duo-card,.spaces-card,.color-system{background:linear-gradient(145deg,#fff,#f8fbff)!important;border:1px solid var(--site-border)!important;border-radius:22px!important;box-shadow:0 7px 22px rgba(90,120,150,.07)!important;backdrop-filter:none!important}" +
    ".g{gap:16px!important}" +
    ".c{padding:18px!important}" +
    ".btn,button,.space-btn,.duo-btn{background:linear-gradient(120deg,var(--site-accent),var(--site-soft))!important;border:1px solid var(--site-border)!important;border-radius:999px!important;color:var(--site-text)!important;box-shadow:0 4px 12px rgba(100,110,145,.08)!important}" +
    ".btn:hover,button:hover,.space-btn:hover,.duo-btn:hover{filter:brightness(.98);transform:translateY(-1px)}" +
    ".duo-card,.spaces-card{text-align:center}" +
    ".duo-item,.space-item{border-color:var(--site-border)!important}" +
    "#cross-site-navigation{background:linear-gradient(110deg,#edf6ff,#e7f5f5,#f7f1fb)!important;border:0!important;border-radius:0 0 20px 20px}" +
    "#cross-site-navigation a{background:#fff!important;border:1px solid var(--site-border)!important;border-radius:999px!important;color:var(--site-text)!important}" +
    ".account-fab{background:linear-gradient(120deg,var(--site-accent),var(--site-soft))!important;border:1px solid var(--site-border)!important;color:var(--site-text)!important;backdrop-filter:none!important;box-shadow:0 8px 22px rgba(80,110,140,.12)!important}" +
    ".modal-card{background:#fff!important;border:1px solid var(--site-border)!important;backdrop-filter:none!important;box-shadow:0 18px 48px rgba(80,110,140,.16)!important}" +
    ".actions button{background:linear-gradient(120deg,var(--site-accent),var(--site-soft))!important;color:var(--site-text)!important}" +
    ".spaces-card h2,.duo-card h2,.modal h2{color:#647d9a!important}" +
    "footer{background:linear-gradient(110deg,#edf5fc,#fbfaff,#e9f5f6)!important;border-top:1px solid var(--site-border)!important}" +
    "@media(max-width:700px){header{align-items:flex-start;flex-direction:column;gap:8px;padding:10px 12px}nav{width:100%;padding-bottom:4px}nav a{font-size:13px!important;padding:8px 12px!important}.hero{padding:32px 16px!important}.hero img{width:min(92%,360px)}}";
  document.head.appendChild(style);
  function apply(id){
    var p=palettes.find(function(x){return x.id===id})||palettes[2];
    current=p.id;
    var r=document.documentElement;
    r.style.setProperty("--site-bg",p.bg);r.style.setProperty("--site-card",p.card);
    r.style.setProperty("--site-text",p.text);r.style.setProperty("--site-muted",p.muted);
    r.style.setProperty("--site-accent",p.accent);r.style.setProperty("--site-soft",p.soft);
    r.style.setProperty("--site-border",p.border);
    localStorage.setItem(key,p.id);
    document.querySelectorAll("#pastel-theme-panel [data-theme]").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.theme===p.id));});
  }
  var panel=document.createElement("aside");panel.id="pastel-theme-panel";panel.setAttribute("aria-label","Choisir une couleur pastel");
  var toggle=document.createElement("button");toggle.id="pastel-theme-toggle";toggle.type="button";toggle.textContent="🎨 Couleurs pastel";
  var close=document.createElement("button");close.id="pastel-theme-close";close.type="button";close.textContent="×";close.setAttribute("aria-label","Fermer les couleurs");
  close.addEventListener("click",function(){panel.hidden=true;});
  var title=document.createElement("p");title.className="pt-title";title.textContent="Choisissez votre ambiance pastel";
  var grid=document.createElement("div");grid.className="pt-colors";
  palettes.forEach(function(p){
    var b=document.createElement("button");b.type="button";b.dataset.theme=p.id;b.setAttribute("aria-label",p.name);
    var dot=document.createElement("i");dot.style.background=p.accent;
    var label=document.createElement("span");label.textContent=p.name;
    b.appendChild(dot);b.appendChild(label);b.addEventListener("click",function(){apply(p.id);});
    grid.appendChild(b);
  });
  panel.appendChild(close);panel.appendChild(title);panel.appendChild(grid);document.body.appendChild(panel);document.body.appendChild(toggle);
  toggle.addEventListener("click",function(){panel.hidden=!panel.hidden;});
  panel.hidden=true;apply(current);
})();
(function(){
  if(window.__logoRodolpheOk)return;window.__logoRodolpheOk=true;
  var ID="logo-rodolphe-torres-tirado";
  function logoUnique(){
    var h=document.querySelector("h1");
    if(!h||!h.parentNode)return false;
    Array.prototype.forEach.call(document.querySelectorAll('header img,.hero img,img[src*="Guerisseur-de-lame"],img[src*="PHOTO-2026"],img[alt="Logo BLEU PRO"],img[alt="Rodolphe Torres Tirado"]'),function(e){if(e.id!==ID)e.remove();});
    var img=document.getElementById(ID);
    if(!img){
      img=document.createElement("img");img.id=ID;
      img.src="/Rodolphe%20Torres%20Tirado.jpeg";img.alt="Rodolphe Torres Tirado";
      img.style.cssText="display:block;margin:12px auto;width:min(80%,320px);height:auto;border-radius:12px";
    }
    if(img.previousSibling!==h)h.parentNode.insertBefore(img,h.nextSibling);
    return true;
  }
  if(!logoUnique()){document.addEventListener("DOMContentLoaded",logoUnique);}
})();
