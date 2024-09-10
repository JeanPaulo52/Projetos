let nome_usuario = '';
let elemento = document.querySelector('#nome-usuario');


while(nome_usuario == ''){
    nome_usuario = prompt('Qual o seu nome?');
}

if(nome_usuario == null){
    elemento.textContent = 'professor'
}else{
    elemento.textContent = nome_usuario;
}
