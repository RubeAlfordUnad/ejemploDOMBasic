const form = document.getElementById('form');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn');
const pResult = document.getElementById('pResult');

form.addEventListener('submit', sumarinputsvalues);

function sumarinputsvalues(event) {
    event.preventDefault();
    const sumaInputs = (input1.value) +(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}
