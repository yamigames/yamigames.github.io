const projectMenu=document.querySelector("#project-menu"),menuOpen=document.querySelector("#top-nav"),menuClose=document.querySelector("#top-nav-close");menuOpen.addEventListener("click",(function(){menuOpen.classList.toggle("open"),projectMenu.classList.toggle("open"),console.warn("Nav clicked.")}),!1),menuClose.addEventListener("click",(function(){menuOpen.classList.remove("open"),projectMenu.classList.remove("open"),console.warn("Nav clicked.")}),!1);