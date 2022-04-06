const leftBtnel = document.querySelector(".btn-left");
const rightBtnel = document.querySelector(".btn-right");
const carouselslider = document.querySelector(".carousel-sub");
let count = 0;

rightBtnel.addEventListener('click', () => {
    count += 100;
    if (count > carouselslider.scrollWidth - 1200) {
        count = 0
    }
    carouselslider.style.transform = `translateX(-${count}px)`;
})

leftBtnel.addEventListener('click', () => {
    count -= 100;
    if (count < 0) {
        count = carouselslider.scrollWidth - 1200
    }
    carouselslider.style.transform = `translateX(-${count}px)`;
})

const autocarousel = () => {
    count += 50;
    if (count > carouselslider.scrollWidth - 1200) {
        count = 0;
    }
    if (count < 0) {
        count = carouselslider.scrollWidth - 1200
    }

    carouselslider.style.transform = `translateX(-${count}px)`;
};

const carouseltimer = setInterval(autocarousel, 1500);