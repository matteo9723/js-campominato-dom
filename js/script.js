const play = document.querySelector('.play');

const facile = document.getElementById('facile');
const medio = document.getElementById('medio');
const difficile = document.getElementById('difficile');

const container = document.querySelector('.container');

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
  let numeroCaselle = 0 ;
  container.innerHTML='';
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
      this.classList.add('clicked');
    });

  }

   function positionBomb (num){
    let arr = [];
    let numRandom = Math.floor(Math.random()*numeroCaselle);
    
     for (let i = 0 ; i < num;i++){
       if(arr.includes(numRandom)){
         i--
       }
       else {arr.append(numRandom)};
     } 
     return arr;
   }

});
