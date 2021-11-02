var listaProdutos = [ [0, 'Jogo Cownting Stars.png', false], [1, 'Jogo Eclipse 97.png', false], [2,'Jogo FWN.png', false],[3, 'Jogo Paper Theater.png', false], [4, 'Jogo Crystal Keeper.png', false], [5, 'Jogo Else Where.png', false] ]

var carrinho = [];

window.onload = function(){

    montarCardProdutos();

}

function montarCardProdutos(){

    document.getElementById("div-produtos").innerHTML= "";

    for(var i = 0; i < listaProdutos.length; i++){
        var conteudo = "";
        conteudo += '<div class="div-card">';
        conteudo += '<div class="card-img">' ;
        conteudo += '<img src="img/'+ listaProdutos[i][1] +'">';
        conteudo += '</div>';
        
        if(listaProdutos[i][2] == false){
            conteudo += '<div class="card-comprar" onclick="comprar('+listaProdutos[i][0] +')">';
            conteudo += 'Comprar';
            conteudo += '</div>';
        }else{
            conteudo += '<div class="card-comprar produto-carrinho">';
            conteudo += 'Adicionado ao Carrinho!';
            conteudo += '</div>';
        }
        conteudo += '</div>';

        document.getElementById("div-produtos").innerHTML += conteudo;
    }
    
}

function comprar(id){

    listaProdutos[id][2] = true;

    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCardProdutos();
}

function mudaPagCarrinho(){
    
    window.location.href = "carrinho.html"
}
