var messages = document.getElementById("mensajes");
var text = document.getElementById("texto");
var button = document.getElementById("boton");

button.AddEventListener("click", function(){
    var newmessage = document.createElement("li");
    newmessage.innerHTML = text.value;
    messages.appendChild(newmensaje);
    text.value="";
});