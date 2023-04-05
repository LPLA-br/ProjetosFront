/* Contador */

let a = "verso";

let inicio = document.querySelector('#inicio');
let fim = document.querySelector('#fim');
let passo = document.querySelector('#passo');

let saida = document.querySelector('#saida');

let stringConstrucao = "";

function inverterTitulo()
{

    let titulo = document.querySelector("h1");
    let inverso = "";

    for( let a = titulo.innerHTML.length; a >= 0; a-- )
    {
        if( titulo.innerHTML[a] != undefined )
            inverso += titulo.innerHTML[a];
    }

    titulo.innerHTML = inverso;
}


function mostreOsNumeros()
{
    saida.innerHTML = '';

    if( inicio.value == "" || fim.value == "" || passo.value == "" )
    {
        window.alert( "Erro: nenhum input pode estar vazio !" );
    }
    else
    {
        if( Number(inicio.value) < Number(fim.value) )
        {
            if( a == "inverso" )
            {
                inverterTitulo();
                a = "verso";
            }

            for( let i = Number(inicio.value); i <= (Number(fim.value)); i+=(Number(passo.value)))
            {
                stringConstrucao = stringConstrucao.concat(`${i} 👉 `);
            }
            stringConstrucao += '🤖';
        }
        else if( Number(inicio.value) > Number(fim.value) )
        {
            // PER CONTRARIO MOTU
            if( a == "verso" )
            {
                inverterTitulo();
                a = "inverso";
            }
            for( let i = Number(inicio.value); i >= (Number(fim.value)); i-=(Number(passo.value)))
            {
                stringConstrucao = stringConstrucao.concat(`${i} 👉 `);
            }
            stringConstrucao += '👾';
	    }

        if( saida.clientHeight > 100 )
        {
            saida.style.overflow = "scroll";
        }
        else
        {
            saida.style.overflow = "none";
        }

        saida.innerHTML = stringConstrucao;
        stringConstrucao = '';

    }
}

let acao = document.querySelector('#go');
acao.addEventListener( "click", mostreOsNumeros);

