const player1 = document.querySelectorAll('.player')[0],
      playBtn1 = document.querySelectorAll('.play-btn')[0],
      audio1 = document.querySelectorAll('.audio')[0],
      progressBar1 = document.querySelectorAll('.progress-bar')[0],
      progress1 = document.querySelectorAll('.progress')[0],
      imgSrc1 = document.querySelectorAll('.play-btn__src')[0],
      minuteElement1 = document.querySelectorAll('.minute')[0],
      secondElement1 = document.querySelectorAll('.second')[0],
      duration1 = document.querySelectorAll('.duration')[0];

const songName = 'Alone_-_Color_Out';
let minute = 0,
    second = 0,
    interval;

function loadSong(songName)
{
    audio1.src = `audio/${songName}.mp3`;
}

loadSong(songName);

// Play
function playSong()
{
    player1.classList.add('play');
    imgSrc1.src = 'img/pause-btn.png';
    audio1.play();
}

//Pause
function pauseSong()
{
    player1.classList.remove('play');
    imgSrc1.src = 'img/play-btn.png';
    audio1.pause();
}

playBtn1.addEventListener('click', () => {
    const isPlaying = player1.classList.contains('play');
    if (isPlaying)
    {
        pauseSong();
        clearInterval(interval);
    }
    else
    {
        playSong();
        clearInterval(interval);
        interval = setInterval(startTimer, 1000);
    }
});

// Progress bar
function updateProgress(e)
{
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress1.style.width = `${progressPercent}%`;

    if (progress1.style.width == `100%`)
    {
        pauseSong();
        clearInterval(interval);
    }
}
audio1.addEventListener('timeupdate', updateProgress);

//Set progress
function setProgress(e)
{
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio1.duration;
    audio1.currentTime = (clickX / width) * duration;
    minute = Math.ceil((audio1.currentTime / 60) - 1);
    minuteElement1.innerText = minute;
    let curSec = audio1.currentTime;
    while (curSec > 60)
    {
        curSec = curSec - 60;
    }
    second = Math.ceil(curSec);
    if (second < 10) {
        secondElement1.innerText = "0" + second;
    }
    else {
        secondElement1.innerText = second;
    }
}
progressBar1.addEventListener('click', setProgress);

// Start timer
function startTimer()
{
    second++;
    if (second < 10)
    {
        secondElement1.innerText = "0" + second;
    }
    if (second > 9)
    {
        secondElement1.innerText = second;
    }
    if (second > 59)
    {
        second = 0;
        minute++;
        secondElement1.innerText = "0" + second;
        minuteElement1.innerText = minute;
    }
}


// Choosen track (do active)
var choosenTrack = document.getElementsByClassName("track-name");

choosenTrack[0].addEventListener("click", function() {
    this.classList.add("active");
    for (let i = 0; i < choosenTrack.length; i++) {
        const element = choosenTrack[i];
        if (i != 0) {
            element.classList.remove("active");
        }
    }
});

choosenTrack[1].addEventListener("click", function() {
    this.classList.add("active");
    for (let i = 0; i < choosenTrack.length; i++) {
        const element = choosenTrack[i];
        if (i != 1) {
          element.classList.remove("active");
        }
    }
});

choosenTrack[2].addEventListener("click", function() {
    this.classList.add("active");
    for (let i = 0; i < choosenTrack.length; i++) {
        const element = choosenTrack[i];
        if (i != 2) {
          element.classList.remove("active");
        }
    }
});

choosenTrack[3].addEventListener("click", function() {
    this.classList.add("active");
    for (let i = 0; i < choosenTrack.length; i++) {
        const element = choosenTrack[i];
        if (i != 3) {
          element.classList.remove("active");
        }
    }
});

choosenTrack[4].addEventListener("click", function() {
    this.classList.add("active");
    for (let i = 0; i < choosenTrack.length; i++) {
        const element = choosenTrack[i];
        if (i != 4) {
          element.classList.remove("active");
        }
    }
});

choosenTrack[5].addEventListener("click", function() {
    this.classList.add("active");
    for (let i = 0; i < choosenTrack.length; i++) {
        const element = choosenTrack[i];
        if (i != 5) {
          element.classList.remove("active");
        }
    }
});

// Owl carousel
$(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ['<img src="./img/prev-btn.png">', '<img src="./img/next-btn.png">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });    
});
