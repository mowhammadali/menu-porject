const hambergurMenu = document.querySelector(".hambergur-menu");

const sideMenu = document.querySelector(".side-menu");

const exit = document.querySelector(".exit");


hambergurMenu.addEventListener('click',()=>{
    sideMenu.style.setProperty('left','0');
})

exit.addEventListener("click",()=>{
    sideMenu.style.setProperty('left','-50%')
})