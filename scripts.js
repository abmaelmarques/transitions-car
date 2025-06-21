// Pegando os botões de navegação
let previousButton = document.getElementById('previous');
let nextButton = document.getElementById('next');

// Pegando o container principal (onde estão os carros)
let container = document.getElementById('container');

// Pegando todos os itens (carros)
let items = container.querySelectorAll('.list .item');

// Pegando os indicadores (os pontinhos embaixo)
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

// Pegando a área que mostra o número (01, 02, 03)
let numbers = indicator.querySelector('.numbers');

// Variável que vai controlar qual carro está ativo
let active = 0;

// Função para atualizar o slide (chamada sempre que for para o próximo ou anterior)
function reloadSlider() {
    // Remove as classes 'actived' e 'active' de todos os carros e dots
    items.forEach((item, index) => {
        item.classList.remove('actived');
        dots[index].classList.remove('active');
    });

    // Adiciona a classe 'actived' ao carro atual
    items[active].classList.add('actived');

    // Atualiza o indicador de número (exemplo: 01, 02, 03)
    numbers.innerText = `0${active + 1}`;

    // Adiciona a classe 'active' ao pontinho correspondente
    dots[active].classList.add('active');
}

// Evento ao clicar no botão "Next"
nextButton.onclick = () => {
    active = active + 1;

    // Se chegar ao final, volta para o primeiro carro
    if (active >= items.length) {
        active = 0;
    }

    reloadSlider();
}

// Evento ao clicar no botão "Previous"
previousButton.onclick = () => {
    active = active - 1;

    // Se estiver no primeiro carro e voltar, vai para o último
    if (active < 0) {
        active = items.length - 1;
    }

    reloadSlider();
}
