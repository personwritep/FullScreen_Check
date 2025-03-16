// ==UserScript==
// @name        FullScreen Check
// @namespace        http://tampermonkey.net/
// @version        0.2
// @description        ブラウザのフルスクリーン表示を判定する　ショートカット「F9」
// @author        Personwritep
// @match        https://*/*
// @noframes
// @grant        none
// @updateURL        https://github.com/personwritep/FullScreen_Check/raw/main/FullScreen_Check.user.js
// @downloadURL        https://github.com/personwritep/FullScreen_Check/raw/main/FullScreen_Check.user.js
// ==/UserScript==


// ================

setTimeout(()=>{
    let disp=
        '<div id="monitor_panel">'+
        '<span class="LED_R">🔴</span>'+
        '<span class="LED_B">🔵</span>'+
        '<span class="LED_Y">🟡</span>'+
        '<span class="LED_G">🟢</span>'+
        '<span class="LED_W">⚪</span>'+
        '</div>'+
        '<style>'+
        '#monitor_panel { position: fixed; top: 6px; left: 200px; z-index: calc(infinity); '+
        'font: 16px Meiryo; color: #000; background: #000; padding: 2px 4px 0; } '+
        '.LED_R, .LED_B, .LED_Y, .LED_G, .LED_W { opacity: 0; }</style>';
    document.body.insertAdjacentHTML('beforeend', disp);
}, 500);


function check(key){
    let led=document.querySelector('.LED_'+key);
    if(led){
        led.style.opacity='1';
        setTimeout(()=>{
            led.style.opacity='0'; }, 200); }}

// ================



document.addEventListener('keydown', function(event){
    if(event.keyCode=='120'){ //「F9」
        event.preventDefault();
        ck_width();
        ck_height();
    }});


function ck_width(){
    if(window.screen.width==window.innerWidth){
        check('Y'); }
    else{
        check('G'); }}


function ck_height(){
    if(window.screen.height==window.innerHeight){
        check('R'); }
    else{
        check('B'); }}
