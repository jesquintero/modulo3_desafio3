const ele = document.getElementById("ele1")

function pintar(e, color = "green") {
    e.style.backgroundColor = color;
} 

//
ele.addEventListener('click', function (event) { pintar(event.target, 'yellow'); }); 