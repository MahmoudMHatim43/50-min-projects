const cards = document.querySelectorAll('.card');
console.log(cards);
cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        removeActiveClasses();
        card.classList.add('active');
    });
    card.addEventListener('mouseout', () => {
        removeActiveClasses();
    });
});

let removeActiveClasses = () => {
    cards.forEach((card) => {
        card.classList.remove('active');
    });
};