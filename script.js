function mostrarNome(){
    const valor = document.getElementById("mostrar-nome").value;
    const preco = document.getElementById("mostrar-preco").value;
    const categoria = document.getElementById("mostrar-categoria").value;
    document.getElementById("onde-estou-mostrando").innerText = valor + ", R$" + preco + ", " + categoria;

}