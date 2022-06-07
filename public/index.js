console.log("javascript working");

document.querySelector(".hamburger").addEventListener("click" , function(){
    document.querySelector(".window").classList.toggle("-translate-x-2");
    document.querySelector(".window").classList.toggle("w-full");
    document.querySelector(".first").classList.toggle("rotate-45");
    document.querySelector(".first").classList.toggle("top-0.5");
    document.querySelector(".sec").classList.toggle("hidden");
    document.querySelector(".third").classList.toggle("-rotate-45");
    document.querySelector(".third").classList.toggle("bottom-1");
    document.querySelector(".hamburger").classList.toggle("outline");
    document.querySelector(".hamburger").classList.toggle("outline-gray-500");
    document.querySelector(".hamburger").classList.toggle("outline-3");
    document.querySelector(".hamburger").classList.toggle("outline-offset-1");

})
