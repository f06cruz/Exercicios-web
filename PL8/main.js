function ex01(){
let nome = "Filipe"
//alert (nome)
console.log(nome)
//document.write(nome)
}

function ex02(){
let nome = "Filipe"
let sobrenome ="Cruz"
console.log(nome+" "+sobrenome)
}

function ex03(){
let nome = "Nome: XXX"
let sobrenome = "Sobrenome: YYY"
let idade = "Idade: 123"
let email = "Email: aaa@bbb.cc"
console.log(nome)
console.log(sobrenome)
console.log(idade)
console.log(email)
}

function ex04(){
let nome = "XXX"
let sobrenome = "YYY"
let idade = "123"
let email = "aaa@bbb.cc"
console.log("Nome: "+nome+" ("+nome.length+")")
console.log("Sobrenome: "+sobrenome+" ("+sobrenome.length+")")
console.log("Idade: "+idade)
console.log("Email: "+email)
}

function ex05(){
let nome = "Filipe"
let sobrenome = "Cruz"
let idade = "123"
let email = "aaa@bbb.cc"
console.log("Nome: "+nome.toLocaleUpperCase()+" ("+nome.length+")<br>")
console.log("Sobrenome: "+sobrenome.toLocaleUpperCase()+" ("+sobrenome.length+")")
console.log("Idade: "+idade)
console.log("Email: "+email)
}

function ex06(){
    let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione nostrum molestiae reprehenderit odio dolores et nulla sunt, exercitationem, autem ipsum excepturi ea neque quasi. Culpa tenetur repudiandae voluptatum perferendis."
    console.log(texto)
    console.log("primeiro A: "+texto.indexOf("a"))
    console.log("ultimo B: "+texto.lastIndexOf("b"))

}

function ex07(){
    let n1= Math.ceil(Math.random()*10)
    let n2= Math.ceil(Math.random()*10)

    let soma = n1 + n2
    let sub = n1 - n2
    let mult = n1 * n2
    let div = n1 / n2
    let rdiv = n1 % n2
    let exp = Math.pow(n1,n2) //n1**n2
    let raiz = Math.sqrt(n1)
    let absl = Math.abs(n2)

    console.log("n.1: "+n1)
    console.log("n.2: "+n2)
    console.log("soma: "+soma)
    console.log("subtração: "+sub)
    console.log("multiplicação: "+mult)
    console.logconsole.logconsole.log("divisão: "+div)
    console.log("resto: "+rdiv)
    console.log("exponencial: "+exp)
    console.log("raiz: "+raiz)
    console.log("absoluto: "+absl)
}

function ex08(){
    console.log(Math.random())
}

function ex09(){
    console.log(Math.ceil(Math.random()*10))
}

function ex10(){
    let n1 = Math.random()*10
    let n2 = Math.random()*10

    console.log("n1: "+n1)
    console.log("n2: "+n2)
    console.log("n1 arredondado: "+n1.toFixed(2))
    console.log("n2 arredondado: "+n2.toFixed(2))
    console.log("n1 arredondado baixo: "+Math.floor(n1))
    console.log("n2 arredondado baixo: "+Math.floor(n2))
    console.log("n1 arredondado cima: "+Math.ceil(n1))
    console.log("n2 arredondado cima: "+Math.ceil(n2))
}

function ex11(){
    let num = Math.ceil(Math.random()*100)

    document.write(num+"<br>")
    if (num>37.5)
        document.write("Tem febre")
    else
        document.write("Não tem febre")
}

function ex12(){
    let num = Math.ceil(Math.random()*100)

    console.log(num+"\n")
    if (num>37.5)
        console.log("Tem febre")
    else {
        if(num>35){
        console.log("Não tem febre")}
        else{
            console.log("Temperatura muito baixa")}
    }
}

function ex13(){
    let idade= 30
    let genero= "Homem"

    if (idade<25){
        if (genero="Homem")
            console.log("O jovem é menor de idade")
        else if (genero="Mulher")
            console.log("A jovem é menor de idade")}
    else {if (genero="Homem")
            console.log("O homem é maior de idade")
        else if (genero="Mulher")
            console.log("A jovem é maior de idade")}

}

function ex14(){
    let num = Math.ceil(Math.random()*10)

    console.log(num)
    if (num==1)
        console.log("Um")
    else if (num==2)
        console.log("Dois")
    else if (num==3)
        console.log("Três")
    else if (num==4)
        console.log("Quatro")
    else if (num==5)
        console.log("Cinco")
    else  console.log("Outro valor")
}
     
function ex15(){
    let num =Math.ceil(Math.random()*10)

    console.log(num)
    switch (num){
        case 1:
            console.log("Um")
            break
        case 2:
            console.log("Dois")
            break
        case 3:
            console.log("Três")
            break
        case 4:
            console.log("Quatro")
            break
        case 5:
            console.log("Cinco")
            break
        default: 
            console.log("Outro valor")
    }
}

function ex16(){
    let cont=1

    for(let x=0;x<1000;x++){
        console.log(cont)
        cont++
    }
}

function ex17(){
    let cont=1

    while(cont<=1000){
        console.log(cont)
        cont++
    }
}

function ex18(){
    let n1= Math.ceil(Math.random()*10)
    let n2= Math.ceil(Math.random()*10)

    console.log(n1)
    console.log(n2)

    if(n1%n2==0)
        console.log("Múltiplo")
    else
        console.log("Não Múltiplo")
}

function ex19(){
    let n1= Math.ceil(Math.random()*10)

    console.log(n1)

    if(n1%2==0)
        console.log("Par")
    else
        console.log("Impar")
}

function ex20(){
    let n1= '153'


    if(n1>99 && n1<1000){
        console.log(n1.charAt(0)) 
        console.log(n1.charAt(2))  
    }  
}

function ex21_e(){
    let num= new Array(Math.ceil(Math.random()*10),Math.ceil(Math.random()*10),Math.ceil(Math.random()*10))

    console.log(num[0])
    console.log(num[1])
    console.log(num[2])

    console.log(num.sort())

}

function ex21(){
    let n1= Math.ceil(Math.random()*10)
    let n2= Math.ceil(Math.random()*10)
    let n3= Math.ceil(Math.random()*10)

    console.log(n1)
    console.log(n2)
    console.log(n3)

    console.log("\n"+Math.min(n1,n2,n3))
}

function ex22(){
    let cel= Math.ceil(Math.random()*100)

    console.log(cel+"C")
    console.log((cel*1.8+32)+"F")
}

function ex23(){
    let euro= Math.ceil(Math.random()*100)

    console.log(euro.toFixed(2)+"€")
    console.log((euro*1.2).toFixed(2)+"$")
    console.log((euro*0.9).toFixed(2)+"£")
    console.log((euro*4).toFixed(2)+"R$")
    console.log((euro*28.5).toFixed(2)+"P$")
}

function ex24(){
    let num=Math.ceil(Math.random()*100)

    if(num.length%2!=0)
        console.log(num)
}

function ex25(){
    let num=Math.ceil(Math.random()*100)
    let n1=0

    console.log("\n"+num+"\n")
    if(num>10)
        for( let x=0; x<=num; x++){
            console.log(n1)
            n1++
        }
}

function ex26(){
    let num=Math.ceil(Math.random()*100)
    let n1=2

    console.log("\n"+num+"\n")
    for( let x=2; x<=num; x++){
            if(x%2==0)
                console.log(n1)
            n1++
        }
}

function ex27(){
    let num=Math.ceil(Math.random()*100)
    let n1=0

    console.log("\n"+num+"\n")
    if(num%2==0&& num!=1 && num!=0 && num<100)
        for( let x=0; x<=num; x++){
            if(x%5==0)
                console.log(n1)
            n1++
        }
}
            

ex27();