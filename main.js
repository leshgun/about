// const aside_toggle = document.querySelector(".aside-toggle");
// const tile = document.querySelectorAll(".tile");

// aside_toggle.addEventListener("click", function(){
//     document.querySelector("aside").classList.toggle("active");
//     document.getElementById("wrapper").classList.toggle("active");
//     document.getElementById("aside-toggle-icon").classList.toggle("fa-arrow-right");
//     aside_toggle.classList.toggle("active");
//     // console.log("Lohi")
// });

// console.log(tile);
// for (let i=0; i<tile.length; i++) {
//     const tile_name = tile[i].querySelector(".tile-name");
//     tile_name.addEventListener("click", () => {
//         // tile[i].querySelector(".tile-content").classList.toggle("active");
//         tile[i].classList.toggle("active");
//     })
//     // console.log(tile[i].querySelector(".tile-name"));
// }

const clipboard = document.querySelector(".clipboard");
const clipboard_content = document.querySelector(".clipboard-content");
const cork_board = document.getElementById("cork-board");
const activeList = [cork_board, clipboard, clipboard_content];

activeList.forEach(x=>x.classList.toggle("active"));


function toggleActive() {
    console.log("Clipboard has been pressed...");
    activeList.forEach(x=>x.classList.toggle("active"));
}


// console.log(clipboard.classList.contains(class))

clipboard.addEventListener("click", toggleActive)

clipboard_content.addEventListener("click", e => {
    clipboard.classList.contains('active')
        ? e.stopPropagation()
        : console.log("Propagation wasn't stopped...")
})

// clipboard_content.removeEventListener("click", e => {
//     e.stopPropagation()
// })

// clipboard_content.removeEventListener("click", (e)=>{e.})