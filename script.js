const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n2");
const n4 = document.getElementById("n4");


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
    
    let acerto = false;
    console.log('Senha correta: ' + codigo)
 
   let numeros_inseridos = [N1, N2, N3, N4];
   
   
   
})
