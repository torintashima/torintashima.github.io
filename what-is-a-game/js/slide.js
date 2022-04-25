function next(currentId, nextId) {
    var currentSlide = document.getElementById(currentId);
    var nextSlide = document.getElementById(nextId);

    currentSlide.style.display = "none";
    nextSlide.style.display = "block";
    nextSlide.style.animationName = "fadeInFromBottom";
    nextSlide.style.animationDuration = "1s";
}