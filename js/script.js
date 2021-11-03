const play = document.querySelector('.play');

const facile = document.getElementById('facile');
const medio = document.getElementById('medio');
const difficile = document.getElementById('difficile');

const container = document.querySelector('.container');
const esito = document.querySelector('.esito');

let valoreGioco = 'facile'

const difficoltà = document.getElementById('difficoltà');

const numBombe = 16 ;



difficoltà.addEventListener('click',function(){
  
  if(difficoltà.value==2){
    valoreGioco = 'medio'
 }else if (difficoltà.value==3){
   valoreGioco = 'difficile'
  }else {
   valoreGioco = 'facile';
  }
})


play.addEventListener('click',function(){
  
  let vinto = 0 ;
  let numeroCaselle = 0 ;
  container.innerHTML='';
  esito.innerHTML='';
  let sizeCaselle =''; 

  if(valoreGioco==='facile'){
    numeroCaselle = 100;
    sizeCaselle='easy'
  } 
  else if(valoreGioco==='medio'){
    numeroCaselle = 81;
    sizeCaselle='medium'
  } else{
    numeroCaselle=49;
    sizeCaselle='hard'
  }

  const posizioneBombe = positionBomb(numBombe);
  console.log(posizioneBombe);
  
 

  for(let i = 0 ; i < numeroCaselle ; i++){
    const div = document.createElement('div');
    div.className = ('square');
    div.classList.add(sizeCaselle);
    div.innerHTML= i+1 ;
    
    
    container.append(div);

    div.addEventListener('click',function(){
      let perso = false;

      if(perso == false){
        for(let i = 0 ; i < posizioneBombe.length ; i++){
          if(this.innerText==posizioneBombe[i]){
            console.log(document.getElementsByClassName('square'));
  
            for(let ii = 0 ; ii < numeroCaselle;ii++){
              for(let iii = 0 ; iii < posizioneBombe.length ; iii++){   
                if(document.getElementsByClassName('square')[ii].innerText==posizioneBombe[iii]){
                  document.getElementsByClassName('square')[ii].classList.add('lose');
              }}
              document.getElementsByClassName('square')[ii].classList.add('clicked');
              
            }
            esito.innerHTML=`<h2>Hai perso con ${vinto+1} tentativi!!!</h2>`;
            console.log(vinto);
            perso = true;
          }
          
        }
      }
      this.classList.add('clicked');
      vinto ++;
      console.log('vinto',vinto);
      if(vinto == (numeroCaselle-numBombe)){
        esito.innerHTML=`<h2>Hai Vinto!!!</h2>`;
      }
      
    });

  }

   function positionBomb (num){
    let arr = [];
    
    for (let i = 0 ; i < num;i++){
       let numRandom = Math.ceil(Math.random()*numeroCaselle);
       if(arr.includes(numRandom)){
         i--
       }
       else {arr.push(numRandom)};
     } 
    
     return arr;
   }

});
