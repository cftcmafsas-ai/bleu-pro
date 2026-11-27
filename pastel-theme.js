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
})();