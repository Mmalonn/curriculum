function cambiar(elemento) {
  let x = document.getElementById(elemento);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function seleccionar(elemento, boton) {
  document.getElementById(boton).addEventListener('click', function () {
    cambiar(elemento);
  });
}

for (let index = 1; index < 10; index++) {
  seleccionar(`p${index}`, `b${index}`); 
}

visualViewport.addEventListener("resize", function(){
  console.log("cambio")
  if(visualViewport.width > 768){
    for(let index = 1; index < 10; index++){
      document.getElementById(`p${index}`).style.display = "block";
    }  
  }
})


