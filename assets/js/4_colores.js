

const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const q3 = document.getElementById('q3')
const q4 = document.getElementById('q4')

function backgroundBlack(q) {
    q.style.backgroundColor = "black";
} 

q1.style.backgroundColor = "blue"
q2.style.backgroundColor = "red"
q3.style.backgroundColor = "green"
q4.style.backgroundColor = "yellow"

q1.addEventListener("click", function(){
    backgroundBlack(q1)
});
q2.addEventListener("click", function(){
    backgroundBlack(q2)
});
q3.addEventListener("click", function(){
    backgroundBlack(q3)
});
q4.addEventListener("click", function(){
    backgroundBlack(q4)
});