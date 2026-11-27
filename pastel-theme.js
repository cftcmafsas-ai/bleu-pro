(function(){
  "use strict";
  var style=document.getElementById("pastel-theme-styles")||document.createElement("style");
  style.id="pastel-theme-styles";
  style.textContent=`
    :root{
      --site-bg:#f3f8fc;
      --site-card:#ffffff;
      --site-text:#435d73;
      --site-muted:#7891a5;
      --site-accent:#b9d6ee;
      --site-soft:#eaf3fa;
      --site-border:#dceaf4;
      --bg:var(--site-bg);
      --card:var(--site-card);
      --tx:var(--site-text);
      --text:var(--site-text);
      --mu:var(--site-muted);
      --muted:var(--site-muted);
      --bd:var(--site-border);
      --border:var(--site-border);
      --p1:var(--site-soft);
      --p2:#dceefa;
      --p3:var(--site-accent);
      --accent:var(--site-accent);
      --ac:var(--site-accent);
      --dk:var(--site-text);
    }
    body{
      background:linear-gradient(180deg,#f6faff 0%,var(--site-bg) 100%)!important;
      color:var(--site-text)!important;
      transition:background .2s ease,color .2s ease;
    }
    header{
      background:rgba(255,255,255,.94)!important;
      border:0!important;
      border-bottom:1px solid var(--site-border)!important;
      box-shadow:0 5px 20px rgba(67,112,148,.08);
      backdrop-filter:blur(12px);
    }
    header img{border-radius:12px}
    nav{gap:8px!important;padding:4px 2px}
    nav a{
      background:linear-gradient(135deg,#edf6fc,#e2eff8)!important;
      color:var(--site-text)!important;
      border:1px solid var(--site-border)!important;
      border-radius:999px!important;
      padding:8px 15px!important;
      box-shadow:0 3px 10px rgba(67,112,148,.06);
      transition:background .18s ease,transform .18s ease,box-shadow .18s ease;
    }
    nav a:hover{transform:translateY(-1px);box-shadow:0 6px 14px rgba(67,112,148,.10)}
    .hero{
      background:linear-gradient(135deg,#e7f2fc 0%,#e1f1f8 58%,#edf7fb 100%)!important;
      padding:clamp(38px,6vw,66px) 20px!important;
    }
    .hero img{
      border:1px solid #dceaf4;
      border-radius:22px!important;
      box-shadow:0 10px 28px rgba(67,112,148,.10);
    }
    h1,h2{color:#526f89}
    .sub,.intro-restore{color:var(--site-muted)!important}
    section{max-width:980px;padding:clamp(28px,5vw,48px) clamp(16px,3vw,26px)!important}
    .g{gap:16px!important}
    .c,.box,.duo-card,.spaces-card,.color-system{
      background:linear-gradient(145deg,#fff,#f8fbfe)!important;
      color:var(--site-text)!important;
      border:1px solid var(--site-border)!important;
      border-radius:22px!important;
      box-shadow:0 8px 24px rgba(67,112,148,.07)!important;
      backdrop-filter:none;
    }
    .c{padding:18px!important}
    .c span,.spaces-card p,.duo-card p,.space-item span,.duo-item span{color:var(--site-muted)!important}
    .btn,button,.space-btn,.duo-btn,.color-system button,.actions button{
      background:linear-gradient(120deg,#c5def1,#e4f1fa)!important;
      color:#435d73!important;
      border:1px solid #cfe2f1!important;
      border-radius:999px!important;
      box-shadow:0 5px 14px rgba(67,112,148,.09)!important;
      transition:transform .18s ease,box-shadow .18s ease,filter .18s ease;
    }
    .btn:hover,button:hover,.space-btn:hover,.duo-btn:hover,.actions button:hover{
      filter:brightness(.99);
      transform:translateY(-1px);
      box-shadow:0 8px 18px rgba(67,112,148,.13)!important;
    }
    input,textarea,select,.field input{
      background:#fff!important;
      color:var(--site-text)!important;
      border:1px solid var(--site-border)!important;
      border-radius:13px!important;
    }
    .ck{background:#eaf3fa!important;color:var(--site-text)!important;border:1px solid var(--site-border)}
    #cross-site-navigation{
      background:linear-gradient(110deg,#edf6fc,#e3f2f8)!important;
      border:0!important;
      border-radius:0 0 20px 20px;
    }
    #cross-site-navigation a{
      background:#fff!important;
      color:var(--site-text)!important;
      border:1px solid var(--site-border)!important;
      border-radius:999px!important;
      box-shadow:0 3px 10px rgba(67,112,148,.06);
    }
    .spaces-card h2,.duo-card h2{color:#526f89!important}
    .space-item,.duo-item{border-color:var(--site-border)!important}
    .account-fab{
      background:linear-gradient(135deg,#e5f1fa,#c7e0f2)!important;
      color:var(--site-text)!important;
      border:1px solid #cfe2f1!important;
      box-shadow:0 9px 24px rgba(67,112,148,.15)!important;
      backdrop-filter:none;
    }
    .account-fab span{background:linear-gradient(135deg,#6e9fc5,#8ab9d4)!important;color:#fff!important}
    .modal-backdrop{background:rgba(42,68,91,.34)}
    .modal-card{
      background:linear-gradient(145deg,#fff,#f3f8fc)!important;
      color:var(--site-text)!important;
      border:1px solid var(--site-border)!important;
      box-shadow:0 18px 48px rgba(67,112,148,.16)!important;
      backdrop-filter:none;
    }
    .modal h2{color:#526f89!important}
    .field label{color:var(--site-muted)!important}
    .actions button#sign-up{background:#fff!important;color:var(--site-text)!important}
    footer{
      background:linear-gradient(110deg,#edf5fc,#f8fbfe,#e6f2f8)!important;
      color:var(--site-muted)!important;
      border-top:1px solid var(--site-border);
    }
    @media(max-width:700px){
      header{align-items:flex-start;flex-direction:column;gap:8px;padding:10px 12px}
      nav{width:100%;padding-bottom:5px}
      nav a{font-size:13px!important;padding:8px 12px!important}
      .hero{padding:32px 16px!important}
      .hero img{width:min(92%,360px)}
      .spaces,.duo{padding-left:14px!important;padding-right:14px!important}
      .spaces-card,.duo-card{padding:19px!important}
    }
    @media(prefers-reduced-motion:reduce){
      *,*::before,*::after{scroll-behavior:auto!important;transition:none!important}
    }
  `;
  if(!style.parentNode)document.head.appendChild(style);
})();