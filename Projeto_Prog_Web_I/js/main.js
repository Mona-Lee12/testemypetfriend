
// Login

function logar(pass){
	var user = document.getElementById('userLog');
	var pass = document.getElementById('userPass');

	if(user.value != "" && pass.value != ""){
        alert("Obrigado sr(a) " + user.value +  "os seus dados foram encaminhados com sucesso");
    }
    else if(user.value == "" && pass.value == "" || user.value != "" && pass.value == "" || user.value == "" && pass.value != ""){
    	alert("Usuário ou senha inválidos, tente novamente");
    }
}

// Cadastro

function registrar(register){
	var name = document.getElementById('name');
	var senha = document.getElementById('senha');
	var confirmacao = document.getElementById('senhaConfirm');

	if(senha.value != senhaConfirm.value){
		alert("Senha e confirmação devem ser iguais");
	}

	if(name.value != "" && senha.value != ""){
        alert("Cadastro realizado com sucesso!");
    }
    else if(name.value == "" && senha.value == ""){
    	alert("Usuário ou senha inválidos");
    }
}


