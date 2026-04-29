function validar(event){
    let nome = document.getElementById("form-nome").value
    let password = document.getElementById("form-password").value
    let confirmar = document.getElementById("form-confirmar").value

     // para poder usar testar o button type="submit" sem  submissão por default
    event.preventDefault()
    
    // Regras de Validação
    if(nome.length<3){
        alert("Nome: mínimo 3 caracteres")
        return false}
    if (password.length<6){
            alert("Password: mínimo 6 caracteres")
            return false}
    if (password!=confirmar){
            alert("Confirmar password: campo não é igual a Password")
            return false}

    alert("Submetido")

    return true

}