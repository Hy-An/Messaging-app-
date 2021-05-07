const MESSAGES = document.getElementById("mensajes");
const TEXT = document.getElementById("texto");
const BUTTON = document.getElementById("boton");

BUTTON.addEventListener("click", function(){
    const NEWMESSAGE = document.createElement("li");
    NEWMESSAGE.innerHTML = TEXT.value;
    MESSAGES.appendChild(NEWMESSAGE);
    TEXT.value="";
});


