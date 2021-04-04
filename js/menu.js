(() => {
    const menuBtnRef = docoment.querySelector("[data-menu-button]");

    menuBtnRef .addEventListener("click", () => {

        menyBtnRef.classList.toggle("is-open");
    
});
})();