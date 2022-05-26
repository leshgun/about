'use strict'

const cork_board = document.getElementById("cork_board");
const hobby = document.querySelector(".hobby");
const clipboard = document.querySelector(".clipboard");
const clipboard_content = clipboard.querySelector(".clipboard__content");
const clipboard_papers = clipboard.querySelectorAll(".paper");
const bookmarks = document.querySelectorAll(".bm");
const pages = clipboard.querySelectorAll(".page");
const bookmarksAndPages = [...bookmarks].reduce((a, bm, i) => {
    return {...a, [bm.id]: pages[i].id}
}, {})

const clipboadrdActiveList = [clipboard, clipboard_content, ...clipboard_papers];
const blurList = [cork_board, hobby, main_photo, clipboard]


/**
 * @param {DOM-element} node 
 */
function toggleActive(node) {
    node.classList.toggle("active");
}

/**
 * Add blur-filter to blurList-elements, except "node"
 * @param {DOM-element} node 
 */
function blurOther(node) {
    blurList.forEach(n => {
        if (n != node) n.classList.toggle("blur")
    })
}

/**
 * Activate "node" and deactivate other in "list"
 * @param {DOM-element} node 
 * @param {Array of the DOM-elements} list 
 */
function deactivateOther(node, list) {
    list.forEach(le => le.classList.remove("active"));
    node.classList.add("active");
}

/**
 * Add class "active" to the pressed bookmark and page
 * @param {DOM-element} bm 
 * @param {DOM-element} page
 */
 function clipboardBookmarkSwitch(bm=0, page=0) {
    // const bmType = bm.id.substring(3);
    bm = bm ? bm : bookmarks[0];
    page = page ? page : pages[0];
    deactivateOther(bm, bookmarks);
    deactivateOther(page, pages);
}

/**
 * Popup clipboard when click
 */
function clipboardActivate() {
    clipboard.addEventListener("click", () => {
        blurOther(clipboard);
        clipboadrdActiveList.forEach(toggleActive);
        clipboard_content.addEventListener("click", e => {
            if (clipboard.classList.contains('active')) 
                e.stopPropagation();
        });
    });
    bookmarks.forEach(bm => {
        bm.addEventListener("click", () => {
            const page = pages.getElementById(bookmarksAndPages[bm.id])
            clipboardBookmarkSwitch(bm, page);
        })
    });
    clipboardBookmarkSwitch()
}
    
function main() {
    clipboardActivate();
}

main()