
var xmlhttp = new XMLHttpRequest(); 
var url = "pessoas.json"; 
xmlhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
        var myArr = JSON.parse(this.responseText); 
        console.log(myArr); 
        let nome_cuso=myArr["nome"]
        document.getElementById("nome_curso").innerHTML =nome_curso
        for(letx=0;i<myArr["formandos"].length;x++){
            lista += "<li>" + myArr["formandos"][x]["nome"]+</li>
        }
        document.getElementById("nformandos").innerHTML="nome"
    
    } 
}; 
xmlhttp.open("GET", url, true); 
xmlhttp.send();