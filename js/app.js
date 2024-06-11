//Váriavel para total
let total;
limpar();
//Função para adicionar produtos no carrinho
function adicionar(){
    // recuperar valores: nome, quantidade e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    if(quantidade != 0){
        // Calcular o preço (subtotal)
        let subTotal = valorUnitario * quantidade;
        
        // Adicionar propriamente o produto no carrinho
        let listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

        //Limpar o campo da quantidade
        
        // Atualizar o valor total
        total = total + subTotal;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$${total}`;

        document.getElementById('quantidade').value = 0;
    }
    else{
        alert("Quantidade precisa ser maior que 0!");
    }
}

//Função para limpar produtos no carrinho
function limpar(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}