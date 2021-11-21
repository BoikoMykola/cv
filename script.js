const accordionHeader = document.getElementsByClassName('accordion-header'),
    active = document.getElementsByClassName('active-panel');
Array.from(accordionHeader).forEach(function (item) {
    item.addEventListener('click', function () {
        if (active.length > 0 && active[0] !== this.parentNode) {
            active[0].classList.remove('active-panel');
        }
        this.parentNode.classList.toggle('active-panel');
    });
});