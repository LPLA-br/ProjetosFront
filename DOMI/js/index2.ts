//Aplicação interativa com typescript

let kalendae: Date = new Date();
let anoAtual: number = kalendae.getFullYear();

const exec: HTMLElement | null = document.getElementById("modf");

let dataNacimento: HTMLElement | null  = document.querySelector('input#nascData');

let teste: HTMLElement | null = document.querySelector("input#nascData");

let femi: any  = document.getElementById("F");
let masc: any = document.getElementById("M");

let imagem: any = document.createElement('img');
let texto: any  = document.createElement("p");
let conteudoResp: any = document.querySelector("div#Resposta");

function idade()
{
	if( conteudoResp.childElementCount == 2 )
	{
		console.log( conteudoResp.childNodes[0].attributes['src'] );
		conteudoResp.removeChild( imagem );
		conteudoResp.removeChild( texto );
	}

	conteudoResp.innerText = '';

	if( Number(dataNacimento.value) > anoAtual )
	{
		window.alert(`O ano ${dataNacimento} é inválido para uma data de nascimento`);
	}
	else
	{
		let Idade = anoAtual - Number( dataNacimento.value );
		console.log(`${Idade}`);

		if( masc.checked == true )
		{
			if ( Idade == 0 )
			{
				imagem.setAttribute('src', 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/cf86a989eeecc4c38ea3257f5ef90d01.jpg');	
				conteudoResp.append( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Nasceu este ano ou está para nascer";
			}
			else if( Idade >= 0 && Idade <= 5 )
			{
				//criança
				imagem.setAttribute('src', 'https://lillo.com.br/pub/media/magefan_blog/2017/04/a-crianca-de-2-anos.jpg');
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Criança menor de 5 anos";
			}
			else if( Idade >= 5 && Idade <= 11 )
			{
				//criança velha
				imagem.setAttribute('src', 'https://thumbs.dreamstime.com/z/menino-pre-adolescente-agrad%C3%A1vel-fora-na-escola-que-tem-o-bom-tempo-99050216.jpg');
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Criança a meio caminho da adolecencia";
			}
			else if( Idade >= 11 && Idade < 18 )
			{
				//adolecente
				imagem.setAttribute('src', 'https://eyc7xs8f99a.exactdn.com/blog/wp-content/uploads/adolescente-em-primeiro-plano.jpg');
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Adolescente deprimido em sem espectativas";
			}
			else if( Idade >= 18 && Idade < 65 )
			{
				//adulto
				imagem.setAttribute('src', 'https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2019/06/ser-adulto-e-ser-bem-sucedido-ou-nao-afinal-o-que-e-ser-adulto-1.jpg');
				texto.setAttribute("value", "Adulto pagador de imposto");
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Adulto pagador de impostos e bem sucedido (ou não)";
			}
			else
			{
				imagem.setAttribute('src', 'https://ichef.bbci.co.uk/news/640/cpsprodpb/AFEF/production/_101693054_oldie4.jpg');
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Velho aposentado que necessita fazer a prova de vida todo ano.";
			}
		}
		else if( femi.checked == true )
		{
			if( Idade >= 0 && Idade <= 5 )
			{
				//criança
				imagem.setAttribute('src', 'https://i.pinimg.com/474x/08/a4/64/08a46450d58d07ced3d10504f5df1ac4.jpg');
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Uma menininha que nasceu há pouco tempo";
			}
			else if( Idade >= 5 && Idade <= 11 )
			{
				//criança velha
				imagem.setAttribute('src', 'https://thumbs.dreamstime.com/z/garota-rindo-para-si-mesma-menina-de-dez-anos-alegremente-depois-fazer-algo-engra%C3%A7ado-202389596.jpg');
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Menina antes da adolecência";
			}
			else if( Idade >= 11 && Idade < 18 )
			{
				//adolecente
				imagem.setAttribute('src', 'https://st.focusedcollection.com/9163412/i/1800/focused_251670790-stock-photo-portrait-young-black-teenage-girl.jpg');
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Garota adolescente";
			}
			else if( Idade >= 18 && Idade < 60 )
			{
				//adulto
				imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/retrato-de-mulher-jovem-e-atraente-com-cabelos-longos-segurando-muito-dinheiro-sorrindo-para-a-camera-aparecendo-o-polegar-sobre-parede-branca_171337-1051.jpg?w=2000');
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Mulher pagadora de impostos e bem sucedida (ou não)";
			}
			else
			{
				imagem.setAttribute('src', 'https://img.freepik.com/fotos-premium/retrato-de-uma-velha-segurando-dinheiro-isolado_246836-889.jpg');
				conteudoResp.appendChild( imagem );
				conteudoResp.appendChild( texto );
				conteudoResp.childNodes[1].innerText = "Velha aposentada que faz a prova de vida todo ano.";
			}
		}
		else
		{
			window.alert("Erro: Opções de Sexo não marcadas");
		}
	}
}

exec.addEventListener('click', idade);

