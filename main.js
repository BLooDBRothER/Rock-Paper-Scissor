import { PosEnd } from './path_data.js';
import {regularPathD, solidPathD, vlaidateName} from './util.js'

const items = document.querySelectorAll(".item");
const cpItems = document.querySelectorAll(".cp");
const name = document.querySelector(".player-name");
const nameInp = document.querySelector(".player-inp");
let cnt=0;

let str = "M464.8 80c-26.9-.4-48.8 21.2-48.8 48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v32h-8V80.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v48h-8V96.8c0-26.3-20.9-48.3-47.2-48.8-26.9-.4-48.8 21.2-48.8 48v136l-8-7.1v-48.1c0-26.3-20.9-48.3-47.2-48.8C21.9 127.6 0 149.2 0 176v66.4c0 27.4 11.7 53.5 32.2 71.8l111.7 99.3c10.2 9.1 16.1 22.2 16.1 35.9v6.7c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24v-2.9c0-12.8 2.6-25.5 7.5-37.3l49-116.3c5-11.8 7.5-24.5 7.5-37.3V128.8c0-26.3-20.9-48.4-47.2-48.8z"

items.forEach(item => {
    item.addEventListener("mouseenter", function (){
        // let pathD = solidPathD[this.dataset.value];
        // this.classList.add("so");
        // this.querySelector("path").setAttribute('d', pathD);
        setSolid(this);
    });
    item.addEventListener("mouseleave", function (){
        // let pathD = regularPathD[this.dataset.value];
        // this.classList.remove("so");
        // this.querySelector("path").setAttribute('d', pathD);
        setREgular(this);
    });
});

function setREgular(elem){
    let pathD = regularPathD[elem.dataset.value];
    elem.classList.remove("so");
    elem.querySelector("path").setAttribute('d', pathD);
}

function setSolid(elem){
    let pathD = solidPathD[elem.dataset.value];
    elem.classList.add("so");
    elem.querySelector("path").setAttribute('d', pathD);
}

let delay;
function autoSet(item){
    delay = 0;
    cpItems.forEach(item => {
        setTimeout(()=>{
            setSolid(item);
        }, delay);
        delay += 100;
        setTimeout(()=>{
            setREgular(item);
        }, delay);
        delay += 100;
    });    
}

// let delay = 0;
// cpItems.forEach(item => {
//     setTimeout(()=>{
//         setSolid(item);
//     }, delay);
//     delay += 100;
//     setTimeout(()=>{
//         setREgular(item);
//     }, delay);
//     delay += 100;
// });

autoSet();
setInterval(autoSet, 600)



nameInp.addEventListener("input", vlaidateName);

window.addEventListener("click", (e) => {
    if(e.target == name){
        e.target.classList.add("none");
        nameInp.classList.remove("none");
        nameInp.focus();
        PosEnd(nameInp);
    }
    else if(e.target != nameInp && !nameInp.classList.contains("none")){

        name.innerText = nameInp.value.trim() == "" ? "Player 1" : nameInp.value;
        nameInp.classList.add("none");
        name.classList.remove("none");
    }
});