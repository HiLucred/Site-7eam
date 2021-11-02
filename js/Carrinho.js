var listaCarrinho = [];

window.onload = function(){

    listaCarrinho = JSON.parse(window.localStorage.getItem("carrinho"));

    console.log(listaCarrinho);

    montarCardProdutos();

}

function montarCardProdutos(){

    document.getElementById("div-produtos").innerHTML= "";

    for(var i = 0; i < listaCarrinho.length; i++){
        var conteudo = "";
        conteudo += '<div class="div-card">';
        conteudo += '<div class="card-img">' ;
        conteudo += '<img src="img/'+ listaCarrinho[i][1] +'">';
        conteudo += '</div>';
        conteudo += '</div>';

        document.getElementById("div-produtos").innerHTML += conteudo;
    }
    
}
