'use strict';

class RamenTimer {
  constructor(pushButton) {
    this.pushButton = pushButton;
  }

  init() {
    let timer = null;
    let seconds = this.pushButton;
    const timerDisplayElm = document.getElementById('timerDisplay');
    timerDisplayElm.innerHTML = seconds;

    const startButtonElm = document.getElementById('startButton');
    startButtonElm.addEventListener('click', function(){
      if (timer === null){
        timer = setInterval(() => {
          if (seconds > 0) {
            timerDisplayElm.innerHTML = seconds;
            seconds--;
            if (seconds < 30) {
              timerDisplayElm.style.color = 'orange';
            }
            if (seconds < 10) {
              timerDisplayElm.style.color = 'red';
            }
          } else if (seconds === 0) {
            timerDisplayElm.innerHTML = 0;
            clearInterval(timer);
            timer = null;

            music.currentTime = 0;
            music.play();
            music.loop = true;

            const stopButtonElm = document.getElementById('stopButton');
            stopButtonElm.addEventListener('click', function(){
              music.loop = false;
            });
          }
        }, 1000);
      }
    });
  }
}

const music = new Audio('./timer.mp3');
const threeButtonElm = document.getElementById('threeButton');
const fourButtonElm = document.getElementById('fourButton');
const fiveButtonElm = document.getElementById('fiveButton');
const selectTimeElm = document.getElementsByClassName('selectTime')[0];
const timerContentElm = document.getElementsByClassName('timerContent')[0];
const returnButtonElm = document.getElementById('returnButton');
const tittleElm = document.getElementsByClassName('tittle')[0];

let pushButton = null;

threeButtonElm.addEventListener('click', () => {
  pushButton = 180;
  selectTimeElm.classList.add('displayNone');
  timerContentElm.classList.remove('displayNone');
  const ramenTimer3 = new RamenTimer(pushButton);
  ramenTimer3.init();
});
fourButtonElm.addEventListener('click', () => {
  pushButton = 240;
  selectTimeElm.classList.add('displayNone');
  timerContentElm.classList.remove('displayNone');
  const ramenTimer4 = new RamenTimer(pushButton);
  ramenTimer4.init();
});
fiveButtonElm.addEventListener('click', () => {
  pushButton = 300;
  selectTimeElm.classList.add('displayNone');
  timerContentElm.classList.remove('displayNone');
  const ramenTimer5 = new RamenTimer(pushButton);
  ramenTimer5.init();
});

returnButtonElm.addEventListener('click', () => {
  location.reload();
});


window.addEventListener('DOMContentLoaded', function(){
  const CallBorderElm = document.getElementsByClassName('curtainCallBorder')[0];
  const callUpElm = document.getElementsByClassName('curtainCallUp')[0];
  const callDownElm = document.getElementsByClassName('curtainCallDown')[0];
  const bodyElm = this.document.getElementsByClassName('body')[0];
  
  this.setTimeout(function(){
    CallBorderElm.classList.remove('wait');
  }, 500)

  this.setTimeout(function(){
    callUpElm.classList.add('start');
    this.setTimeout(function(){
      callUpElm.classList.add('displayNone');
    }, 2000);
  
    callDownElm.classList.add('start');
    this.setTimeout(function(){
      callDownElm.classList.add('displayNone');
    }, 2000);
  
    CallBorderElm.classList.add('end');
    this.setTimeout(function(){
      CallBorderElm.classList.add('displayNone');
    }, 2000);
  }, 2500)
  setTimeout(function(){
    selectTimeElm.classList.add('on');
    selectTimeElm.classList.remove('displayNone');
    tittleElm.classList.add('on');
    tittleElm.classList.remove('displayNone');
  },4000);
  this.setTimeout(function(){
    bodyElm.classList.remove('start');
  }, 4500);
});