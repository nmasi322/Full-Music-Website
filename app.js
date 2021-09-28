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