const MESSAGES = document.getElementById("mensajes");
const TEXT = document.getElementById("texto");
const BUTTON = document.getElementById("boton");

BUTTON.addEventListener("click", function(){
    const NEW_MESSAGE = document.createElement("li");
    NEW_MESSAGE.innerHTML = TEXT.value;
    MESSAGES.appendChild(NEW_MESSAGE);
    TEXT.value="";
});


