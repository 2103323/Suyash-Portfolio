/*=============== ADD BLUR HEADER ===============*/ const blurHeader = ()=>{
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

//# sourceMappingURL=index.134a5235.js.map