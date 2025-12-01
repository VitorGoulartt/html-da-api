async function cadastrarProduto() {
    
    const Link_API = 'https://humble-space-enigma-xgvgpg9grw7f9954-8080.app.github.dev/';
    
    const pd_form = document.getElementById('pd_form');
    const pd_resultado = document.getElementById('pd_resultado');

    pd_form.addEventListener("submit", async (e) => {
        e.preventDefault(); 
        
        const dados = {
            nome: pd_form.nome.value,
            categoria: pd_form.categoria.value,
            preco: parseFloat(pd_form.preco.value),
            disponivel: pd_form.disponivel.checked,
        };

        try {
            const resposta = await fetch(`${Link_API}api/produtos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados) 
            });

            const resultado = await resposta.json();

            pd_resultado.textContent = JSON.stringify(resultado, null, 2);

        } catch (err) {
            console.error("Erro:", err);
            pd_resultado.textContent = "Erro ao enviar dados para API. Verifique a URL ou a conexão.";
        }
    });
}

cadastrarProduto();