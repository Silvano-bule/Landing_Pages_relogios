const itens = document.querySelectorAll('.menu_itens nav a')
const menu = document.querySelector('.menu')
const iconeMenu = document.querySelector('.icone_menu')
const iconeClosed = document.querySelector('.icone_closed')
const menuNavBar = document.querySelector('.menu .menu_itens nav')

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

const ShowMenu = () =>{
    menuNavBar.classList.add('New_Nav_Bar')

    window.addEventListener('scroll', function(){
        if(window.scrollY){
            menu.classList.remove('menu_background')
        }
    })
}

const removeMenu = () =>{
    menuNavBar.classList.remove('New_Nav_Bar')

    window.addEventListener('scroll', function(){
        if(window.scrollY > 50){
            menu.classList.add('menu_background')
        }
    })
}
iconeMenu.addEventListener('click', () => ShowMenu())
iconeClosed.addEventListener('click', () =>  removeMenu())
