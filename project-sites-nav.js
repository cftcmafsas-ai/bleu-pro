(function(){
  function update(){
    document.getElementById('project-sites-nav')?.remove();
    document.getElementById('cross-site-navigation')?.remove();
    var hero=document.getElementById('accueil');
    var title=hero?.querySelector('h1');
    var logo=hero?.querySelector('img');
    if(title&&logo)hero.insertBefore(title,logo);
    var contact=document.getElementById('contact');
    if(contact){
      contact.querySelectorAll('a[href^="mailto:"]').forEach(function(a){a.href='mailto:rodolphetorres@outlook.fr';a.textContent='E-mail : rodolphetorres@outlook.fr';});
      contact.querySelectorAll('a[href*="wa.me/"]').forEach(function(a){a.href='https://wa.me/33769737356';a.textContent='WhatsApp : 07 69 73 73 56';});
      var walker=document.createTreeWalker(contact,NodeFilter.SHOW_TEXT);
      var n;while(n=walker.nextNode()){n.nodeValue=n.nodeValue.replaceAll('rodolphertorres@outlook.fr','rodolphetorres@outlook.fr').replaceAll('+33 7 69 73 73 56','07 69 73 73 56');}
    }
    var panel=document.getElementById('pastel-theme-panel');
    var grid=panel?.querySelector('.pt-colors');
    var toggle=document.getElementById('pastel-theme-toggle');
    if(!panel||!grid||!toggle)return;
    var themes=[
      ['origine','Couleur d’origine : bleu','#f7fafc','#ffffff','#46535e','#7a8c9a','#b9d6ee','#eaf3fa','#dde8f0'],
      ['azur','Bleu azur','#f4f7ff','#fcfdff','#46557a','#7c88a8','#cdd9f7','#e6edfc','#e2e8f6'],
      ['perle','Gris perle','#f8f8fa','#fefefe','#55575f','#85878f','#dcdde3','#eeeef2','#e8e8ec'],
      ['rose','Rose poudré','#fff8f9','#fffafb','#684c56','#987b85','#f0d0d9','#faeaef','#f4e6eb'],
      ['lavande','Lavande','#faf8ff','#fdfbff','#594f70','#887e9e','#ddd3f1','#f1ebfa','#efe9f5'],
      ['menthe','Menthe','#f5fcf9','#fbfffd','#45665a','#78978a','#d2ece0','#eaf7f1','#e6f3ed'],
      ['peche','Pêche','#fff9f5','#fffdfb','#76584a','#a08070','#f7dbca','#fceee6','#f6ebe4'],
      ['vanille','Jaune vanille','#fffdf4','#fffef8','#6b6245','#958a68','#f5ebc6','#faf5e1','#f3eedd'],
      ['bleu','Bleu','#F2F7FD','#FCFDFF','#243F60','#667F9B','#A9CBEF','#E2EDFA','#D5E3F2']
    ];
    function apply(id){
      if(id==='ciel')id='origine';
      var p=themes.find(function(t){return t[0]===id;})||themes[0];
      ['bg','card','text','muted','accent','soft','border'].forEach(function(name,i){document.documentElement.style.setProperty('--site-'+name,p[i+2]);});
      try{localStorage.setItem('pastel-theme-v1',p[0]);}catch(e){}
      grid.querySelectorAll('[data-theme]').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.theme===p[0]));});
    }
    grid.replaceChildren();
    themes.forEach(function(p){var b=document.createElement('button');b.type='button';b.dataset.theme=p[0];b.setAttribute('aria-label',p[1]);var dot=document.createElement('i');dot.style.background=p[6];var label=document.createElement('span');label.textContent=p[1];b.append(dot,label);b.onclick=function(){apply(p[0]);};grid.appendChild(b);});
    var css=document.createElement('style');css.id='bleupro-harmonisation';
    css.textContent='#pastel-theme-panel .pt-colors button[data-theme=origine],#pastel-theme-panel .pt-colors button[data-theme=vanille],#pastel-theme-panel .pt-colors button[data-theme=bleu]{grid-column:1/-1;justify-content:center}#pastel-theme-panel .pt-colors button[data-theme=origine]{font-weight:700}#pastel-theme-panel[hidden]{display:none!important}#pastel-theme-panel #pastel-theme-close{display:block;width:28px;height:28px;padding:0;text-align:center;line-height:28px}body>.account-fab{bottom:66px}#contact a{overflow-wrap:anywhere}';
    document.head.appendChild(css);
    toggle.setAttribute('aria-controls',panel.id);
    toggle.setAttribute('aria-expanded',String(!panel.hidden));
    toggle.addEventListener('click',function(){toggle.setAttribute('aria-expanded',String(!panel.hidden));});
    panel.querySelector('#pastel-theme-close')?.addEventListener('click',function(){toggle.setAttribute('aria-expanded','false');});
    panel.addEventListener('keydown',function(e){if(e.key==='Escape'){panel.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.focus();}});
    var saved='origine';try{saved=localStorage.getItem('pastel-theme-v1')||'origine';}catch(e){}apply(saved);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',update,{once:true});else update();
})();
