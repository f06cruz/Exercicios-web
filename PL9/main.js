/*function mudaCorVermelho() {
    document.body.style.backgroundColor = "red";
}
function mudaCorVerde() {
    document.body.style.backgroundColor = "green";
}
function mudaCorAzul() {
    document.body.style.backgroundColor = "blue";
}*/
function mudaCor(cor){
    document.body.style.backgroundColor = cor;
}

function mostrarTexto(){
    // document.getElementById("texto_ex2").style.visibility = "visible";
    document.getElementById("texto_ex2").style.display = "block";
    document.getElementById("btnFrase").style.display = "inline";
}
function mostrarTexto2(){
    document.getElementById("texto_ex2_2").innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ipsa voluptates magnam praesentium. Doloribus aut inventore, minus ipsam eveniet laborum praesentium, eligendi dicta non sed blanditiis cum culpa modi ab!"
}
function mostrarFrase(){
    let frase = document.getElementById("frase");
    let btnfrase = document.getElementById("btnFrase");
    if(frase.style.visibility == "hidden"){
        frase.style.visibility = "visible";
        btnfrase.innerText="Esconder Frase"; 
    } else {
        frase.style.visibility = "hidden";
        btnfrase.innerText="Mostrar Frase" 
    }
    
    /*if(frase.style.display == "none"){
        frase.style.display = "inline"; 
    } else {
        frase.style.display = "none"; 
    }*/
}


let tam=16
function tamanho(value,alin){
    let texto = document.getElementById("texto_ex45")
    tam+=value
    texto.style.fontSize= tam+"px"
    texto.style.textAlign= alin
}

function original(){
    let texto = document.getElementById("texto_ex45")
    texto.style.fontSize= "16px";
    texto.style.textAlign= "left";
}

/*function tamanho(tamanho){
    let texto = document.getElementById("texto_ex45")
    if (tamanho=='aumentar'){
        tam+=2;
        texto.style.fontSize= tam+"px";
        texto.style.textAlign= "center";
    }
    else
        if (tamanho=='diminuir'&&tam>0){
            tam-=2;
            texto.style.fontSize= tam+"px";
            texto.style.textAlign= "right";
        }
        else
            if (tamanho=='original'){
                texto.style.fontSize= "16px";
                texto.style.textAlign= "left";
            }
}*/




/*
let tamanho=16

function aumentar(){
    let texto = document.getElementById("texto_ex45")
    texto.style.fontSize= "30px";
    texto.style.textAlign= "center";
}

function aumentar2(){
    let texto = document.getElementById("texto_ex45")
    texto.style.fontSize= "30px";
    texto.style.textAlign= "center";
}

function diminuir(){
    let texto = document.getElementById("texto_ex45")
    texto.style.fontSize= "7px";
    texto.style.textAlign= "right";
}

function original(){
    let texto = document.getElementById("texto_ex45")
    texto.style.fontSize= "16px";
    texto.style.textAlign= "left";
}*/
