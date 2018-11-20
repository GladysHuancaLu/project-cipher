const ingresar= ()=> {
  document.getElementsByName("pantalla")[0].style.display='none';
    document.getElementsByName("pantalla")[1].style.display='block';
}

const cifrarResponse= document.getElementById("AquiTextoCifrado");
const btnResponse= document.getElementById("cifrar");

const cifrar = () => {
  const offset = parseInt(document.getElementById("offset").value);
  const textoInicial= document.getElementById("textoACifrar").value;
  let textoFinal="";
  const textoMayuscula= textoInicial.toUpperCase();
  for(var i=0; i<textoMayuscula.length; i++){
  textoFinal+= String.fromCharCode((textoMayuscula.charCodeAt(i)-65+offset)%26+65);
  }
return textoFinal;

}
btnResponse.addEventListener("click" , () => {


cifrarResponse.innerHTML = cifrar();
})
