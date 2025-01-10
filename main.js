const itens = document.querySelectorAll('.menu_itens nav a')
const menu = document.querySelector('.menu')

itens.forEach(element => {
    element.addEventListener('click', function () {
        itens.forEach(el => el.classList.remove('design_class'))
        this.classList.add('design_class')
    })
});

window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
        menu.classList.add('menu_background')
    }else{
        menu.classList.remove('menu_background')
    }
})
