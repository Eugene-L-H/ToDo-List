(()=>{"use strict";const e=(e,t)=>{e.classList.toggle("hide"),t.classList.toggle("hide")},t=document.querySelector(".blur-screen"),n=document.querySelector(".menuButton"),c=document.querySelector(".mobileMenuContainer");c.append((()=>{const e=document.createElement("div");e.classList.add("mobileMenu");const t=document.createElement("p");t.classList.add("addProject"),t.textContent="+ Add Project";const n=document.createElement("p");return n.classList.add("viewProjects"),n.textContent="View Projects",e.append(t),e})());const o=document.querySelector(".popupContainer");o.append((()=>{const e=document.createElement("div");e.classList.add("projectPopup");const t=document.createElement("p");t.classList.add("popupTitle"),t.textContent="Add a Project:";const n=document.createElement("input");n.classList.add("inputProjectName"),n.setAttribute("name","inputProjectName"),n.setAttribute("placeholder","Project Name");const c=document.createElement("input");c.classList.add("popupCancel"),c.setAttribute("type","button"),c.setAttribute("value","Cancel");const o=document.createElement("input");o.classList.add("popupAdd"),o.setAttribute("type","button"),o.setAttribute("value","Add");const d=document.createElement("div");return d.classList.add("buttonContainer"),d.append(c),d.append(o),e.append(t),e.append(n),e.append(d),e})()),document.querySelector("#main"),document.querySelector("#content");const d=document.getElementsByClassName("addProject");console.log(d);for(let n of d)n.addEventListener("click",(()=>{e(t,o)}));((e,t)=>{document.querySelector(".inputProjectName");const n=document.querySelector(".popupCancel");document.querySelector(".popupAdd"),n.addEventListener("click",(()=>{e.classList.toggle("hide"),t.classList.toggle("hide")}))})(t,o),n.addEventListener("click",(()=>{c.classList.toggle("hide")}))})();