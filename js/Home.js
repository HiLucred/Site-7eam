var depoimentos = [ ['Idosa com pistola.png', 'Muito violento! Esta geração está perdida. 0/10', 'Dona Vera'], ['Julius.jpg', 'Este jogo me custou 0,20 centavos. Adorei! 10/10', 'Julius'], ['michael.png', 'Foi o que ela disse', 'Michael Scott'] ]
var listaProdutos = [ ['Favorite Worst Nightmare (2020)', 'Jogo FWN.png'], ['Eclipse 97 (2021)', 'Jogo Eclipse 97.png'], ['Paper Theater (2021)','Jogo Paper Theater.png'] ]



window.onload = function(){
    mostrarDepoimentos();
    montarCardProdutos();
}

function mostrarDepoimentos(){

    document.getElementById("div-depoimentos").innerHTML= "";
    for(var i = 0; i < depoimentos.length; i++){
        var conteudo = "";
        conteudo += '<div class="div-clientes">';
        conteudo += '<div class="div-img-cliente">';
        conteudo += '<img src="img/' + depoimentos[i][0] + '"/>';
        conteudo += '</div>';
        conteudo += '<div class="div-descricao-clientes">';
        conteudo += '"' + depoimentos[i][1] + '"';
        conteudo += '</div>';
        conteudo += '<div class="div-autor-clientes">';
        conteudo += depoimentos[i][2];
        conteudo += '</div>';
        conteudo += '</div>';

        document.getElementById("div-depoimentos").innerHTML += conteudo;
    }
}

function montarCardProdutos(){

    for(var i = 0; i < listaProdutos.length; i++){
        var conteudo = "";
        conteudo += '<div class="div-jogo">';
        conteudo += '<img src="img/'+ listaProdutos[i][1] +'">' ;
        conteudo += '<div class="div-descricao-produto">';
        conteudo += listaProdutos[i][0];
        conteudo += '</div>';
        conteudo += '</div>';

        document.getElementById("produtos-bg").innerHTML += conteudo;
    }
    
}