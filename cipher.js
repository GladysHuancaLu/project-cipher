
const comenzarResponse= document.getElementById("comenzar");

const cifrarResponse= document.getElementById("AquiTextoCifrado");
const btnCifrar= document.getElementById("cifrar");
const btnDescifrar= document.getElementById("descifrar");

const cifrar = () => {
  const offset = (parseInt(document.getElementById("offset").value))%26;
  const textoInicial= document.getElementById("textoACifrar").value;
  let textoFinal="";
  const textoMayuscula= textoInicial.toUpperCase();
  for(var i=0; i<textoMayuscula.length; i++){
    if(textoMayuscula[i]==" "){
      textoFinal+=" ";
    }
    else{
  textoFinal+= String.fromCharCode((textoMayuscula.charCodeAt(i)-65+offset)%26+65);
}}
return textoFinal;

}

const descifrar = () => {
  const offset = (parseInt(document.getElementById("offset").value))%26;
  const textoInicial= document.getElementById("textoACifrar").value;
  let textoFinal="";
  const textoMayuscula= textoInicial.toUpperCase();
  for(var i=0; i<textoMayuscula.length; i++){
    if(textoMayuscula[i]==" "){
      textoFinal+=" ";
    }
    else{
  textoFinal+= String.fromCharCode((textoMayuscula.charCodeAt(i)+65-offset)%26+65);
}}
return textoFinal;

}

comenzarResponse.addEventListener("click", () =>{
      document.getElementsByName("pantalla")[1].style.display='block';
})
btnCifrar.addEventListener("click" , () => {

  document.getElementsByName("pantalla")[2].style.display='block';

cifrarResponse.innerHTML = cifrar();
})

btnDescifrar.addEventListener("click" , () => {

  document.getElementsByName("pantalla")[2].style.display='block';

cifrarResponse.innerHTML = descifrar();
})
