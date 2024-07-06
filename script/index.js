
const itens = [
    {
        id: 1,
        nome: 'Abacate',
        preco: 2.5,
        img: 'img/abacate.jpg',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Uva',
        preco: 3,
        img: 'img/uva.webp',
        quantidade: 0
    },
    
    {
        id: 3,
        nome: 'Banana',
        preco: 1,
        img: 'img/banana.jpg',
        quantidade: 0
    }

]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('container-frutas')
    itens.forEach((item) => {
        const divProduto = document.createElement('div');

        divProduto.classList.add('frutas');
       
        divProduto.innerHTML = `
            <img src="${item.img}" alt="${item.nome}">
            <p>${item.nome}</p>
            <p class="preco">R$${item.preco}</p>
            <div class="container-qtd">
                <button class="subtrair">-</button>
                <p class="quantidade">${item.quantidade}</p>
                <button class="adicionar">+</button>
            </div>
            <a class="add-fruta" key="${item.id}">Adicionar ao carrinho</a>
        `;
        containerProdutos.appendChild(divProduto);
    });
}

inicializarLoja();

let adicionar = document.getElementsByClassName('adicionar')

let subtrair = document.getElementsByClassName('subtrair')

let quantidadeProdutos = document.getElementsByClassName('quantidade')

let addFruta = document.getElementsByClassName('add-fruta')

for (let i = 0; i < itens.length; i++) {
    adicionar[i].addEventListener('click', () => {
        itens[i].quantidade++
        quantidadeProdutos[i].innerHTML = itens[i].quantidade;
    })

    subtrair[i].addEventListener('click', () => {
        if(itens[i].quantidade > 0) {
            itens[i].quantidade--
            quantidadeProdutos[i].innerHTML = itens[i].quantidade;
        }
    })

    addFruta[i].addEventListener('click', () => {
        if(itens[i].quantidade > 0) {
            alert(`Você adicionou: \n${itens[i].quantidade} ${itens[i].nome}`);
        } else {
            alert(`Adicione pelo menos uma unidade`)
        }
    })

}

