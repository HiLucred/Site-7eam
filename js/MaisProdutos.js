var listaProdutos = [ [0, 'Filme: Viva! A vida é uma festa', 'viva.png', false], [1, 'Filme: Cafarnaum', 'cafarnaum.jpg', false] ]

var carrinho = [];

window.onload = function(){

    montarCardProdutos();

}

function montarCardProdutos(){

    document.getElementById("div-produto").innerHTML= "";

    for(var i = 0; i < listaProdutos.length; i++){
        var conteudo = "";
        conteudo += '<div class="div-card">';
        conteudo += '<div class="card-img">' ;
        conteudo += '<img src="img/Jogo Cownting Stars.png">';
        conteudo += '</div>';
        
        conteudo += '<div class="card-comprar" onclick="comprar>';
        conteudo += 'Comprar';
        conteudo += '</div>';
        conteudo += '</div>';

        
            
                
            

            
                
            
        

        if(listaProdutos[i][3] == false){
            conteudo += '<div class="div-card-comprar" onclick="comprar(' + listaProdutos[i][0] +')">';
            conteudo += 'Alugar';
            conteudo += '</div>';
        }else{
            conteudo += '<div class="div-card-comprar produto-carrinho">';
            conteudo += 'Adicionado ao Carrinho!';
            conteudo += '</div>';
        }
    
        conteudo += '</div>';

        document.getElementById("div-produto").innerHTML += conteudo;
    }
    
}

function comprar(id){

    listaProdutos[id][3] = true;

    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCardProdutos();
}
