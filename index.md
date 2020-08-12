// ==UserScript==
// @name         anti sex bots
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       zenwaichi
// @match        https://www.kongregate.com/games/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var func = function(){
var target = document.querySelectorAll('.chat_message_window')[1],
conf = { childList: true, subtree: true },
func = (ml,ob)=>{for(var m of ml){
if(m.addedNodes&&m.addedNodes[0].innerText.includes('freegirls.today')){m.addedNodes[0].style.display='none'}}};
self.obs = new MutationObserver(func)
self.obs.observe(target,conf)
console.log('anti sex bot')
}
window.setTimeout(func,10000)
})();
