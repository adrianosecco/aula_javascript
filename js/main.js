function clicou(){
    //DOM
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(documento.getElementById("agradecimento"));
    //alert("obreigado por clicar");
}

function redirecionamento(){
    //abre em outra aba
    window.open("https://www.uol.com.br/");
    //abre na mesma aba
    //window.location.href = "https://www.uol.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade)
console.log(validar);

var data = new Date();
console.log(data);
console.log(data.getDate());
console.log(data.getMonth() + 1)
console.log(data.getMinutes());
console.log(data.getHours());
console.log(data.getSeconds());*/


/*var count;
for (count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count++;
   //ou pode ser count = count + 1;
} */

/*
var nome = "Adriano Secco";
var n1 = 36;
var n2 = 10;
var frase = "O Japão é o melhor time do mundo";

//Trabalhando com array
var lista = ["maça", "pera", "laranja"];
//inserindo dados no array
lista.push("uva");
//removendo dados do array
//lista.pop();
console.log(lista[1]);
console.log(lista.toString());
console.log(lista.join(" - "));
alert(lista);

//trabalhando com dicionário
//var fruta = {nome: "maça", cor: "vermelha"}
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}];
console.log(frutas[1].cor);
//console.log(fruta);
//console.log(fruta.nome);
//alert(frutas.cor);

//Trabalhando com condições
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};


// Trabalhando com o LOG (consoloe), visualizando somente no rastro e não no alert
console.log(nome);
console.log(n1 + n2);

//alert(idade + idade2);
//alert("Bem vindo " + nome);

//Trocando elementos
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));

//Transformando tudo em maiúsculo
console.log(frase.toUpperCase());

//Transformando tudo em minúsculo
console.log(frase.toLowerCase()); */