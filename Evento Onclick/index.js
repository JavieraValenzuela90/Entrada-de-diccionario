function buttonState(elemento) {
    if (elemento.innerHTML == "Log In") {
        elemento.innerHTML = "Log Out"
    }
        else {
            elemento.innerHTML = "Log In"
        }
}

function addButton(elemento) {
    elemento.remove();
}

let count = 13;

function addLikes(elemento) {
    count++;
    elemento.innerHTML = count + " Likes";
    alert("Ninja received a like");
}

let counter = 37;

function addLikes(elemento) {
    counter++;
    elemento.innerHTML = counter + " Likes";
    alert("Ninja received a Like");
}

//this remove palabras reservadas//

