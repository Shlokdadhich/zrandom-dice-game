var x=Math.floor(Math.random()*6+1)
var y=Math.floor(Math.random()*6+1)
var i="images/dice"+x+".png";
document.querySelector(".img1").setAttribute("src",i);

// var y=Math.floor(Math.random()*6+1)
var k="images/dice"+y+".png";
document.querySelector(".img2").setAttribute("src",k);
if(x===y){
    // document.getElementsByTagName("h1")[0].innerHTML="draw!"
    document.querySelector("h1").innerHTML="draw!"
}
if(x<y){
    // document.getElementsByTagName("h1")[0].innerHTML="draw!"
    document.querySelector("h1").innerHTML="player 2 wins!🚩"
}
if(x>y){
    // document.getElementsByTagName("h1")[0].innerHTML="draw!"
    document.querySelector("h1").innerHTML="🚩player 1 wins!"
}
