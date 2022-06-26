console.log("javascript working");



// document.querySelector(".hamburger").addEventListener("click" , function(){
//     document.querySelector(".window").classList.toggle("-translate-x-2");
//     document.querySelector(".window").classList.toggle("w-full");
//     document.querySelector(".first").classList.toggle("rotate-45");
//     document.querySelector(".first").classList.toggle("top-0.5");
//     document.querySelector(".sec").classList.toggle("hidden");
//     document.querySelector(".third").classList.toggle("-rotate-45");
//     document.querySelector(".third").classList.toggle("bottom-1");
//     document.querySelector(".hamburger").classList.toggle("outline");
//     document.querySelector(".hamburger").classList.toggle("outline-gray-500");
//     document.querySelector(".hamburger").classList.toggle("outline-3");
//     document.querySelector(".hamburger").classList.toggle("outline-offset-1");

// })

let menu = document.querySelector(".window");
let main = document.querySelector(".main");


// function openNav(){
//     menu.classList.remove("-ml-48");
//     main.classList.add("ml-48");
//     document.querySelector(".logo-burger").classList.add("mx-48");
//     document.querySelector(".first").classList.add("rotate-45");
//     document.querySelector(".first").classList.add("top-0.5");
//     document.querySelector(".sec").classList.add("hidden");
//     document.querySelector(".third").classList.add("-rotate-45");
//     document.querySelector(".third").classList.add("bottom-1");
// }

// function closeNav(){
//     menu.classList.add("-ml-48");
//     main.classList.remove("ml-48");
//     document.querySelector(".logo-burger").classList.remove("mx-48");
//     document.querySelector(".first").classList.remove("rotate-45");
//     document.querySelector(".first").classList.remove("top-0.5");
//     document.querySelector(".sec").classList.remove("hidden");
//     document.querySelector(".third").classList.remove("-rotate-45");
//     document.querySelector(".third").classList.remove("bottom-1");
// }

document.querySelector(".hamburger").addEventListener("click",function(){
    menu.classList.toggle("-ml-52");
    menu.classList.toggle("ml-0");
    main.classList.toggle("ml-52");
    document.querySelector(".logo-burger").classList.toggle("mx-52");
    document.querySelector(".first").classList.toggle("rotate-45");
    document.querySelector(".first").classList.toggle("top-0.5");
    document.querySelector(".sec").classList.toggle("hidden");
    document.querySelector(".third").classList.toggle("-rotate-45");
    document.querySelector(".third").classList.toggle("bottom-1");
})