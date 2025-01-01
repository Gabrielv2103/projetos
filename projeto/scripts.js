// Detecta o evento de rolagem
window.addEventListener('scroll', function () {
    const projects = document.querySelectorAll('.card');  // Seleciona todos os cards
    projects.forEach(function (card) {
        const position = card.getBoundingClientRect();  // Pega a posição do card na tela
        if (position.top < window.innerHeight - 100) {  // Verifica se o card está visível
            card.classList.add('show');  // Adiciona a classe 'show' para animar a aparição
        }
    });
});

// Validação do formulário de contato
const form = document.querySelector('form');  // Seleciona o formulário
form.addEventListener('submit', function (event) {
    // Obtém os valores dos campos do formulário
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;

    // Verifica se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {
        event.preventDefault();  // Impede o envio do formulário
        alert('Todos os campos são obrigatórios!');  // Exibe um alerta
    }
});

// Efeito de hover nos cards de projetos
const cards = document.querySelectorAll('.card');  // Seleciona todos os cards

cards.forEach(card => {
    // Ao passar o mouse sobre o card
    card.addEventListener('mouseenter', function () {
        card.style.transform = "scale(1.05)";  // Aumenta o tamanho do card
        card.style.transition = "transform 0.3s ease";  // Efeito suave
    });

    // Ao remover o mouse do card
    card.addEventListener('mouseleave', function () {
        card.style.transform = "scale(1)";  // Retorna ao tamanho normal
    });
});
