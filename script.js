const contador = document.querySelector(".contador");
const botones = document.querySelector(".botones");

botones.addEventListener("click",(e)=>{
    if(e.target.classList.contains("sustraer")){
        contador.innerHTML--;
        setColor();
    }
    if(e.target.classList.contains("resetear")){
        contador.innerHTML=0;
        setColor();
    }
    if(e.target.classList.contains("agregar")){
        contador.innerHTML++;
        setColor();
    }
})

function setColor(){
    if(contador.innerHTML > 0){
        contador.style.color = "yellow";
    }else if(contador.innerHTML < 0){
        contador.style.color = "orangered";
    }else {
        contador.style.color = "#fff";
    }
}




/*Con classList.contains se accede a la lista de clases de un elemento
comrpobando si la clase indicada existe existe como clase del elemento*/

















/*const contador = document.querySelector(".contador");
const sustraer = document.querySelector(".sustraer");
const resetearContador = document.querySelector(".resetear");
const agregar = document.querySelector(".agregar");

sustraer.addEventListener("click",()=>{
    contador.innerHTML--;
});
resetearContador.addEventListener("click",()=>{
    contador.innerHTML=0;
});
agregar.addEventListener("click",()=>{
    contador.innerHTML++;
});
*/
