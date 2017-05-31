/*
 * Archivo principal de funcionalidad de JS
 */
 (function main(){
 	var boxes= Array.from(document.getElementsByClassName("box-services"));
 var div, close;
 /*para mostrar el modal*/
var modal=document.getElementById("modal-boxes");
 boxes.forEach(function (box){
 	box.addEventListener("click", function(){
 		div=document.createElement("div");
 		div.classList.add("modal-body");
 		div.innerHTML = box.innerHTML;
 		modal.appendChild(div);
 		modal.classList.remove("hide");
 		close=document.createElement("img");
 		close.setAttribute("src", "http://tojaeur");
 		close.claasList.add("")
 		/*para hacer click en la cruz*/
    modal.classList.remove("hide")
 	});
 });

 })();
 



/*
funcion autoinvocada

 function miAlert(){
 	alert("prueba");
 })()

 -equivalente a -..

 function miAlert(){
 	...
 };