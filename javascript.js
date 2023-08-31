const opennav = document.getElementById('buttonOpen');
const closenav = document.getElementById('buttonClose');
const thenav = document.getElementById('navDrop');

opennav.addEventListener("click", ()=>{

    document.body.style.overflow="hidden";

    thenav.classList.add("nav-open");

});

closenav.addEventListener("click", ()=>{

    document.body.style.overflow="visible";

    thenav.classList.remove("nav-open");

});