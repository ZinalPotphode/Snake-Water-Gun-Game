

function Input_text(){
    let input=document.getElementById('user').value;
  console.log(input);
let cpu=Math.floor(Math.random()*3);
// cpu's 0=S(snake)
// cpu's 1=w(water)
// cpu's 2=G(gun)
console.log(cpu);
if(input==="S" && cpu===1){
  document.querySelector('p').innerHTML=" You won <br> As you choosed snake and the device choosed water <br> Play again!";
}
else if(input==="W" && cpu===0){
  document.querySelector('p').innerHTML=" You lost this turn <br> As you choosed water and the device choosed snake <br> Play again!";
}
else if(input==="W" && cpu===2){
  document.querySelector('p').innerHTML=" You won <br> As you choosed water and the device choosed gun <br> Play again!";
}
else if(input==="G" && cpu===1){
  document.querySelector('p').innerHTML=" You lost this turn <br> As you choosed gun and the device choosed water <br> Play again!";
}
else if(input==="S" && cpu===2){
  document.querySelector('p').innerHTML=" You lost this turn <br> As you choosed snake and the device choosed gun <br> Play again!";
}
else if(input==="G" && cpu===0){
  document.querySelector('p').innerHTML=" You won <br> As you choosed gun and the device choosed snake <br> Play again!";
}
else{
  document.querySelector('p').innerHTML=" Match Tied <br> Play again!";
}
}
let submit=document.getElementById('submit');
submit.addEventListener('click',Input_text);

function clear(){
    document.getElementById('user').value=' ';
    document.querySelector('p').innerHTML="Enter S for Snake W for Water or G for Gun ";
}
let reset=document.getElementById('reset');
reset.addEventListener('click',clear);