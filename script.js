const hamburguer = document.querySelector('[menu-buttom]');
const menuItens = document.querySelector('[menu-itens]');

const touggleMenu = () => {
    menuItens.classList.toggle('esconde');

}
hamburguer.onmouserover = toggleMenu;
