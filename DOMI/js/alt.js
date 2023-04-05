
let numero = 0;
let rot = 0;

const titulo = document.querySelector("h1");

titulo.innerText = "Meu salario oh:";

function bufunfa()
{
	numero += 100;
	titulo.innerText = titulo.innerText.concat( ` ${numero}` );
	titulo.style.color = "#00ff00";
}

function colores()
{
	titulo.style.color = "#ff0000;"
}

titulo.addEventListener('mouseover', colores);
titulo.addEventListener('click', bufunfa);
const ratificar = document.getElementById('ratificar');
ratificar.addEventListener('click', ()=> { rot += 10; ratificar.style.rotate = `${rot}deg`; titulo.style.rotate = `${rot}deg`});
