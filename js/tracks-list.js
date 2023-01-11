const player = document.querySelectorAll('.player')[1],
      playBtn2 = document.querySelectorAll('.play-btn')[1],
      audio = document.querySelectorAll('.audio')[1],
      progressBar = document.querySelectorAll('.progress-bar')[1],
      progress = document.querySelectorAll('.progress')[1],
      imgSrc = document.querySelectorAll('.play-btn__src')[1],
      minuteElement = document.querySelectorAll('.minute')[1],
      secondElement = document.querySelectorAll('.second')[1],
      duration = document.querySelectorAll('.duration')[1],
      tracksList = document.querySelectorAll('.track-name')

const activeTrack = document.getElementsByClassName('active')[0].innerText

function loadSong(songName)
{
    audio.src = `audio/${songName}.mp3`
}

loadSong(activeTrack)

// Play
function playSong()
{
    player.classList.add('play')
    imgSrc.src = 'img/pause-btn.png'
    audio.play()
}

//Pause
function pauseSong()
{
    player.classList.remove('play')
    imgSrc.src = 'img/play-btn.png'
    audio.pause()
}

playBtn2.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying)
    {
        pauseSong()
        clearInterval(interval)
    }
    else
    {
        playSong()
        clearInterval(interval)
        interval = setInterval(startTimer, 1000)
    }
})

// Progress bar
function updateProgress(e)
{
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`

    if (progress.style.width == `100%`)
    {
        pauseSong()
        clearInterval(interval)
    }
}
audio.addEventListener('timeupdate', updateProgress)

//Set progress
function setProgress(e)
{
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
    minute = Math.ceil((audio.currentTime / 60) - 1)
    minuteElement.innerText = minute
    let curSec = audio.currentTime
    while (curSec > 60)
    {
        curSec = curSec - 60
    }
    second = Math.ceil(curSec)
    if (second < 10) {
        secondElement.innerText = "0" + second
    }
    else {
        secondElement.innerText = second
    }
}
progressBar.addEventListener('click', setProgress)

// Start timer
function startTimer()
{
    second++
    if (second < 10)
    {
        secondElement.innerText = "0" + second
    }
    if (second > 9)
    {
        secondElement.innerText = second
    }
    if (second > 59)
    {
        second = 0
        minute++
        secondElement.innerText = "0" + second
        minuteElement.innerText = minute
    }
}