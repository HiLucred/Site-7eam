var depoimentos = [ ['Idosa com pistola.png', 'Muito violento! Esta geração está perdida. 0/10', 'Dona Vera'], ['Julius.jpg', 'Este jogo me custou 0,20 centavos. Adorei! 10/10', 'Julius'], ['michael.png', 'Foi o que ela disse', 'Michael Scott'] ]

window.onload = function(){
    mostrarDepoimentos();
}

function mostrarDepoimentos(){


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