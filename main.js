
let actual = window.pageYOffset;

window.onscroll=()=>{
   let desplazamiento=window.pageYOffset;
   (actual>=desplazamiento)
   ?document.getElementById('nav').style.top='0'
   :document.getElementById('nav').style.top='-100px';
   actual=desplazamiento; 
}






