//1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt('Hoje é qual dia da semana?');

if(diaDaSemana.toLowerCase() === "Sábado" || diaDaSemana.toLowerCase() === "Domingo"){
    alert('Bom fim de semana!');
} else
{
    alert('Boa semana!');
   }

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número positivo ou negativo')
let int = parseInt(numero)
if(int > 0){
    alert('Esse número é positivo');
} else{
    alert('Esse número é negativo');
}

//3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontos = prompt('Você fez uma prova que vale até 500pts. Informe quantos pontos você tirou na prova:')
if(pontos >= 100){
    alert('Parabéns, você venceu!');
}else{
    if(pontos < 100){
        alert('Tente novamente para ganhar');
    }
}

//4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let valor = 1500;
let mensagem = `O seu saldo atual é de R$ ${valor}`;
console.log(mensagem);


//5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Qual o seu nome?');
alert(`Seja bem vindo(a) ${nome}`);