const produto = {
    nome: 'Caneta',
    preco: 1.80,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = "Lapis"

console.log(produto, novoProduto)