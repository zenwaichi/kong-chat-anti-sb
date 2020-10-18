// ==UserScript==
// @name         anti sex bots
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  try to take over the world!
// @author       zenwaichi
// @updateURL    https://zenwaichi.github.io/kong-chat-anti-sb/antisexbots.user.js
// @match        https://www.kongregate.com/games/*
// @match        http://www.kongregate.com/games/*
// @grant        none
// @updateURL
// ==/UserScript==

(function() {
    'use strict';
    var target;
    var wrap = function(){
        target = document.querySelectorAll('.chat_message_window')[1]
        var conf = { childList: true, subtree: true },
            func = (ml,ob)=>{
                for(var m of ml){
                    var _
                    if(m.addedNodes&&
                      (_=m.addedNodes[0].innerText,
                       _.includes('datingfree.us')||
                       _.includes('My nickname J')||
                       _.includes('𝕗𝕣𝕖𝕖𝕘𝕚𝕣𝕝𝕤.𝕥𝕠𝕕𝕒𝕪')
                      )
                    )
                    {
                        m.addedNodes[0].style.display='none'
                    }
                }
            };
        console.log('target = ',target)
        if(!target){
            window.setTimeout(wrap,5000)
            return
        }
        self.obs = new MutationObserver(func)
        self.obs.observe(target,conf)
        console.log('anti sex bots ACTIVE')
    }
    window.setTimeout(wrap,10000)
    window.setTimeout(()=>{
        window.setInterval(()=>{
            if(document.querySelectorAll('.chat_message_window')[1]
               !== target) wrap()
        },5000)
    },20000)
})();
