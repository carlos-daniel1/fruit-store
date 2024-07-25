import { itens } from './produtos.js';

const inicializarLoja = () => {
    var containerProdutos = document.getElementById('container-frutas')
    itens.forEach((item) => {
        const divProduto = document.createElement('div');

        divProduto.classList.add('frutas');
       
        divProduto.innerHTML = `
            <img src="${item.img}" alt="${item.nome}">
            <p>${item.nome}</p>
            <p class="preco">R$${item.preco} ${item.desc}</p>
            <a class="add-fruta" key="${item.id}">Adicionar ao carrinho</a>
        `;
        containerProdutos.appendChild(divProduto);
    });
}

inicializarLoja();

let addFruta = document.getElementsByClassName('add-fruta')

let numberCart = document.getElementById('number-cart')

let contador = 0

for (let i = 0; i < itens.length; i++) {

    addFruta[i].addEventListener('click', () => {
        let escolherQtd = window.prompt(`Quanto(s) ${itens[i].desc} de ${itens[i].nome} você deseja?`)
        let valor = itens[i].preco
        
        if(escolherQtd > 0) {
            itens[i].quantidade = escolherQtd
            alert(`Você adicionou: \n${itens[i].quantidade} ${itens[i].desc} de ${itens[i].nome} \n\nValor: R$${valor*escolherQtd}`);
            contador++;
            numberCart.innerHTML = contador;
       
        } else {
            alert("Quantidade inválida")
        }

    })
}
