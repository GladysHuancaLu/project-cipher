const comenzarResponse= document.getElementById("comenzar");
const limpiarResponse= document.getElementById("limpiar");
const volverResponse= document.getElementById("volver");

const cifrarResponse= document.getElementById("AquiTextoCifrado");
const btnCifrar= document.getElementById("cifrar");
const btnDescifrar= document.getElementById("descifrar");
const textoInicial= document.getElementById("textoACifrar");
const offset=document.getElementById("offset");

const cifrar = () => {
  const newOffset = (parseInt(offset.value))%26;
  const textoInicialCifrar= textoInicial.value;
  let textoFinal="";
  const textoMayuscula= textoInicialCifrar.toUpperCase();
  for(var i=0; i<textoMayuscula.length; i++){
    if(textoMayuscula[i]===" "){
      textoFinal+=" ";
    }
    else{
  textoFinal+= String.fromCharCode((textoMayuscula.charCodeAt(i)+65+newOffset)%26+65);
}}
return textoFinal;

}

const descifrar = () => {
  const newOffset = (parseInt(offset.value))%26;
  const textoInicialDescifrar= textoInicial.value;
  let textoFinal="";
  const textoMayuscula= textoInicialDescifrar.toUpperCase();
  for(var i=0; i<textoMayuscula.length; i++){
    if(textoMayuscula[i]==" "){
      textoFinal+=" ";
    }
    else{
  textoFinal+= String.fromCharCode((textoMayuscula.charCodeAt(i)+65-newOffset)%26+65);
}}
return textoFinal;
}

comenzarResponse.addEventListener("click", () =>{
     document.getElementById("section2").style.display='block';
     document.getElementById("section1").style.display='none';
})

btnCifrar.addEventListener("click" , () => {
cifrarResponse.value = cifrar();
})

btnDescifrar.addEventListener("click" , () => {
cifrarResponse.value = descifrar();
})

limpiarResponse.addEventListener("click" , () => {
textoInicial.value= "";
cifrarResponse.value = "";
offset.value="";
})

volverResponse.addEventListener("click" , () => {
textoInicial.value= "";
cifrarResponse.value = "";
offset.value="";
document.getElementById("section2").style.display='none';
document.getElementById("section1").style.display='block';

})
