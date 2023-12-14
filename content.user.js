// ==UserScript==
// @name         一亩三分地精简
// @namespace    http://liang2kl.cn/
// @version      0.1
// @description  删掉一亩三分地占用大量内存的乱七八糟的 DOM
// @author       You
// @match        https://www.1point3acres.com/bbs/thread*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=1point3acres.com
// @grant        none
// ==/UserScript==

const selectors = ["#sd", ".mtw.mbw", "#forum_side_menu", "iframe", "script", ".plc.plm", "footer", "#f_pst", "#user_side_menu"];

//const observer = new MutationObserver(mutations => {
//    selectors.forEach(s => {
//        document.querySelectorAll(s).forEach(e => e.remove());
//    });
//});

//observer.observe(document.body, {
//    childList: true,
//    subtree: true
//});

setInterval(() => {
    selectors.forEach(s => {
        document.querySelectorAll(s).forEach(e => e.remove());
    });
}, 500);
