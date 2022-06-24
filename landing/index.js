// Menu opening Hamburger
const sandwichmenu = document.querySelector('#sandwichmenu');
const header__navigation = document.querySelector('.header__navigation');
const object = document.querySelector('.object');
const change = document.querySelector('#change');
const sidebar = document.querySelector('.sidebar');

sandwichmenu.addEventListener('click', (e)  => {
e.preventDefault();
document.body.classList.add('menu__opened');
sandwichmenu.classList.toggle('_active');
header__navigation.classList.toggle('_active');
object.classList.toggle('_active');

// let div = document.createElement('div');
// div.classList.add('new__button');


});

change.addEventListener('click', () => {
    
    change.classList.toggle('_active');
    sidebar.classList.toggle('_active');
})