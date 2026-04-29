
function mudaCor(cor){
    document.body.style.backgroundColor = cor;
}

function cores(){
    let r = Math.random()*255
    let g = Math.random()*255
    let b = Math.random()*255

    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")"
}

function ajuda(frase){
    alert(frase)
}

function alterar(){
    let bt1 = document.getElementById("btn1")
    let bt2 = document.getElementById("btn2")
    let bt3 = document.getElementById("btn3")
    let bt4 = document.getElementById("btn4")
    let bt5 = document.getElementById("btn5")
    let bt6 = document.getElementById("btn6")
    bt1.style.backgroundColor = "grey"
    bt1.disabled = true
    bt2.style.backgroundColor = "grey"
    bt2.disabled = true
    bt3.style.backgroundColor = "grey"
    bt3.disabled = true
    bt4.style.backgroundColor = "grey"
    bt4.disabled = true
    bt5.style.backgroundColor = "grey"
    bt5.disabled = true
    bt6.style.backgroundColor = "grey"
    bt6.disabled = true
}

function msg(){
    let num = Math.random()*100

    if (num<20)
        alert('Não')
    else 
        if (num<40)
             alert('Nope')
    else 
        if (num<60)
            alert('HAHAHA')
    else 
        if (num<80){
            alert('NNNNNNNNNNNNNNNNNNNooooooooooooooooooooo')
            document.getElementById("img").style.display = "block"
        }
    else
        alert('Volta a tentar')
}