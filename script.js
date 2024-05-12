//Pegando dados do formulario
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");

//Gerar senha aleatoria
function gerarSenhaAleatoria() {
    var senha = '';
    for (var i = 0; i < 4; i++) {
        var digitoAleatorio = Math.floor(Math.random() * 10); 
        senha += digitoAleatorio;
    }
    return senha;
}
let codigo = gerarSenhaAleatoria()

btn.addEventListener('click', function () {
    //definindo as variaveis
    let N1 = n1.value;
    let N2 = n2.value;
    let N3 = n3.value;
    let N4 = n4.value;
    
    //definindo as respostas
    let acerto = false;
    console.log('Senha correta: ' + codigo)
 
    //pegando os numeros
    let numeros_inseridos = [N1, N2, N3, N4];
    console.log(numeros_inseridos)
    
    //Variavel contadora
    let count = 0;
    let acertos = 0;
    let posicaoErrada = 0;

    //Validadndo os numeros recebidos

    //validando acertos
    count = 0;
    acertos = 0;
    while(count <= 3){
        if(numeros_inseridos[count] === codigo[count]){
            acertos = acertos + 1
        }
        count = count + 1
    }
    console.log('Total de Acertos' + acertos)
    if(acertos === 4){
        alert("Acertou tudo!, reinicie a pagina para gerar um novo codigo")
    }
   
   
   
})
