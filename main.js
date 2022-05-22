const clipboard = document.querySelector(".clipboard");
const clipboard_content = clipboard.querySelector(".clipboard__content");
const clipboard_paper = clipboard.querySelectorAll(".paper");
const cork_board = document.getElementById("cork-board");

const bookmarks = document.querySelectorAll(".bm");
// const bm_info = bookmarks.querySelector(".info");
// const bm_work = bookmarks.querySelector(".work");
// const bm_educ = bookmarks.querySelector(".educ");

const clipboadrdActiveList = [cork_board, clipboard, clipboard_content, ...clipboard_paper];

clipboadrdActiveList.forEach(x=>x.classList.toggle("active"));

function toggleActive2(event) {
    console.log(event)
    console.log(event.currentTarget.toogleList)
    // event.currentTarget.toogleList.forEach(
    //     x => event.currentTarget
    // )
}

function switchClipboardPage() {
    // for (let i = 0; i < bookmarks.length; i++) {
        
    // }
    bookmarks.forEach(bm => {
        bm.addEventListener("click", () => {
            const bmType = bm.id.substring(3);
            document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));
            document.querySelector(".page-" + bmType).classList.add("active");
            bookmarks.forEach(x=>x.classList.remove("active"));
            bm.classList.add("active");
        })
    })
}

function toggleActive() {
    console.log("Clipboard has been pressed...");
    clipboadrdActiveList.forEach(x=>x.classList.toggle("active"));
}


clipboard.addEventListener("click", toggleActive);

clipboard_content.addEventListener("click", e => {
    if (clipboard.classList.contains('active')) e.stopPropagation()
})

// bookmarks.addEventListener("click", toggleActive2);
// bookmarks.toogleList = [".info", ".work", ".educ"]

switchClipboardPage()

