/* 
    Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html
    Passo 1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
    
    passo 2 identificar o clique no botão 

    passo 3 - adicionar a classe ativo nos projetos escondidos

Objetivo 2 esconder o botão de mostrar mais 
    Passo 1 - pegar o botão e esconder ele 

*/

// Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

//Passo 1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')


botaoMostrarProjetos.addEventListener('click', () => {
    
    //Objetivo 2 esconder o botão de mostrar mais 
    //Passo 1 - pegar o botão e esconder ele 
    botaoMostrarProjetos.classList.add('remover');
    //passo 3 - adicionar a classe ativo nos projetos escondidos
    projetosInativos.forEach(projetoInativo => {projetoInativo.classList.add('ativo');
});
});


