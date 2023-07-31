const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')

const progressBar = videoPlayer.querySelector('.progress-bar')
const progress = videoPlayer.querySelector('.progress')
const playButton = videoPlayer.querySelector('.play-pause-button')
const muteButton = videoPlayer.querySelector('.mute-unmute-button')

const link = playButton.querySelector('img')
const link2 = muteButton.querySelector('img')


function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButtom(){    
    const icon = this.paused ? './asset/play.png' : './asset/pause.png'
    link.src = icon
}

function handeProgress(){
    const percent = (video.currentTime / video. duration) * 100
    progressBar.style.width = `${percent}%`
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButtom)
video.addEventListener('pause', updateButtom)
video.addEventListener('timeupdate', handeProgress)

progress.addEventListener('click', scrub);

muteButton.addEventListener('click', ()=>{
    if(video.muted){
        video.muted = false;
        link2.src = './asset/unmute.png'
    }else{
        video.muted = true;
        link2.src = './asset/mute.png'
    }
})

playButton.addEventListener('click', ()=>{
    const icon = this.paused ? './asset/play.png' : './asset/pause.png'
    if(video.paused){
        video.play()
        link.src = icon
    }else{
        video.pause() = true;
        link.src = icon
    }
})
