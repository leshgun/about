'use strict'

const cork_board = document.getElementById("cork_board");
const language_switch = document.getElementById("language_switch")
const lang_eng = document.querySelectorAll(".lang_eng");
const lang_rus = document.querySelectorAll(".lang_rus");
const hobby = document.querySelector(".hobby");
const clipboard = document.querySelector(".clipboard");
const clipboard_content = clipboard.querySelector(".clipboard__content");
const clipboard_papers = clipboard.querySelectorAll(".paper");
const bookmarks = document.querySelectorAll(".bm");
const pages = clipboard.querySelectorAll(".page");
const bookmarksAndPages = [...bookmarks].reduce((a, bm, i) => {
    return {...a, [bm.id]: pages[i].id}
}, {})
const initialPage = [bookmarks[0], pages[0]]

const clipboadrdActiveList = [clipboard, clipboard_content, ...clipboard_papers];
const blurList = [cork_board, language_switch, hobby, clipboard]


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
function blurOther(node, blurList) {
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
 function clipboardBookmarkSwitch(bm, page) {
    if (!(bm || page)) [bm, page] = initialPage; 
    // const bmType = bm.id.substring(3);
    deactivateOther(bm, bookmarks);
    deactivateOther(page, pages);
}

function languageSwitchActivate() {
    lang_rus.forEach(toggleActive);
    language_switch.addEventListener("click", (e) => {
        lang_eng.forEach(toggleActive);
        lang_rus.forEach(toggleActive);
        // language_switch.children.forEach(toggleActive);

        // console.log(e.target);
    })
}

/**
 * Popup clipboard when click
 */
function clipboardActivate() {
    clipboard.addEventListener("click", () => {
        blurOther(clipboard, blurList);
        clipboadrdActiveList.forEach(toggleActive);
    });
    bookmarks.forEach(bm => {
        bm.addEventListener("click", () => {
            const page = document.getElementById(bookmarksAndPages[bm.id])
            clipboardBookmarkSwitch(bm, page);
        })
    });
    clipboard_content.addEventListener("click", e => {
        if (clipboard.classList.contains('active')) 
            e.stopPropagation();
    });
    clipboardBookmarkSwitch()
}
    
function main() {
    languageSwitchActivate();
    clipboardActivate();
}

main()