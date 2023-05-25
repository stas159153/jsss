let h1 = document.querySelectorAll(".Hello");
let color = document.querySelector(".color");
let bg = document.querySelector(".background");
color.addEventListener('click',() =>{
   for( let w of h1){
     w.style.color = 'red'
}
} )
bg.addEventListener("click", () => {
  for (let w of h1) {
    w.style.backgroundColor = "green";
  }
});
