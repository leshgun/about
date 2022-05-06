const clipboard = document.querySelector(".clipboard");
const clipboard_content = clipboard.querySelector(".clipboard__content");
const clipboard_paper = clipboard.querySelectorAll(".paper");
const cork_board = document.getElementById("cork-board");

const clipboadrdActiveList = [cork_board, clipboard, clipboard_content, ...clipboard_paper];

clipboadrdActiveList.forEach(x=>x.classList.toggle("active"));


function toggleActive() {
    console.log("Clipboard has been pressed...");
    clipboadrdActiveList.forEach(x=>x.classList.toggle("active"));
}


clipboard.addEventListener("click", toggleActive)

clipboard_content.addEventListener("click", e => {
    if (clipboard.classList.contains('active')) e.stopPropagation()
})