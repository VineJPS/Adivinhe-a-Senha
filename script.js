//Pegando dados do formulario
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");

const resultados = document.getElementById("results");
const contado = document.getElementById("contador");

//Variaveis necessárias para colocar no html
let tentativas = 0;
//garante que receba somente valores validos
function validarNumero(input) {
    // Remover todos os caracteres exceto números
    input.value = input.value.replace(/\D/g, '');

    // Garantir que o número esteja entre 0 e 9
    if (parseInt(input.value) > 9) {
        input.value = 9;
    }
}
//Função para reiniciar a pagina
function reloadPage() {
    location.reload();
}

//Gerar senha aleatoria
function gerarSenhaAleatoria() {
    var senha = [];
    while (senha.length < 4) {
        var digitoAleatorio = Math.floor(Math.random() * 10);
        if (!senha.includes(digitoAleatorio)) {
            senha.push(digitoAleatorio);
        }
    }
    return senha.join('');
}

let codigo = gerarSenhaAleatoria()
console.log('Senha correta: ' + codigo)

btnEnviar.addEventListener('click', function () {
    //definindo as variaveis
    let N1 = n1.value;
    let N2 = n2.value;
    let N3 = n3.value;
    let N4 = n4.value;

    //Tentativas de adivinhação
    tentativas = tentativas + 1
    let contador = contado;
    contador.innerHTML = "<h1 style='font-size:1em'>" + 'Tentativas ' + tentativas + "</h1>"

    //pegando os numeros
    let numeros_inseridos = [N1, N2, N3, N4];

    //Variavel contadora
    let count = 0;
    let acertos = 0;
    let posicaoErrada = 0;
    let i = 0;
    let n = 0;

    //Validadndo os numeros recebidos    
    //Validadndo acetos mas nos lugares errados 
    while (count <= 3) {
        while (i <= 3) {
            if (n == i) {
                if (numeros_inseridos[n] == codigo[i]) {
                    acertos = acertos + 1
                    //console.log (' certo ' + acertos + ' n= ' + n + ' i= ' + i)
                }
            } else if (numeros_inseridos[n] == codigo[i]) {
                posicaoErrada = posicaoErrada + 1
                //console.log (' errado ' + posicaoErrada + ' n= ' + n + ' i= ' + i)
            }
            i++
        }
        n++
        if (n > 3) { n = 0 }
        if (i > 3) { i = 0 }
        count = count + 1;
    }


    //Jogando os valores na tela pelo innerHTML
    
        resultados.innerHTML += `
        <div  class="resposta">
            <div class="numeracao">
                <h1>${tentativas}</h3>
            </div>
            <div class="numeroInserido coluna">
                <h3>Numero Inserido</h3>
                <p>${numeros_inseridos}</p>
            </div>
            <div class="lugarCerto coluna">
                <h3>lugar certo</h3>
                <p>${acertos}</p>
            </div>
            <div class="lugarErrado coluna">
                <h3>Lugar errado</h3>
                <p>${posicaoErrada}</p>
            </div>
            <div class="certo_errado">
                ${acertos == 4 ? '<img src="./img/certo.png" alt="" class="imgValiacao">' : '<img src="./img/errado.png" alt="" class="imgValiacao">'}
            </div>
        </div>`

        if(acertos == 4){
            alert("Parabens você acertou a senha!, para gerar uma nova clique no botao no canto superior esquerdo")
        }
        count = 0;
        n = 0;
        i = 0;
        acertos = 0;
        posicaoErrada = 0;
    
})
