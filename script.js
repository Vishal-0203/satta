var n=Math.random()
n=Math.floor(n*6)+1
if(n===1){
  document.querySelector('.img1').setAttribute("src","images/dice1.png")
}
else if(n===2){
  document.querySelector('.img1').setAttribute("src","images/dice2.png")
}
else if(n===3){
  document.querySelector('.img1').setAttribute("src","images/dice3.png")
}
else if(n===4){
  document.querySelector('.img1').setAttribute("src","images/dice4.png")
}
else if(n===5){
  document.querySelector('.img1').setAttribute("src","images/dice5.png")
}
else{
    document.querySelector('.img1').setAttribute("src","images/dice6.png")
}
// second dice
var k=Math.random()
k=Math.floor(k*6)+1
if(k===1){
  document.querySelector('.img2').setAttribute("src","images/dice1.png")
}
else if(k===2){
  document.querySelector('.img2').setAttribute("src","images/dice2.png")
}
else if(k===3){
  document.querySelector('.img3').setAttribute("src","images/dice3.png")
}
else if(k===4){
  document.querySelector('.img2').setAttribute("src","images/dice4.png")
}
else if(k===5){
  document.querySelector('.img2').setAttribute("src","images/dice5.png")
}
else{
    document.querySelector('.img2').setAttribute("src","images/dice6.png")
}
// statement code
if(n===k){
 document.querySelector('h1').innerHTML="draw"  ;
}
else if(n>k){
 document.querySelector('h1').innerHTML="Player 1 wins"  ;
}
else{
   document.querySelector('h1').innerHTML="Player 2 wins"  ;
}
