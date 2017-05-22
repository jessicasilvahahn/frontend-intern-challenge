
function Encurtar_link()
{
	var link = document.getElementById('link');
	if(link.value!="www.google.com.br")
	{
		alert("Esta URL não está em nosso Banco ou é uma URL inválida.");

	}
	if(link.value=="www.google.com.br")
	{

		link.value = "http://chr.dc/xyzxyz";
		link.style.color="white";
		Mudar_botao();

	}
	
	
}

function Mudar_botao()
{

	var botao = document.getElementById('botao');
	botao.value = "COPIAR";

}

function Limpa()
{

	var texto = document.getElementById('link');
	texto.value="";
	

}

