function ex01(){
let nome = "Filipe"
//alert (nome)
console.log(nome)
document.write(nome)
}

function ex02(){
let nome = "Filipe"
let sobrenome ="Cruz"
document.write(nome+" "+sobrenome)
}

function ex03(){
let nome = "Nome: XXX"
let sobrenome = "Sobrenome: YYY"
let idade = "Idade: 123"
let email = "Email: aaa@bbb.cc"
document.write(nome+"<br>")
document.write(sobrenome+"<br>")
document.write(idade+"<br>")
document.write(email+"<br>")
}

function ex04(){
let nome = "XXX"
let sobrenome = "YYY"
let idade = "123"
let email = "aaa@bbb.cc"
document.write("Nome: "+nome+" ("+nome.length+")<br>")
document.write("Sobrenome: "+sobrenome+" ("+sobrenome.length+")<br>")
document.write("Idade: "+idade+"<br>")
document.write("Email: "+email+"<br>")
}

function ex05(){
let nome = "Filipe"
let sobrenome = "Cruz"
let idade = "123"
let email = "aaa@bbb.cc"
document.write("Nome: "+nome.toLocaleUpperCase()+" ("+nome.length+")<br>")
document.write("Sobrenome: "+sobrenome.toLocaleUpperCase()+" ("+sobrenome.length+")<br>")
document.write("Idade: "+idade+"<br>")
document.write("Email: "+email+"<br>")
}

function ex06(){
    let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione nostrum molestiae reprehenderit odio dolores et nulla sunt, exercitationem, autem ipsum excepturi ea neque quasi. Culpa tenetur repudiandae voluptatum perferendis."
    document.write(texto+"<br>")
    document.write("primeiro A: "+texto.indexOf("a")+"<br>")
    document.write("ultimo B: "+texto.lastIndexOf("b")+"<br>")

}

function ex07(){
    let n1= Math.random()*10
    let n2= Math.random()*10

    let soma = n1 + n2
    let sub = n1 - n2
    let mult = n1 * n2
    let div = n1 / n2
    let rdiv = n1 % n2
    let exp = n1 ** n1
    let raiz = Math.sqrt(n1)
    let absl = Math.abs(n2)

    document.write("n.1: "+n1+"<br>")
    document.write("n.2: "+n2+"<br>")
    document.write("soma: "+soma+"<br>")
    document.write("subtração: "+sub+"<br>")
    document.write("multiplicação: "+mult+"<br>")
    document.write("divisão: "+div+"<br>")
    document.write("resto: "+rdiv+"<br>")
    document.write("exponencial: "+exp+"<br>")
    document.write("raiz: "+raiz+"<br>")
    document.write("absoluto: "+absl+"<br>")
}

function ex08(){
    document.write(Math.random())
}

function ex09(){
    document.write(Math.ceil(Math.random()*10))
}

function ex10(){
    let n1 = Math.random()*10
    let n2 = Math.random()*10

    document.write("n1: "+n1+"<br>")
    document.write("n2: "+n2+"<br>")
    document.write("n1 arredondado: "+n1.toFixed(2)+"<br>")
    document.write("n2 arredondado: "+n2.toFixed(2)+"<br>")
    document.write("n1 arredondado baixo: "+Math.ceil(Number(n1.toFixed(2)))+"<br>")
    document.write("n2 arredondado baixo: "+Math.ceil(Number(n2.toFixed(2)))+"<br>")
    document.write("n1 arredondado cima: "+Math.floor(Number(n1.toFixed(2)))+"<br>")
    document.write("n2 arredondado cima: "+Math.floor(Number(n2.toFixed(2)))+"<br>")
}


ex10();