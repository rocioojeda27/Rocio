let leerboton = document.getElementById('leerboton');
let ocultartexto = document.getElementById('ocultartexto');

leerboton.addEventListener('click', toggleText);

function toggleText() {
    ocultartexto.classList.toggle('mostrartexto');

    if(ocultartexto.classList.contains('mostrartexto')) {
    leerboton.innerHTML = 'Mostrar Menos'
    }
    else {
    leerboton.innerHTML = 'Mostrar Más'
    }
}