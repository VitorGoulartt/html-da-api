async function buscarendereco() {

    const Link_API = 'https://humble-space-enigma-xgvgpg9grw7f9954-8080.app.github.dev/';

    const pd_form = document.getElementById('pd_form');
    const pd_resultado = document.getElementById('pd_resultado');

    pd_form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const dados = {
            nome: pd_form.nome.value,
            categoria: pd_form.categoria.value,
            descricao: pd_form.descricao.value,
            disponivel: pd_form.disponivel.checked,
            preco: parseFloat(pd_form.preco.value) ,
        };

        try {
            const resposta = await fetch(`${Link_API}api/lanchonete`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            });


            const resultado = await resposta.json();

            pd_resultado.textContent= JSON.stringify(resultado,null,2)
            //pd_resultado.textContent= "Cadastradp com sucesso";

        } catch (err) {
            console.log('Erro:', err);
            pd_resultado.textContent = "Erro ao enviar dados para API"
        }
    });
    async function listarProdutos() {  

        pd
       try{
         const respostas = await fetch(`${Link_API}api/lanchonete`,{
            method: "GET",
            headers: { "Content-Type": "application/json" }
            
         });
            const resultados = await respostas.text();
            pd_resultado.textContent = resultados;

       }catch(err){
        console.log('Erro:', err);
        pd_resultado.textContent = "Erro ao listar dados da API"
       }
       

    } 

    listarProdutos();
}
buscarendereco();