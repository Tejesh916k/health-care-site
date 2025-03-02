let slideIndex = 0;

function moveSlide(step) {
    const items = document.querySelectorAll(".carousel-item");
    slideIndex += step;

    if (slideIndex >= items.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = items.length - 1;
    }

    document.querySelector(".carousel-inner").style.transform = 
        `translateX(-${slideIndex * 100}%)`;
}
