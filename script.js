//alert ('Testando essa bagaça')

function contar(){
    var inicio = Number(document.getElementById('inicio').value);
    var fim = Number(document.getElementById('fim').value);
    var passo = Number(document.getElementById('passo').value);
    var res = document.getElementById('res');
    var cont = 0 

     if (passo === 0) {
        res.innerHTML = 'ERRO! Dados incompletos ou Passo INVÁLIDO (não pode ser zero).';
        return; // <--- PARADA DE SEGURANÇA
     }    

     if (isNaN(inicio)){
        inicio = 0;
     }

     if (isNaN(fim)){
        fim = 10;
     }
     
     res.innerHTML = `Contando: <br>`;

     if (inicio >= fim && passo >0){
        res.innerHTML = `ERRO! Inicio maior que final e passo positivo, desta forma não existirá contagem!`  
        return;
     }  
     else if (inicio >= fim && passo < 0){
          for (cont = inicio; cont >= fim; cont = cont + passo) {
               res.innerHTML +=  `${cont} \u{1F449}`
          }  
     }    
    else if(inicio < fim && passo > 0){
          for (cont = inicio; cont <= fim; cont = cont + passo) {
               res.innerHTML +=  `${cont} \u{1F449}`
          } 
     }
    else{
          innerHTML= 'Erro! Lógica inválida!'
          return;
     } 

     
   res.innerHTML += `\u{1F3C1}`                   
}

function outracontagem(){
    
    document.getElementById('inicio').value = ''; 
    document.getElementById('fim').value = ''; 
    document.getElementById('passo').value = '';

    res.innerHTML = 'Esperando os próximos valores para relizar contagem...'
}