function criaCartao(categoria, pergunta, resposta) {
    // Obtém o container principal
    const container = document.getElementById('container');

    // Cria o elemento principal do cartão (article)
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Define o conteúdo HTML interno do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Função que alterna a classe 'active' para virar o cartão
    function viraCartao() {
        // Usa toggle diretamente para gerenciar a classe 'active'
        cartao.classList.toggle('active');
    }

    // Adiciona o evento de clique para chamar a função de virar
    cartao.addEventListener('click', viraCartao);

    // Adiciona o novo cartão ao container na página
    container.appendChild(cartao);
}

