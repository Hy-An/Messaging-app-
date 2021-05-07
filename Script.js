const messages = document.getElementById("mensajes");
const text = document.getElementById("texto");
const button = document.getElementById("boton");

button.addEventListener("click", function(){
    const newmessage = document.createElement("li");
    newmessage.innerHTML = text.value;
    messages.appendChild(newmessage);
    text.value="";
});

console.log("test")
