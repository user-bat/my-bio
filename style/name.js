let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Закажи проект :)"; 
})

window.addEventListener("focus", () => {
    document.title = docTitle;
})