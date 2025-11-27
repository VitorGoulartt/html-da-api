async function buscarEndereco(){
    const cep = document.getElementById('cep').value;

    if(!cep){
        alert('Digitar um CEP válido');
    }

    try{
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json(); //converter a resposta em JSON

        document.getElementById('dados_logradouro').textContent = dados.logradouro;
        document.getElementById('dados_logradouro').textContent = dados.logradouro;
    }
    catch(err){
        console.log('Erro', err);
        document.getElementById('dados').textContent = 'Erro ao buscar o CEP \nTente novamente mais tarde.';
    }
}