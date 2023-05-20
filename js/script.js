const GENERAL =200;
const ESTUDIANTE = 80; /* descuento elegir cuanto */
const TRAINEE = 50; 
const JUNIOR = 15; 


const TOTAL = document.getElementById('Abonar');
const CANTIDAD = document.getElementById('Cantidad');
const CATEGORIA_SELEC = document.getElementById('Categoria');
const BORRAR = document.getElementById('Borrar');
const RESUMEN = document.getElementById('Resumen');

// asigno el valor de las constantes a cada texto a mostrar como descuentos en las cajas en comprar.html
document.getElementById("Est").innerHTML=ESTUDIANTE+"%"; 
document.getElementById("Tr").innerHTML=TRAINEE+"%";
document.getElementById("Jun").innerHTML=JUNIOR+"%";

document.getElementById("Cantidad").onchange = function(){ //asigno la funcion y actualizo valores si hay cambios
    actualizar();
}
    
CATEGORIA_SELEC.addEventListener('change', function(){ // actualizo si hay cambios en el select
    //let selectedOption = this.options[CATEGORIA_SELEC.selectedIndex];
    actualizar();
});

function actualizar(){ //dependiendo de la opcion select, actualizo los valores en el elemento id "Abonar"
      switch (CATEGORIA_SELEC.value) {
          case 'Estudiante':
              TOTAL.innerHTML = (GENERAL*CANTIDAD.value*((100-ESTUDIANTE)*0.01)).toFixed(2);
          break;
          case 'Trainee':
              TOTAL.innerHTML = (GENERAL*CANTIDAD.value*((100-TRAINEE)*0.01)).toFixed(2);
          break;
          case 'Junior':
              TOTAL.innerHTML = (GENERAL*CANTIDAD.value*((100-JUNIOR)*0.01)).toFixed(2);
          break;
          default:
              TOTAL.innerHTML = GENERAL*CANTIDAD.value;
              break;
      }
  } 

  let cajas = document.getElementsByClassName("cajaOferta"); // agrego la funcion onclick a las cajas de descuento
  let cant=cajas.length;
  cajas[0].style.border= "1px solid blue";
  cajas[1].style.border= "1px solid green"
  cajas[2].style.border= "1px solid orange"
  for (i = 0; i < cant; ++i) {
      //console.log(cajas[i]);
      cajas[i].onclick = function() {
          //console.log(this);
          CATEGORIA_SELEC.selectedIndex=parseInt(this.id); //cambio la opcion del select
          actualizar(); //actualizo el valor total
      }
  }

    BORRAR.onclick = reset;

    function reset(){
        document.getElementsById("myForm").reset();
    }

    RESUMEN.onclick = Comprar;

    function Comprar(){
        if (CANTIDAD.value>=1){
            alert('Felicidades!! ' + document.getElementById('Nombre').value + ' has comprado ' + CANTIDAD.value + ' entrada/s, por un valor total de $' + TOTAL.innerHTML);
        }
            else if (CANTIDAD.value == 0) {
                alert('Debe ingresar una cantidad');
            }
            else{
            alert('No puede ingresar valores negativos de entradas');
            reset();
            }
        return false; //evita que se recargue la pagina, tambien funciona poniendo un type button
    }

  
  


/* 
  let cajas = document.getElementById ("cajaOferta"); // Encuentra el elemento "cajas" en el sitio
  cajas.onclick = muestraAlerta; // Agrega función onclick al elemento
    
  function muestraAlerta(evento) {
    alert("Evento onclick ejecutado!"); funciona ok para un  solo elemento
  }
 */