let ham = document.querySelector(".aside-toggle");
ham.addEventListener("click", function(){
    document.querySelector("aside").classList.toggle("active");
    document.querySelector("main").classList.toggle("active");
    // console.log("Lohi")
});