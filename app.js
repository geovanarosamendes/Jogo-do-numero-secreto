alert('Boas vindas ao jogo dos números secretos!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() *numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) { 
    chute = prompt(`Escolha um número entre 0 e ${numeroMaximo}`);
   
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
         //Stop while!
        break;
       //se não
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else{
            if(chute < numeroSecreto){
                alert(`O número secreto é maior que ${chute}`);
            }
        }
        //tentativas = tentativas + 1;
        tentativas++;
    
    }
    
}
//se o chute for igual ao n.s e a tentativa for igual a 1...

            /*if(chute == numeroSecreto && tentativas == 1) {
                alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} de primeira!`);
                
            }else{
                alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
            }*/

                        /*if(tentativas > 1){
                            alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
                        }else{
                            alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} na primeira trentativa!`);
                        }*/

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);