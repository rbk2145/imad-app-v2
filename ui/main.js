console.log('Loaded!');

// changing txt of main page
//var element = document.getElementById('main-text');
//element.innerHTML="Welcome to tech krishna world, A Complete CS world";
// move image 
var img =document.getElementById('move-img');
var marginLeft=0;
function  moveright(){
    marginLeft=marginLeft+1;
    img.syle.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};