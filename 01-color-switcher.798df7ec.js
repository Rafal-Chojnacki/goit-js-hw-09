const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o;t.addEventListener("click",(()=>{o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.798df7ec.js.map
