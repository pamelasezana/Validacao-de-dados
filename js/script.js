var nome_valid = false;
var email_valid = false;
var telefone_valid = false;
var form = document.getElementById('form-contato');

function validacadastro(){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
	var telefone = document.getElementById('telefone');
    //add uma funcao para validação de email
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var contErro = 0;

    var caixa_nome= document.querySelector(".msg-nome");
    if(nome.value=="" || nome.value.length < 3){
        caixa_nome.innerHTML = "Preencha o campo corretamente";
        caixa_nome.style.display = "block";
		document.getElementById('nome').style.borderColor = "red";
		document.getElementById('nome').placeholder = "Pâmela Estevam";
		document.getElementById('nome').style.border = "1px solid red";
		document.getElementById('alert_nome').style.display = "block";
        contErro += 1;
    }
    else{
        caixa_nome.style.display = "none";
		document.getElementById('alert_nome').style.display = "none";
		document.getElementById('nome').style.borderColor = "none";
		nome_valid = true;
    }
	//area telefone
	var caixa_tel= document.querySelector(".msg-telefone");
    if(telefone.value=="" || telefone.value.length < 14){
        caixa_tel.innerHTML = "Por favor insira um número de telefone válido";
        caixa_tel.style.display = "block";
		document.getElementById('telefone').style.borderColor = "red";
		document.getElementById('telefone').placeholder = "(00) 0000.000";
		document.getElementById('telefone').style.border = "1px solid red";
		document.getElementById('alert_telefone').style.display = "block";
		

		contErro += 1;
		
    }
	
    else{
        caixa_tel.style.display = "none";
		document.getElementById('telefone').style.borderColor = "none";
		document.getElementById('alert_telefone').style.display = "none";
		document.getElementById('telefone').placeholder = "none";
		telefone_valid = true;
		
    }

    /* Validação do campo email */
	caixa_email = document.querySelector('.msg-email');
	if(email.value == ""){
		caixa_email.innerHTML = "Por favor insira um endereço de email válido";
		caixa_email.style.display = 'block';
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('alert_email').style.display = "block";
		document.getElementById('email').placeholder = "sezanapamela@gmail.com";
		document.getElementById('email').style.border = "1px solid red";
		contErro += 1;
	}else if(filtro.test(email.value)){
		caixa_email.style.display = 'none';
		document.getElementById('email').style.borderColor = "none";
		document.getElementById('alert_email').style.display = "none";
		email_valid = true;
	}else{
		caixa_email.innerHTML = "Formato do E-mail inválido";
		caixa_email.style.display = 'block';
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('email').style.border = "1px solid red";
		document.getElementById('email').placeholder = "email.email.com";
		document.getElementById('alert_email').style.display = "block";
		contErro += 1;
	}	
    
	if(contErro >0 ){
		
	}

}

function mudar(elemento){
	document.getElementById(elemento).style.borderColor = '#D7373F';
	document.getElementById(elemento).style.border = 'none';
	document.getElementById(`alert_${elemento}`).style.display = 'none';
	document.querySelector(`.msg-${elemento}`).style.display = 'none';

	
}
function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

function mtel(v) {
    v = v.replace(/\D/g, "");          
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); 
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");   
    return v;
}

var btn = document.getElementById('btn_form');
var form1 = document.getElementById('my_form1');
var form2 = document.getElementById('my_form2');


function rodaspinner(el){
	validacadastro()
	if (nome_valid==true && email_valid==true && telefone_valid==true){
		el.classList.toggle('button--loading')
		setTimeout(function(){
				 form1.style.display = 'none';
				 form2.style.display = 'block';
				
			 
			}, 1000);	
		
}

}
function voltaForm(){
	form1.style.display = 'block';
	form2.style.display = 'none';
	document.getElementById('btn_form').classList.toggle('button--loading')
	document.querySelector('form').reset()
	document.querySelector('#telefone').placeholder="(00) 0000.000";
	document.querySelector('#nome').placeholder="Pâmela Estevam";
	nome_valid = false;
	email_valid = false;
	telefone_valid = false;

}