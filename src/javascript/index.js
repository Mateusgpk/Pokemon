const botaoalterartema = document.getElementById("botao-alterar-tema");
console.log(botaoalterartema)
const body = document.querySelector("body");
console.log(body);
const imagebotaotrocatema = document.querySelector(".imagem-botao")
botaoalterartema.addEventListener("click", () => {
    
    const modoescuro = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");
    
    if (modoescuro) {
        imagebotaotrocatema.setAttribute("src", "./src/images/sun.png")
}
    else
{
        imagebotaotrocatema.setAttribute("src", "./src/images/moon.png")
}
});
