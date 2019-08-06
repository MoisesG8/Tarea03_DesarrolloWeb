 function  validar () {
 //obtenemos por id todos los valores de los campos
var name, segundonombre, lname, dpi, edad, email, telefono;
name=document.getElementById("fnombre").value;
segundonombre=document.getElementById("mnombre").value;
lname=document.getElementById("apellidos").value;
dpi=document.getElementById("DPI").value;
edad=document.getElementById("edad").value;
email=document.getElementById("email").value;
telefono=document.getElementById("telefono").value;
//aqui hacemos una validacion para verificar que estos campos no queden vacios
if (name === "" || lname === "" || dpi === ""|| edad === "" || email === "" || telefono === ""){
 alert("Por favor rellene todos los campos");
 return false;
 //esta es otra validacion especial para el telefono en la cual a traves de una gramatica regular le decimos que solo acepte numeros y que solo acepte 8 numeros
}else if (!/^([0-9]){8}$/.test(telefono)) {
   alert("El " + telefono + " no es un número de telefono valido");
   return false;
   //esta validacion es para verificar que el dpi solo tenga numeros y que tenga 13 numeros
  }else if (!/^([0-9]){13}$/.test(dpi)){
 alert("El " + dpi + " no es un numero de DPI valido");
 return false;
}
 }
