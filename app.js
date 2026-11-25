(function(){
  function setup(){
    var login='https://ma-gestion-web.rodolphetorres.workers.dev/login';
    var signup=login+'?mode=creation';
    var access=document.getElementById('acces');
    if(access){
      access.innerHTML='<h2>Votre espace Ma Gestion Web</h2><p class="sub">Retrouvez vos clients, devis, factures et rendez-vous dans votre application de gestion.</p><div class="box bp-access-card"><p>Un seul compte : celui de Ma Gestion Web.</p><p><a class="btn" href="'+login+'">Accéder à Ma Gestion Web</a></p><p class="sub">Connexion ou création de compte sur Ma Gestion Web.</p></div>';
    }
    var hero=document.getElementById('accueil');
    if(hero)hero.querySelectorAll('a[href="#acces"]').forEach(function(a){a.href=login;a.textContent='Accéder à Ma Gestion Web';});
    var app=document.getElementById('app');
    if(app){
      var heading=app.querySelector('h2');if(heading)heading.textContent='Ma Gestion Web';
      var note=app.querySelector('.box > p.sub');
      if(note)note.textContent='Aperçu non cliquable. Retrouvez votre application sur Ma Gestion Web avec votre compte habituel.';
    }
    var toggle=document.getElementById('account-toggle');
    var modal=document.getElementById('account-modal');
    var card=modal?.querySelector('.modal-card');
    if(toggle){toggle.setAttribute('aria-label','Ouvrir Mon espace Ma Gestion Web');toggle.setAttribute('aria-controls','account-modal');}
    if(card){
      card.setAttribute('aria-label','Mon espace Ma Gestion Web');
      var close=card.querySelector('[data-close-account]');
      var title=document.createElement('h2');title.id='bp-espace-title';title.textContent='Mon espace';
      var intro=document.createElement('p');intro.textContent='Votre application se trouve sur Ma Gestion Web.';
      var help=document.createElement('p');help.textContent='Utilisez votre compte Ma Gestion Web habituel.';
      var links=document.createElement('div');links.className='bp-portal-links';
      var signIn=document.createElement('a');signIn.className='btn';signIn.href=login;signIn.textContent='Se connecter / accéder à mon espace';
      var caption=document.createElement('p');caption.textContent='Pas encore de compte ?';
      var signUp=document.createElement('a');signUp.className='btn bp-signup';signUp.href=signup;signUp.textContent='Créer mon compte sur Ma Gestion Web';
      links.append(signIn,caption,signUp);
      var note=document.createElement('p');note.className='sub';note.textContent='La connexion s’effectue sur Ma Gestion Web. Si vous y êtes déjà connecté dans ce navigateur, vous retrouverez directement votre espace.';
      card.replaceChildren();if(close)card.append(close);card.append(title,intro,help,links,note);
      card.setAttribute('aria-labelledby',title.id);
      if(toggle){
        toggle.addEventListener('click',function(){if(modal.classList.contains('open')){var first=card.querySelector('a');if(first)first.focus();}});
        modal.querySelectorAll('[data-close-account]').forEach(function(b){b.addEventListener('click',function(){toggle.focus();});});
      }
    }
    var style=document.createElement('style');style.id='bleupro-gestion-portal';
    style.textContent='.bp-access-card{text-align:center}.bp-portal-links{display:flex;flex-direction:column;gap:12px;margin:24px 0}.bp-portal-links .btn{display:block;text-align:center;font-size:15px;padding:12px 16px}.bp-portal-links p{margin:0;text-align:center;font-size:14px}.bp-portal-links .bp-signup{background:var(--site-soft,var(--p1))!important}.modal-card .sub{font-size:13px;line-height:1.5}.modal-card #bp-espace-title{padding-right:32px}';
    document.head.appendChild(style);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();
