
let actual = window.pageYOffset;

window.onscroll=()=>{
   let desplazamiento=window.pageYOffset;
   (actual>=desplazamiento)
   ?document.getElementById('header').style.top='0'
   :document.getElementById('header').style.top='-100px';
   actual=desplazamiento; 
}







