let numero = document.querySelector('#Numero');
let numeroVal = Number(numero.value);

let tipo = document.querySelector('select');
let gatilho = document.querySelector('#gatilho');
let resposta = document.querySelector('#resultados');

resposta.style.backgroundColor = '#000000';
resposta.style.color = '#00FF00';

function calc()
{
	numeroVal = Number(numero.value);
	resposta.innerHTML = "";
	for( let n = 0; n <= 10; n++ )
	{
        let tempCalc = 0;
		if( numeroVal == NaN ) numeroVal = 1;
        switch( tipo.value )
        {
            case 'multiplicacao':
		        tempCalc = numeroVal * n;
		        resposta.innerText += `${numeroVal}*${n}= ${tempCalc}\n`;
                break;
            case 'divisao':
		        tempCalc = numeroVal / n;
		        resposta.innerText += `${numeroVal}/${n}= ${tempCalc.toFixed(2)}\n`;
                break;
            case 'subracao':
		        tempCalc = numeroVal - n;
		        resposta.innerText += `${numeroVal}-${n}= ${tempCalc}\n`;
                break;
            case 'adicao':
		        tempCalc = numeroVal + n;
		        resposta.innerText += `${numeroVal}+${n}= ${tempCalc}\n`;
                break;
        }
	}
}

gatilho.addEventListener('click', calc );
