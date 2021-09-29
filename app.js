// Carousel

const carousel = [...document.querySelectorAll(".carousel img")];

let carouselImageIndex = 0;
 
const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');

    if(carouselImageIndex >= carousel.length - 1){
        carouselImageIndex = 0;
    } 
    else{
        carouselImageIndex ++;
    }

    carousel[carouselImageIndex].classList.toggle('active');
}

setInterval(() => {
    changeCarousel()
}, 3000);

// navigations

const musicPlayerSection = document.querySelector(".music-player-section");


let clickCount = 1;

musicPlayerSection.addEventListener('click', () => {
    if (clickCount >= 2){
        musicPlayerSection.classList.add('active');
        
        clickCount + 1;
        return;
    }
    clickCount++;
    setTimeout(() => {
        clickCount + 1;
    }, 250);
})

///back from mobile player
const backToHomeBtn = document.querySelector(".music-player-section .back-btn");


backToHomeBtn.addEventListener("click", () => {
    musicPlayerSection.classList.remove('active');
    musicPlayerSection.classList.add('inactive');
})

// const musicPlayer = document.querySelector(".music-player-section");

// musicPlayer.addEventListener("click", () => {
//     musicPlayerSection.classList.remove('inactive');
//     musicPlayerSection.classList.add('active');
// })


                                                                                                                                                                                                          
//access playlist

const playListSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.music-player-section .nav-btn');

navBtn.addEventListener('click', () => {
    playListSection.classList.add('active');
})

// back from playlist

const backToMusicPlayer = document.querySelector(".playlist .back-btn");

backToMusicPlayer.addEventListener("click", () => {
    playListSection.classList.remove("active");
})


// music 
let currentMusic = 0; 

const music = document.querySelector('#audio-source');
const seekBar = document.querySelector(".music-seek-bar");
const songName = document.querySelector(".current-song-name");
const artistName = document.querySelector(".artist-name");
const coverImage = document.querySelector(".cover");
const currentMusicTime = document.querySelector(".current-time");
const musicDuration = document.querySelector(".duration");
const recent = [...document.querySelectorAll(".playlist-card")];

const queue = [...document.querySelectorAll(".queue")];
// select all button

const forwardBtn = document.querySelector("i.fa-forward");
const backwardBtn = document.querySelector("i.fa-backward");
const playBtn = document.querySelector("i.fa-play");
const pauseBtn = document.querySelector("i.fa-pause");
const repeatBtn = document.querySelector("span.fa-redo");
const volumeBtn = document.querySelector("span.fa-volume-up");
const volumeSlider = document.querySelector(".volume-slider");

// playbtn click event

playBtn.addEventListener("click", () => {
    music.play();
    playBtn.classList.remove("active");
    pauseBtn.classList.add("active");
})

// pausebtn click event

pauseBtn.addEventListener("click", () => {
    music.pause();
    pauseBtn.classList.remove("active");
    playBtn.classList.add("active");
})

// function for setting up music

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;

    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverImage.src = song.cover;

    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration)
    }, 300);

    currentMusicTime.innerHTML = "00 : 00";

    queue.forEach(item => item.classList.remove("active"));
    queue[currentMusic].classList.add("active");

    // recent.forEach(item => item.classList.remove("active"));
    // recent[currentMusic].classList.add("active");
}

setMusic(0);

// format duration

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10){
        min = `0` + min;
    }

    let sec = Math.floor(time % 60);
    if (sec < 10){
        sec = `0` + sec;
    }

    return `${min} : ${sec}`;
}

//seekbar events 

setInterval(() => {
    seekBar.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        if(repeatBtn.className.includes("active")){
            setMusic(currentMusic);
            playBtn.click();
        }
        else{
            forwardBtn.click();
        }
    }
}, 2000)

seekBar.addEventListener("change", () => {
    music.currentTime = seekBar.value;
})

// forward btn

forwardBtn.addEventListener("click", () => {
    if (currentMusic >= songs.length - 1){
        currentMusic = 0;
    }
    else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playBtn.click();
})

// backward btn

backwardBtn.addEventListener("click", () => {
    if (currentMusic <= 0){
        currentMusic = songs.length - 1;
    }
    else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
})

// repeat button

repeatBtn.addEventListener("click", () => {
    repeatBtn.classList.toggle("active");
})

// volume section 

volumeBtn.addEventListener("click", () => {
    volumeBtn.classList.toggle("active");
    volumeSlider.classList.toggle("active");
})

volumeSlider.addEventListener("input", () => {
    music.volume = volumeSlider.value;
})

// playlist 

queue.forEach((item, i) => {
    item.addEventListener("click", () => {
        setMusic(i);
        playBtn.click();
    })
})


// recently played
// recent.forEach((item, i) => {
//     item.addEventListener("click", () => {
//         setMusic(i);
//         playBtn.click();
//     })
// })
