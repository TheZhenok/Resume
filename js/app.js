let mainBlockInformation = document.querySelector('.personal__info__block')
window.addEventListener('load', (e) => {
    mainBlockInformation.classList.add('active')
})

var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var cards = document.querySelectorAll(".card");

setInterval(() => {
    cards.forEach(element => {
        if (isPartiallyVisible(element)) {
            element.classList.add("active");
        }
    });
}, 30);
function scrolling(e) {
    cards.forEach(element => {
        if (isPartiallyVisible(element)) {
            element.classList.add("active");
        }else{
            setTimeout(() => {
                element.classList.remove("active");
            }, 300);
        }
    });
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}