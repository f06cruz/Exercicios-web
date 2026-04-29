let golosA=0
let golosB=0

function golo(equipa){
    if (equipa=='A'){
        golosA++
        document.getElementById("golosA").innerText = golosA
    }
    else {
        golosB++
        document.getElementById("golosB").innerText = golosB
    }
    
    if (golosA>golosB){
        document.getElementById("resul").innerText = "Ganha a equipa: A"
        document.getElementById("resul").style.backgroundColor='blue'
        document.getElementById("resul").style.color='white'}
    else
        if (golosB>golosA){
            document.getElementById("resul").innerText = "Ganha a equipa: B"
            document.getElementById("resul").style.backgroundColor='red'
            document.getElementById("resul").style.color='white'}
        else{
            document.getElementById("resul").innerText = "Empate"
            document.getElementById("resul").style.backgroundColor='white'
            document.getElementById("resul").style.color='black'
        }

}

