const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    const btnCart = card.querySelector('.btn-cart');
    const btnText = card.querySelector('.btntext');
    const btnAdd = card.querySelector('.add');

    btnCart.addEventListener('mouseenter', () => {
        btnText.style.opacity = '0';
        btnText.style.transform = 'translateY(-5px)';
        btnAdd.classList.add('visible');
    });

    btnCart.addEventListener('mouseleave', () => {
        btnText.style.opacity = '1';
        btnText.style.transform = 'translateY(0)';
        btnAdd.classList.remove('visible');
    });

});
