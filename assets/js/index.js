let color = ""

cuadrado1 = document.getElementById('q1');

areaDibujo = document.getElementsByClassName('section');

function pintaCuadro(element, color) {
    element.style.backgroundColor = color;
} 

function newDiv(addClass){
    const q2 = document.getElementById('q2');
    if (q2){
        q2.remove()
    } 
    const myDiv = document.createElement("div");
    myDiv.id = 'q2';
    myDiv.className = 'cuadro ' + addClass;
    areaDibujo[0].appendChild(myDiv);
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "pink"
        pintaCuadro(cuadrado1, color)
    } else if (event.key === 's') {
        color = "orange"
        pintaCuadro(cuadrado1, color)
    } else if (event.key === 'd') {
        color = "cyan"
        pintaCuadro(cuadrado1, color)
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        newDiv("q")
    } else if (event.key === 'w') {
        newDiv("w")
    } else if (event.key === 'e') {
        newDiv("e")
    }
});