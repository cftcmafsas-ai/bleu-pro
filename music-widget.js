(function(){
  "use strict";
  var MUSIC_URL="https://mon-espace-musique.rodolphetorres.workers.dev/";
  function ready(fn){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",fn,{once:true});else fn();}
  ready(function(){
    var header=document.querySelector("body>header");
    var logo=header&&header.querySelector("a img");
    if(logo){
      logo.alt="Logo R — Rodolphe Torres Tirado";
      logo.classList.add("bp-brand-logo");
      var brand=logo.parentElement;
      brand.classList.add("bp-brand-lockup");
      if(!brand.querySelector(".bp-brand-name")){
        var name=document.createElement("span");
        name.className="bp-brand-name";
        name.textContent="BLEU PRO";
        brand.appendChild(name);
      }
      fetch("./assets/reference-logo.b64").then(function(r){if(!r.ok)throw new Error("logo");return r.text();})
        .then(function(data){logo.src="data:image/webp;base64,"+data.trim();}).catch(function(){});
    }

    var nav=header&&header.querySelector("nav");
    if(nav&&!nav.querySelector("[data-music-open]")){
      var navLink=document.createElement("a");
      navLink.href="#music-modal";
      navLink.textContent="♫ Mon Espace Musique";
      navLink.setAttribute("data-music-open","");
      navLink.setAttribute("aria-haspopup","dialog");
      navLink.setAttribute("aria-controls","music-modal");
      navLink.setAttribute("aria-expanded","false");
      nav.appendChild(navLink);
    }

    var sites=document.querySelector("#gda .duo-list");
    if(sites&&!sites.querySelector('[data-site="music"]')){
      var item=document.createElement("div");
      item.className="duo-item";
      item.dataset.site="music";
      var title=document.createElement("b");title.textContent="Mon Espace Musique";
      var desc=document.createElement("span");desc.textContent="Bibliothèque, playlists, radio et lecteur YouTube.";
      var link=document.createElement("a");link.className="duo-btn";link.href=MUSIC_URL;link.target="_blank";link.rel="noopener noreferrer";link.textContent="Accéder";
      item.append(title,desc,link);sites.appendChild(item);
    }

    var opener=document.createElement("button");
    opener.type="button";opener.className="music-float";opener.textContent="♫";
    opener.setAttribute("aria-label","Ouvrir Mon Espace Musique");
    opener.setAttribute("aria-haspopup","dialog");opener.setAttribute("aria-controls","music-modal");opener.setAttribute("aria-expanded","false");
    document.body.appendChild(opener);

    var modal=document.createElement("div");
    modal.id="music-modal";modal.className="music-modal";modal.hidden=true;
    modal.setAttribute("role","dialog");modal.setAttribute("aria-modal","true");modal.setAttribute("aria-labelledby","music-modal-title");
    modal.innerHTML='<button class="music-backdrop" type="button" data-music-close aria-label="Fermer la fenêtre musicale"></button><section class="music-modal-card"><header class="music-modal-head"><h2 id="music-modal-title"><span aria-hidden="true">♫</span> Mon Espace Musique</h2><button class="music-close" type="button" data-music-close aria-label="Fermer">×</button></header><p class="music-modal-subtitle">Écoutez et découvrez ma musique</p><div class="music-popup-intro"><img alt="Illustration de l’univers musical de Rodolphe"><p>Rodolphe Torres Tirado<br><small>Mes créations musicales</small></p></div><div class="music-modal-slogan">Retrouvez mon univers musical<span>♫</span></div><div class="music-modal-footer"><a class="music-modal-link" href="'+MUSIC_URL+'" target="_blank" rel="noopener noreferrer">Accéder à ma playlist ↗</a></div></section>';
    document.body.appendChild(modal);
    var album=modal.querySelector(".music-popup-intro img");
    fetch("./assets/reference-album.b64").then(function(r){if(!r.ok)throw new Error("album");return r.text();})
      .then(function(data){album.src="data:image/webp;base64,"+data.trim();}).catch(function(){});

    var openers=[opener].concat(Array.prototype.slice.call(document.querySelectorAll("[data-music-open]")));
    var lastFocus=null;
    function open(){lastFocus=document.activeElement;modal.hidden=false;document.body.classList.add("music-modal-open");openers.forEach(function(el){el.setAttribute("aria-expanded","true");});modal.querySelector(".music-close").focus();}
    function close(){modal.hidden=true;document.body.classList.remove("music-modal-open");openers.forEach(function(el){el.setAttribute("aria-expanded","false");});if(lastFocus&&lastFocus.focus)lastFocus.focus();}
    openers.forEach(function(el){el.addEventListener("click",function(e){e.preventDefault();open();});});
    modal.querySelectorAll("[data-music-close]").forEach(function(el){el.addEventListener("click",close);});
    document.addEventListener("keydown",function(e){if(!modal.hidden&&e.key==="Escape")close();});
  });
})();