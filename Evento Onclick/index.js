function buttonstate(elemento) {
    if (elemento.innerHTML == "Log In") {
        elemento.innerHTML = "Log Out"
    }
        else {
            elemento.innerHTML = "Log In"
        }
}

function addbutton(elemento) {
    elemento.remove();
}

let count = 13;

function addlikes(elemento) {
    count++;
    elemento.innerHTML = count + " Likes";
    alert("Ninja received a like");
}

let counter = 37;

function addlikes(elemento) {
    counter++;
    elemento.innerHTML = counter + " Likes";
    alert("Ninja received a Like");
}



//this remove palabras reservadas
//var boton1 = document.querySelector('.btn1');

 //   boton1.onclick = function() {
 //       count++;
//        this.innerHTML = count + " Likes";
//    }