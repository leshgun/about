const cork_board = document.getElementById("cork_board");
const hobby = document.querySelector(".hobby");
const clipboard = document.querySelector(".clipboard");
const clipboard_content = clipboard.querySelector(".clipboard__content");
const clipboard_papers = clipboard.querySelectorAll(".paper");
const bookmarks = document.querySelectorAll(".bm");
const pages = clipboard.querySelectorAll(".page");
const bookmarksAndPages = [...bookmarks].reduce((a, bm, i) => {
    return {...a, [bm.id]: pages[i]}
}, {})

const clipboadrdActiveList = [clipboard, clipboard_content, ...clipboard_papers];
const blurList = [cork_board, hobby, main_photo, clipboard]



function toggleActive(node) {
    node.classList.toggle("active");
}

/**
 * Add blur-filter to blurList-elements, except "node"
 * @param {DOM-element} node 
 */
function blurOther(node) {
    blurList.forEach(n => {
        console.log(n)
        if (n != node) node.classList.toggle("blur")
    })
}

/**
 * Prevents propagation
 * @param {DOM-element} event 
 * @param {Event from EventListener} event 
 */
function stopPropogation(parent_node, event) {
    if (parent_node.classList.contains('active'))
        event.stopPropagation();
}

/**
 * Add class "active" to the pressed node and its dependences
 * @param {DOM-element} node 
 * @param {DOM-element} dependent_node 
 */
function bookmarkActivate(node, dependent_node) {
    // const bmType = bm.id.substring(3);
    bookmarks.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));
    node.classList.add("active")
    dependent_node.classList.add("active");
}

/**
 * 
 */
function switchClipboardPage() {
    bookmarks.forEach(bm => {
        bm.addEventListener("click", () => {
            bookmarkActivate(bm, bookmarksAndPages[bm.id])
        })
    });
}

/**
 * Popup clipboard when click
 */
function clipboardActivate() {
    blurOther(clipboard);
    clipboadrdActiveList.forEach(toggleActive);
    clipboard_content.addEventListener("click", 
        e => stopPropogation(clipboard, e));
    bookmarkActivate(bookmarks[0], pages[0])
}

function main() {
    clipboard.addEventListener("click", clipboardActivate);
    switchClipboardPage()
}

main()