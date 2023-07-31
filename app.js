const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-pause-button')
const muteButton = videoPlayer.querySelector('.mute-unmute-button')
const link = playButton.querySelector('img')
const link2 = muteButton.querySelector('img')


playButton.addEventListener('click', ()=>{
    if(video.paused){
        video.play()
        link.src = './asset/pause.png'
    }else{
        video.pause()
        link.src = './asset/play.png'
    }
})

muteButton.addEventListener('click', ()=>{
    if(video.muted){
        video.muted = false;
        link2.src = './asset/unmute.png'
    }else{
        video.muted = true;
        link2.src = './asset/mute.png'
    }
})
