document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('.color input[type="radio"]').forEach((e=>{let o=e.value,t=e;t.style.backgroundColor=o,t.style.border="1px solid",t.style.borderColor="white"===o?"#ccc":"transparent"}));const e=document.querySelectorAll(".down-menu"),o=document.querySelector("#body");e.forEach((e=>{const t=e.nextElementSibling;blackFon=e.previousElementSibling,e.addEventListener("mouseover",(()=>{o.style.height="100vh",o.style.overflow="hidden",blackFon.style.display="block"})),e.addEventListener("mouseout",(()=>{blackFon.style.display="none",o.style.overflow="",o.style.height=""})),t.addEventListener("mouseover",(()=>{o.style.overflow="hidden",o.style.height="100vh",blackFon.style.display="block"})),t.addEventListener("mouseout",(()=>{blackFon.style.display="none",o.style.overflow="",o.style.height=""}))}))}));