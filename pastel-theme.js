(function(){
  "use strict";
  var style=document.getElementById("pastel-theme-styles")||document.createElement("style");
  style.id="pastel-theme-styles";
  style.textContent=`
    :root{
      --site-bg:#eff7fd;
      --site-card:#ffffff;
      --site-text:#315575;
      --site-muted:#718da5;
      --site-accent:#9fc9e9;
      --site-soft:#e2f0fb;
      --site-border:#d2e5f4;
      --bg:var(--site-bg);--card:var(--site-card);--tx:var(--site-text);
      --text:var(--site-text);--mu:var(--site-muted);--muted:var(--site-muted);
      --bd:var(--site-border);--border:var(--site-border);--p1:var(--site-soft);
      --p2:#d5eafa;--p3:var(--site-accent);--accent:var(--site-accent);
      --ac:var(--site-accent);--dk:var(--site-text);
    }
    html{scroll-behavior:smooth;scroll-padding-top:90px}
    body{
      background:linear-gradient(180deg,#f8fbff 0%,#edf6fc 48%,#f4f9fd 100%)!important;
      color:var(--site-text)!important;
      font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      line-height:1.65;
      transition:background .2s ease,color .2s ease;
    }
    header{
      position:sticky;top:0;z-index:50;
      display:flex;align-items:center;gap:18px;
      padding:10px clamp(14px,3vw,34px)!important;
      background:rgba(255,255,255,.91)!important;
      border:0!important;border-bottom:1px solid var(--site-border)!important;
      box-shadow:0 6px 24px rgba(48,91,127,.08);
      backdrop-filter:blur(16px);
    }
    header img{max-height:48px;border-radius:12px}
    nav{display:flex;align-items:center;gap:8px!important;padding:4px 2px}
    nav a{
      flex:none;padding:8px 15px!important;border:1px solid var(--site-border)!important;
      border-radius:999px!important;background:linear-gradient(135deg,#f1f8fd,#e5f1fa)!important;
      color:var(--site-text)!important;text-decoration:none;
      font-size:14px;font-weight:600;box-shadow:0 3px 10px rgba(48,91,127,.05);
      transition:transform .18s ease,box-shadow .18s ease,background .18s ease;
    }
    nav a:hover{transform:translateY(-1px);box-shadow:0 7px 16px rgba(48,91,127,.11)}
    .hero{
      position:relative;isolation:isolate;overflow:hidden;
      padding:clamp(42px,7vw,78px) 20px!important;
      background:linear-gradient(135deg,#dceefa 0%,#edf7fd 52%,#d7eafb 100%)!important;
      border-bottom:1px solid #cfe3f3;
    }
    .hero:before{
      content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;
      background:radial-gradient(ellipse at 12% 18%,rgba(255,255,255,.88),transparent 38%),
        radial-gradient(ellipse at 90% 82%,rgba(137,190,228,.22),transparent 42%);
    }
    .hero img{
      width:min(92%,460px);border:1px solid #d5e7f4;border-radius:26px!important;
      box-shadow:0 16px 38px rgba(48,91,127,.14);
    }
    h1,h2{color:#315d80}
    h1{letter-spacing:-.025em}
    h2{position:relative;margin-bottom:12px}
    section{
      max-width:1040px!important;
      padding:clamp(34px,5vw,58px) clamp(16px,3vw,28px)!important;
    }
    section>h2:after{
      content:"";display:block;width:54px;height:3px;margin-top:11px;
      border-radius:99px;background:linear-gradient(90deg,#78b4df,#d5eafa);
    }
    .sub,.intro-restore{color:var(--site-muted)!important}
    .g{gap:17px!important}
    .c,.box,.duo-card,.spaces-card,.color-system{
      background:linear-gradient(145deg,#fff 0%,#f8fbfe 100%)!important;
      color:var(--site-text)!important;border:1px solid var(--site-border)!important;
      border-radius:22px!important;box-shadow:0 9px 26px rgba(48,91,127,.075)!important;
    }
    .c{padding:19px!important;transition:transform .2s ease,box-shadow .2s ease}
    .c:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(48,91,127,.12)!important}
    .c b{color:#315d80;font-weight:700}
    .c span,.spaces-card p,.duo-card p,.space-item span,.duo-item span{color:var(--site-muted)!important}
    .duo-card,.spaces-card{padding:clamp(20px,3vw,30px)!important}
    .duo-list,.spaces-list{gap:16px!important}
    .duo-item,.space-item{padding:14px!important;border:1px solid var(--site-border)!important;border-radius:17px;background:#fff}
    .duo-item:last-child,.space-item:last-child{padding-bottom:14px}
    .duo-item b,.space-item b{color:#315d80!important}
    .btn,button,.space-btn,.duo-btn,.color-system button,.actions button{
      background:linear-gradient(125deg,#dceefa,#b9d8ef)!important;
      color:#294f70!important;border:1px solid #c2dced!important;
      border-radius:999px!important;box-shadow:0 5px 15px rgba(48,91,127,.10)!important;
      font-weight:650;transition:transform .18s ease,box-shadow .18s ease,filter .18s ease;
    }
    .btn:hover,button:hover,.space-btn:hover,.duo-btn:hover,.actions button:hover{
      filter:brightness(1.015);transform:translateY(-2px);
      box-shadow:0 9px 20px rgba(48,91,127,.15)!important;
    }
    input,textarea,select,.field input{
      background:#fff!important;color:var(--site-text)!important;
      border:1px solid var(--site-border)!important;border-radius:13px!important;
      box-shadow:inset 0 1px 2px rgba(48,91,127,.025);
    }
    input:focus,textarea:focus,select:focus,.field input:focus{
      outline:3px solid rgba(126,180,220,.2);border-color:#91bfdf!important;
    }
    .ck{background:#eaf4fb!important;color:var(--site-text)!important;border:1px solid var(--site-border)}
    #cross-site-navigation{
      background:linear-gradient(110deg,#edf6fc,#e2f0fa)!important;
      border:0!important;border-radius:0 0 20px 20px;
    }
    #cross-site-navigation a{
      background:#fff!important;color:var(--site-text)!important;
      border:1px solid var(--site-border)!important;border-radius:999px!important;
      box-shadow:0 3px 10px rgba(48,91,127,.06);
    }
    .spaces-card h2,.duo-card h2{color:#315d80!important}
    .space-item,.duo-item{border-color:var(--site-border)!important}
    .mock{
      border:7px solid #d7eafa!important;border-radius:30px!important;
      box-shadow:0 10px 24px rgba(48,91,127,.08);
    }
    .mock .ms span,.mock .mg span{border-color:var(--site-border)!important;border-radius:13px!important}
    .account-fab{
      background:linear-gradient(135deg,#e5f2fb,#c6e1f3)!important;
      color:var(--site-text)!important;border:1px solid #c8deef!important;
      box-shadow:0 10px 28px rgba(48,91,127,.18)!important;backdrop-filter:blur(12px);
    }
    .account-fab span{background:linear-gradient(135deg,#5f9ac7,#8bbbdc)!important;color:#fff!important}
    .modal-backdrop{background:rgba(35,63,88,.38)!important}
    .modal-card{
      background:linear-gradient(145deg,#fff,#f1f7fc)!important;color:var(--site-text)!important;
      border:1px solid var(--site-border)!important;border-radius:25px!important;
      box-shadow:0 22px 58px rgba(35,72,105,.2)!important;backdrop-filter:blur(18px);
    }
    .modal h2{color:#315d80!important}
    .modal-close{width:36px!important;height:36px!important;padding:0!important}
    .field label{color:var(--site-muted)!important}
    .actions button#sign-up{background:#fff!important;color:var(--site-text)!important}
    footer{
      background:linear-gradient(110deg,#eaf4fb,#f8fbfe,#e4f0f8)!important;
      color:var(--site-muted)!important;border-top:1px solid var(--site-border);
    }
    @media(max-width:700px){
      header{align-items:flex-start;flex-direction:column;gap:8px;padding:10px 12px!important}
      nav{width:100%;padding-bottom:5px}
      nav a{font-size:13px!important;padding:8px 12px!important}
      .hero{padding:34px 16px!important}
      .hero img{width:min(92%,360px)}
      .spaces,.duo{padding-left:14px!important;padding-right:14px!important}
      .spaces-card,.duo-card{padding:18px!important}
      section{padding-top:32px!important;padding-bottom:32px!important}
      .c{padding:16px!important}
    }
    @media(prefers-reduced-motion:reduce){
      *,*::before,*::after{scroll-behavior:auto!important;transition:none!important}
    }
  `;

  if(!style.parentNode)document.head.appendChild(style);

  /* Même sélecteur d’ambiance que Guérisseur de l’Âme, avec le bleu BLEU PRO par défaut. */
  var palettes=[
    {id:"bleu",name:"Bleu d’origine",bg:"#edf7ff",card:"#fafdff",text:"#10377f",muted:"#45658f",accent:"#8fc9f2",soft:"#e4f2ff",border:"#c6def4"},
    {id:"corail",name:"Corail",bg:"#fff6f1",card:"#fffdfb",text:"#704b43",muted:"#a17b70",accent:"#efb19d",soft:"#fbe4da",border:"#f3ddd4"},
    {id:"perle",name:"Gris perle",bg:"#f8f8fa",card:"#fefefe",text:"#55575f",muted:"#85878f",accent:"#dcdde3",soft:"#eeeef2",border:"#e8e8ec"},
    {id:"rose",name:"Rose poudré",bg:"#fff8f9",card:"#fffafb",text:"#684c56",muted:"#987b85",accent:"#f0d0d9",soft:"#faeaef",border:"#f4e6eb"},
    {id:"lavande",name:"Lavande",bg:"#faf8ff",card:"#fdfbff",text:"#594f70",muted:"#887e9e",accent:"#ddd3f1",soft:"#f1ebfa",border:"#efe9f5"},
    {id:"menthe",name:"Menthe",bg:"#f5fcf9",card:"#fbfffd",text:"#45665a",muted:"#78978a",accent:"#d2ece0",soft:"#eaf7f1",border:"#e6f3ed"},
    {id:"peche",name:"Pêche",bg:"#fff9f5",card:"#fffdfb",text:"#76584a",muted:"#a08070",accent:"#f7dbca",soft:"#fceee6",border:"#f6ebe4"},
    {id:"vanille",name:"Jaune vanille",bg:"#fffdf4",card:"#fffef8",text:"#6b6245",muted:"#958a68",accent:"#f5ebc6",soft:"#faf5e1",border:"#f3eedd"}
  ];
  var themeKey="bleu-pro-theme-v1",current="bleu";
  try{current=localStorage.getItem(themeKey)||"bleu";}catch(e){}
  style.textContent += `
    body{background:var(--site-bg)!important;color:var(--site-text)!important}
    header,footer,.hero,.c,.box,.duo-card,.spaces-card,.color-system,.modal-card{
      color:var(--site-text)!important;border-color:var(--site-border)!important
    }
    header{background:linear-gradient(105deg,var(--site-soft),var(--site-card),var(--site-soft))!important}
    .hero{background:linear-gradient(135deg,var(--site-soft),var(--site-card),var(--site-accent))!important}
    h1,h2,h3,.spaces-card h2,.duo-card h2,.modal h2{color:var(--site-text)!important}
    .sub,.spaces-card p,.duo-card p,.c span,.space-item span,.duo-item span,footer{color:var(--site-muted)!important}
    .c,.box,.duo-card,.spaces-card,.color-system{
      background:linear-gradient(145deg,var(--site-card),var(--site-soft))!important;
      border:1px solid var(--site-border)!important;box-shadow:0 9px 26px rgba(48,91,127,.075)!important
    }
    .btn,button:not(.modal-backdrop),.space-btn,.duo-btn,.actions button,.top nav a{
      background:linear-gradient(125deg,var(--site-soft),var(--site-accent))!important;
      color:var(--site-text)!important;border:1px solid var(--site-border)!important
    }
    input,textarea,select,.field input{background:var(--site-card)!important;color:var(--site-text)!important;border-color:var(--site-border)!important}
    .account-fab{background:linear-gradient(135deg,var(--site-soft),var(--site-accent))!important;color:var(--site-text)!important;border-color:var(--site-border)!important}
    .modal-card{background:linear-gradient(145deg,var(--site-card),var(--site-soft))!important}
    footer{background:linear-gradient(110deg,var(--site-soft),var(--site-card),var(--site-soft))!important}
    #pastel-theme-panel{position:fixed;right:14px;bottom:82px;z-index:11000;width:min(310px,calc(100vw - 28px));padding:14px;background:var(--site-card);color:var(--site-text);border:1px solid var(--site-border);border-radius:18px;box-shadow:0 12px 36px rgba(50,60,80,.18);font:14px/1.4 system-ui,sans-serif}
    #pastel-theme-panel[hidden]{display:none!important}
    #pastel-theme-panel .pt-title{font-weight:700;margin:0 0 10px;color:var(--site-text)}
    #pastel-theme-panel .pt-colors{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
    #pastel-theme-panel button{display:flex;align-items:center;gap:7px;width:100%;padding:8px;border:1px solid var(--site-border)!important;border-radius:11px!important;background:var(--site-soft)!important;color:var(--site-text)!important;font:12px system-ui,sans-serif;cursor:pointer}
    #pastel-theme-panel button[aria-pressed=true]{outline:2px solid var(--site-text);outline-offset:1px}
    #pastel-theme-panel .pt-original{grid-column:1/-1;justify-content:center;font-weight:700}
    #pastel-theme-panel .pt-close{float:right;width:30px;height:30px;padding:0;justify-content:center;border-radius:50%!important;font-size:19px}
    #pastel-theme-panel i{display:block;width:19px;height:19px;flex:none;border-radius:50%;border:1px solid rgba(0,0,0,.08)}
    #pastel-theme-toggle{position:fixed;right:88px;bottom:88px;z-index:11001;display:grid;place-items:center;width:58px;height:58px;padding:0;border:2px solid #fff!important;border-radius:50%!important;background:linear-gradient(145deg,#dceefa,#9fc9e9)!important;color:#315575!important;font-size:30px;line-height:1;box-shadow:0 7px 22px rgba(40,90,140,.22);cursor:pointer}
    #pastel-theme-toggle:hover{transform:translateY(-2px)}
    @media(max-width:520px){#pastel-theme-toggle{right:78px;bottom:82px;width:52px;height:52px}}

    /* Accueil BLEU PRO — harmonisation de présentation sur le modèle Guérisseur de l’Âme */
    body{background:linear-gradient(180deg,#eaf6ff 0%,#f8fcff 44%,#e9f5ff 100%)!important;color:var(--site-text)!important}
    .brand-header{
      position:relative!important;top:auto!important;z-index:10!important;
      display:grid!important;grid-template-columns:minmax(110px,190px) minmax(0,1fr) minmax(140px,230px)!important;
      align-items:center!important;gap:clamp(12px,2.5vw,30px)!important;
      min-height:170px;padding:12px clamp(16px,4vw,54px)!important;
      background:linear-gradient(105deg,#e5f4ff 0%,#c9e6fb 48%,#eaf6ff 100%)!important;
      border:0!important;border-bottom:1px solid #b5d8f4!important;
      box-shadow:0 5px 18px rgba(24,78,139,.10)!important;backdrop-filter:none!important
    }
    .brand-mark{display:flex!important;align-items:center!important;justify-content:center!important;width:100%!important;height:145px!important;max-height:145px!important;line-height:0!important}
    .brand-mark img{display:block!important;width:100%!important;height:100%!important;max-height:145px!important;max-width:180px!important;object-fit:contain!important;padding:0!important;margin:0!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important}
    .brand-heading{text-align:center!important;padding:0!important;min-width:0}
    .brand-heading h1{margin:0!important;color:#10377f!important;font:700 clamp(2.2rem,5vw,4.5rem)/1.08 "Cormorant Garamond",Georgia,serif!important;letter-spacing:.01em!important}
    .brand-heading p{margin:8px 0 0!important;color:#244d91!important;font:italic 500 clamp(1.05rem,2.2vw,1.8rem)/1.25 "Cormorant Garamond",Georgia,serif!important}
    .brand-lotus{display:block!important;width:100%!important;height:120px!important;max-height:120px!important;object-fit:contain!important;object-position:center!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;mix-blend-mode:multiply}
    .site-nav{
      position:sticky!important;top:0!important;z-index:60!important;
      display:flex!important;align-items:center!important;justify-content:space-between!important;flex-wrap:nowrap!important;
      gap:7px!important;margin:0!important;padding:9px clamp(10px,3vw,38px)!important;
      border:0!important;border-bottom:1px solid #b8d9f3!important;border-radius:0!important;
      background:linear-gradient(110deg,#e4f2ff,#fafdff,#dceeff)!important;
      box-shadow:0 5px 16px rgba(24,78,139,.08)!important;overflow-x:auto!important;white-space:nowrap!important
    }
    .site-nav a{
      flex:none!important;padding:9px clamp(10px,1.5vw,20px)!important;
      border:1px solid rgba(92,157,212,.18)!important;border-radius:999px!important;
      background:#eaf6ff!important;color:#123b83!important;text-decoration:none!important;
      font:600 15px/1.2 "Cormorant Garamond",Georgia,serif!important;
      box-shadow:0 2px 7px rgba(27,88,153,.08)!important;transition:background .18s,transform .18s!important
    }
    .site-nav a.active,.site-nav a:hover,.site-nav a:focus-visible{background:#3295dc!important;color:#fff!important;border-color:#3295dc!important;transform:translateY(-1px)!important}
    .hero-main{
      position:relative!important;isolation:isolate!important;overflow:hidden!important;
      max-width:none!important;margin:0!important;padding:0!important;min-height:360px!important;
      background:linear-gradient(180deg,#cfeaff 0%,#eaf6ff 54%,#d6edff 100%)!important;
      border-bottom:1px solid #bddcf5!important;text-align:center!important
    }
    .hero-main:before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(ellipse at 8% 88%,rgba(255,255,255,.95),transparent 30%),radial-gradient(ellipse at 95% 15%,rgba(255,255,255,.8),transparent 30%),linear-gradient(180deg,#cfeaff 0%,#eaf6ff 54%,#d6edff 100%)}
    .hero-content{display:grid!important;grid-template-columns:minmax(0,1fr)!important;align-items:center!important;max-width:1120px!important;min-height:360px!important;margin:0 auto!important;padding:clamp(38px,6vw,72px) 22px!important}
    .hero-copy{width:100%!important;max-width:900px!important;margin:0 auto!important;text-align:center!important}
    .hero-quote{max-width:900px!important;margin:0 auto!important;color:#10377f!important;font:700 clamp(2.5rem,6vw,4.4rem)/1.12 "Cormorant Garamond",Georgia,serif!important;letter-spacing:.01em!important}
    .quote-underline{width:112px!important;height:3px!important;margin:18px auto!important;border-radius:4px!important;background:linear-gradient(90deg,#7fc3f1,#1c78c6)!important}
    .hero-description{max-width:850px!important;margin:14px auto 24px!important;color:#244d91!important;font:500 clamp(1.15rem,2.2vw,1.65rem)/1.5 "Cormorant Garamond",Georgia,serif!important;text-align:center!important}
    .hero-learn{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;margin:0!important;padding:13px 30px!important;border:1px solid #8fc4ed!important;border-radius:999px!important;background:linear-gradient(120deg,#d9efff,#a9d8f7)!important;color:#10377f!important;text-decoration:none!important;font:700 1.08rem "DM Sans",sans-serif!important;box-shadow:0 4px 12px rgba(24,90,153,.12)!important}
    .intro-restore{max-width:1040px!important;margin:28px auto!important;padding:20px 26px!important;border:1px solid #c5def3!important;border-radius:22px!important;background:linear-gradient(120deg,#d9efff,#edf7ff)!important;color:#45658f!important;text-align:center!important;box-shadow:0 6px 18px rgba(25,77,132,.06)!important}
    body>section:not(.hero-main){max-width:1120px!important;margin:0 auto!important;padding:clamp(30px,5vw,58px) clamp(16px,3vw,30px)!important}
    body>section>h2{margin:0 0 12px!important;color:#123b83!important;font:700 clamp(1.7rem,3.5vw,2.2rem)/1.16 "Cormorant Garamond",Georgia,serif!important}
    body>section>.sub{color:#45658f!important}
    .g{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(min(100%,245px),1fr))!important;gap:18px!important;margin:22px 0!important}
    .c,.box,.duo-card,.spaces-card,.color-system{
      background:linear-gradient(145deg,#fafdff,#f1f8ff)!important;
      color:#10377f!important;border:1px solid #c5def3!important;border-radius:22px!important;
      box-shadow:0 8px 24px rgba(25,77,132,.07)!important
    }
    .c{padding:clamp(18px,2.5vw,26px)!important;transition:transform .18s,box-shadow .18s!important}
    .c:hover{transform:translateY(-3px)!important;box-shadow:0 12px 28px rgba(25,77,132,.12)!important}
    .c b{display:block;color:#123b83!important;font:700 1.2rem "Cormorant Garamond",Georgia,serif!important}
    .c span,.spaces-card p,.duo-card p,.space-item span,.duo-item span{color:#45658f!important}
    .box{padding:clamp(20px,3vw,30px)!important}
    .duo,.spaces{max-width:1040px!important;margin:28px auto!important;padding:0 clamp(14px,3vw,24px)!important}
    .duo-card,.spaces-card{padding:clamp(20px,3vw,30px)!important;text-align:center!important}
    .duo-card h2,.spaces-card h2{color:#123b83!important;font:700 clamp(1.7rem,3.5vw,2.2rem) "Cormorant Garamond",Georgia,serif!important}
    .duo-list,.spaces-list{display:flex!important;flex-direction:column!important;gap:16px!important}
    .duo-item,.space-item{display:flex!important;flex-direction:column!important;align-items:center!important;gap:7px!important;padding:16px!important;border:1px solid #d5e8f7!important;border-radius:17px!important;background:#fff!important}
    .duo-item b,.space-item b{color:#123b83!important;font:700 20px "Cormorant Garamond",Georgia,serif!important}
    .duo-item span,.space-item span{max-width:650px!important;color:#45658f!important}
    .btn,.duo-btn,.space-btn,.hero-learn,.actions button{
      background:linear-gradient(120deg,#d9efff,#a9d8f7)!important;color:#10377f!important;
      border:1px solid #8fc4ed!important;border-radius:999px!important;
      box-shadow:0 4px 12px rgba(24,90,153,.12)!important
    }
    input,textarea,select,.field input{background:#fff!important;color:#10377f!important;border:1px solid #bfdcf3!important;border-radius:12px!important}
    footer{background:linear-gradient(110deg,#e3f2ff,#f7fbff,#dceeff)!important;border-top:1px solid #bfdcf3!important;color:#45658f!important}
    footer a{color:#123b83!important}
    @media(max-width:760px){
      .brand-header{grid-template-columns:86px minmax(0,1fr)!important;min-height:0!important;padding:9px 12px!important;gap:10px!important}
      .brand-mark{height:82px!important;max-height:82px!important}
      .brand-mark img{max-height:82px!important;max-width:86px!important}
      .brand-heading{text-align:left!important}
      .brand-heading h1{font-size:clamp(1.7rem,7vw,2.3rem)!important}
      .brand-heading p{font-size:.98rem!important;margin-top:4px!important}
      .brand-lotus{display:none!important}
      .site-nav{justify-content:flex-start!important;padding:7px 10px!important}
      .site-nav a{font-size:14px!important;padding:8px 13px!important}
      .hero-main{min-height:0!important}
      .hero-content{min-height:0!important;padding:38px 16px!important}
      .hero-quote{font-size:clamp(2rem,9vw,2.8rem)!important}
      .hero-description{font-size:1.15rem!important}
      .intro-restore{margin:18px 14px!important;padding:16px!important}
      body>section:not(.hero-main){padding:30px 14px!important}
      .c{padding:17px!important}
    }


    /* Synchronisation Cloudflare : inclure les derniers fichiers de navigation et de lecteur. */
    /* BLEU PRO — en-tête : logo à gauche, identité centrée, lotus à droite. */
    .brand-header{
      display:grid!important;
      grid-template-columns:minmax(100px,160px) minmax(0,1fr) minmax(100px,160px)!important;
      align-items:center!important;gap:clamp(12px,2.5vw,30px)!important;
      min-height:156px!important;padding:12px clamp(16px,4vw,54px)!important;
    }
    .brand-mark{grid-column:1!important;grid-row:1!important;display:flex!important;align-items:center!important;justify-content:center!important;width:100%!important;height:128px!important;max-height:128px!important}
    .brand-mark img{display:block!important;width:100%!important;height:100%!important;max-width:150px!important;max-height:128px!important;object-fit:contain!important}
    .brand-header .brand-mark img.bp-brand-logo{width:100%!important;height:100%!important;max-width:150px!important;max-height:128px!important}
    .brand-heading{grid-column:2!important;grid-row:1!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;min-width:0!important}
    .brand-heading h1,.brand-heading p{text-align:center!important}
    .brand-heading h1{font-size:clamp(2rem,4.7vw,3.8rem)!important}
    .brand-lotus{grid-column:3!important;grid-row:1!important;display:block!important;width:100%!important;max-width:155px!important;height:112px!important;object-fit:contain!important;justify-self:end!important}
    /* Navigation : six boutons, chacun dans sa couleur pastel dédiée. */
    body>nav.site-nav{
      position:sticky!important;top:0!important;z-index:60!important;
      display:flex!important;align-items:center!important;justify-content:space-between!important;flex-wrap:nowrap!important;
      gap:8px!important;margin:0!important;padding:10px clamp(10px,2.5vw,34px)!important;
      border:0!important;border-bottom:1px solid #d5e4f2!important;border-radius:0!important;
      background:linear-gradient(110deg,#fafdff,#f3f8fd,#fafdff)!important;
      box-shadow:0 5px 16px rgba(24,78,139,.08)!important;overflow-x:auto!important;white-space:nowrap!important
    }
    body>nav.site-nav a{
      flex:none!important;padding:10px clamp(12px,1.8vw,22px)!important;
      border:1px solid transparent!important;border-radius:999px!important;
      text-decoration:none!important;font:600 clamp(13px,1.2vw,16px)/1.2 "Cormorant Garamond",Georgia,serif!important;
      box-shadow:0 3px 9px rgba(40,70,100,.07)!important;transition:filter .18s,transform .18s!important
    }
    body>nav.site-nav a:nth-child(1){background:#d9edff!important;color:#174b78!important;border-color:#b9daf5!important}
    body>nav.site-nav a:nth-child(2){background:#f8e1e9!important;color:#754d5d!important;border-color:#efcbd9!important}
    body>nav.site-nav a:nth-child(3){background:#e9e1fa!important;color:#594c78!important;border-color:#d6c9ef!important}
    body>nav.site-nav a:nth-child(4){background:#ffe5d7!important;color:#80553f!important;border-color:#f5cfb9!important}
    body>nav.site-nav a:nth-child(5){background:#fff2c9!important;color:#75602b!important;border-color:#f0dfa5!important}
    body>nav.site-nav a:nth-child(6){background:#dff3e7!important;color:#416b54!important;border-color:#c1e4ce!important}
    body>nav.site-nav a:hover,body>nav.site-nav a:focus-visible{filter:brightness(.96)!important;transform:translateY(-2px)!important}
    body>nav.site-nav a.active{outline:2px solid rgba(31,93,145,.35)!important;outline-offset:1px!important;filter:saturate(1.12)!important}
    .hero-main{background:linear-gradient(180deg,#d9edff 0%,#f4faff 54%,#e4f2ff 100%)!important}
    .hero-main:before{background:radial-gradient(ellipse at 8% 88%,rgba(255,255,255,.95),transparent 30%),radial-gradient(ellipse at 95% 15%,rgba(255,255,255,.8),transparent 30%),linear-gradient(180deg,#d9edff 0%,#f4faff 54%,#e4f2ff 100%)!important}
    @media(max-width:760px){
      .brand-header{grid-template-columns:78px minmax(0,1fr)!important;min-height:0!important;padding:9px 12px!important;gap:10px!important}
      .brand-mark{grid-column:1!important;grid-row:1!important;width:78px!important;height:78px!important;max-height:78px!important}
      .brand-mark img{max-width:78px!important;max-height:78px!important}
      .brand-header .brand-mark img.bp-brand-logo{width:78px!important;height:78px!important;max-width:78px!important;max-height:78px!important}
      .brand-heading{grid-column:2!important;grid-row:1!important;align-items:flex-start!important;text-align:left!important}
      .brand-heading h1,.brand-heading p{text-align:left!important}
      .brand-heading h1{font-size:clamp(1.55rem,6.8vw,2.25rem)!important}
      .brand-heading p{font-size:clamp(.85rem,3.8vw,1.05rem)!important}
      .brand-lotus{display:none!important}
      body>nav.site-nav{justify-content:flex-start!important;padding:8px 10px!important;gap:6px!important}
      body>nav.site-nav a{font-size:13px!important;padding:8px 12px!important}
    }

  `;
  function applyTheme(id){
    var p=palettes.find(function(x){return x.id===id;})||palettes[0];
    current=p.id;var root=document.documentElement;
    [["--site-bg",p.bg],["--site-card",p.card],["--site-text",p.text],["--site-muted",p.muted],["--site-accent",p.accent],["--site-soft",p.soft],["--site-border",p.border],["--bg",p.bg],["--card",p.card],["--tx",p.text],["--mu",p.muted],["--bd",p.border],["--p1",p.soft],["--p2",p.soft],["--p3",p.accent],["--dk",p.text]].forEach(function(v){root.style.setProperty(v[0],v[1]);});
    try{localStorage.setItem(themeKey,p.id);}catch(e){}
    if(panel)panel.querySelectorAll("[data-theme]").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.theme===p.id));});
  }
  var panel=document.getElementById("pastel-theme-panel");
  if(!panel){
    panel=document.createElement("aside");panel.id="pastel-theme-panel";panel.setAttribute("aria-label","Choisir une couleur");panel.hidden=true;
    var close=document.createElement("button");close.type="button";close.className="pt-close";close.textContent="×";close.setAttribute("aria-label","Fermer les couleurs");close.addEventListener("click",function(){panel.hidden=true;});
    var title=document.createElement("p");title.className="pt-title";title.textContent="Choisissez votre ambiance";
    var original=document.createElement("button");original.type="button";original.className="pt-original";original.textContent="↺ Revenir au bleu d’origine";original.addEventListener("click",function(){applyTheme("bleu");});
    panel.appendChild(close);panel.appendChild(title);panel.appendChild(original);
    var grid=document.createElement("div");grid.className="pt-colors";
    palettes.forEach(function(p){var b=document.createElement("button");b.type="button";b.dataset.theme=p.id;b.setAttribute("aria-label",p.name);var dot=document.createElement("i");dot.style.background=p.accent;var label=document.createElement("span");label.textContent=p.name;b.appendChild(dot);b.appendChild(label);b.addEventListener("click",function(){applyTheme(p.id);});grid.appendChild(b);});
    panel.appendChild(grid);document.body.appendChild(panel);
  }
  var toggle=document.getElementById("pastel-theme-toggle");
  if(!toggle){toggle=document.createElement("button");toggle.id="pastel-theme-toggle";toggle.type="button";toggle.textContent="🎨";toggle.setAttribute("aria-label","Ouvrir les couleurs");toggle.setAttribute("title","Changer les couleurs");document.body.appendChild(toggle);}
  toggle.addEventListener("click",function(){panel.hidden=!panel.hidden;});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")panel.hidden=true;});
  applyTheme(current);
})();