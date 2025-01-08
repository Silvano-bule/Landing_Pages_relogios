const itens = document.querySelectorAll('.menu_itens nav a')

itens.forEach(element => {
    element.addEventListener('click', function () {
        itens.forEach(el => el.classList.remove('design_class'))
        this.classList.add('design_class')
    })
});