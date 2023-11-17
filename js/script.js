let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")
let sizePassword  = document.querySelector("#valor")
let password      = document.querySelector("#password")
let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$%&"
let novasenha = ""

sizePassword.innerHTML = sliderElement.value  // mostrando os numeros no "tamanho..caracteres"

slider.oninput = function()
{
    sizePassword.innerHTML = this.value // para mostrar o valor atual do slider
}

function generatePassword()
{
    let pass = ""

    for(let i = 0, n = charset.length; i < sliderElement.value; i++)
    {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    novasenha = pass

}

function copyPassword()
{
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novasenha)
}