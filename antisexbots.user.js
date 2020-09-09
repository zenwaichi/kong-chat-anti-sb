// ==UserScript==
// @name         anti sex bots
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  try to take over the world!
// @author       zenwaichi
// @match        https://www.kongregate.com/games/*
// @match        http://www.kongregate.com/games/*
// @grant        none
// @updateURL
// ==/UserScript==

(function() {
    'use strict';
    var func = function(){
        var target = document.querySelectorAll('.chat_message_window')[1],
            conf = { childList: true, subtree: true },
            func = (ml,ob)=>{for(var m of ml){
                var _
                if(m.addedNodes&&
                   (_=m.addedNodes[0],
                    _.innerText.includes('dateforsex.net')||
                    _.innerText.includes('My nickname J')||
                    _.innerText.includes('𝕗𝕣𝕖𝕖𝕘𝕚𝕣𝕝𝕤.𝕥𝕠𝕕𝕒𝕪')
                   )
                )
                {m.addedNodes[0].style.display='none'}}};
        console.log('target = ',target)
        if(!target){console.error('NO CHAT WINDOW');window.setTimeout(func,5000);return}
        self.obs = new MutationObserver(func)
        self.obs.observe(target,conf)
        console.log('anti sex bots ACTIVE')
    }
    window.setTimeout(func,10000)
})();
