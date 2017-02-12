console.log('Loaded!');

// changing txt of main page
var element = document.getElementById('main-text');
element.innerHTML="Welcome to tech krishna world, A Complete CS world";
// move image 
var img =document.getElementById('move-img');
img.onclick=function(){
    img.style.marginleft='100px';
    
};