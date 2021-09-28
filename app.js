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
    changeCarousel();
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

button.addEventListener('click', () => {
    musicPlayerSection.classList.add('inactive');
})

                                                                                                                                                                                                          
//access playlist

const playListSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.music-player-section .nav-btn');

navBtn.addEventListener('click', () => {
    playListSection.classList.add('active');
})

// back from playlist

const backToMusicPlayer = document.querySelector