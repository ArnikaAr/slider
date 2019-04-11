let slides = document.getElementsByClassName('slide-item');
let prevBtn = document.getElementsByClassName('prev');
let nextBtn = document.getElementsByClassName('next');
let slideIndex = 1;


showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    }
    else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = 'block';
    
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}

