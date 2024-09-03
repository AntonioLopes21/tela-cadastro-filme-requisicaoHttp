function receberNomeFilme() {
    var nomeFilme = document.querySelector("input[name='nome_do_filme']").value;
    console.log("Nome do filme: " + nomeFilme);
}   

function receberIdFilme() {
    var idFilme = document.querySelector("input[name='id_do_filme']").value;
    console.log("ID do filme: " + idFilme);
}

function receberDataFilme() {
    var dataFilme = document.querySelector("input[name='data_filme']").value;
    console.log("Data do filme: " + dataFilme);
}

function cadastrarDados() {
    var nomeFilme = document.querySelector("input[name='nome_do_filme']").value;
    var idFilme = document.querySelector("input[name='id_do_filme']").value;
    var dataFilme = document.querySelector("input[name='data_filme']").value;

    if (nomeFilme && idFilme && dataFilme) {
        // Armazena os dados no localStorage
        localStorage.setItem('nome_filme', nomeFilme);
        localStorage.setItem('id_filme', idFilme);
        localStorage.setItem('data_filme', dataFilme);

        
        // Redireciona para a página de dados cadastrados
        window.location.href = '../telaRequisicao/requisicao.html';
        alert('dados cadastrados com sucesso')
    } else {
        alert("Por favor, preencha todos os campos.");
        alert("Dados cadastrados com sucesso!")

    alert("Por favor, preencha todos os campos.")
    }
}


// function formatarData(data) {
//     const partes = data.split('-');
//     const ano = partes[3];
//     const mes = partes[2];
//     const dia = partes[1];
    
//     return `${dia}/${mes}/${ano}`;
// }



//isso aqui é uma requisição:
/*
function cadastrarDados() {
    var nomeFilme = nome_filme.value;
    var idFilme = id_filme.value;
    var dataFilme = data_filme.value;

    // Enviar dados para o servidor
    fetch('https://example.com/api/filmes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nomeFilme,
            id: idFilme,
            data: dataFilme
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        // Atualizar a área com dados recebidos
        document.querySelector("#segunda-caixa .dados").innerHTML = `
            <h4>Nome do filme: ${nomeFilme}</h4> 
            <h4>Id do filme: ${idFilme}</h4>
            <h4>data do filme: ${dataFilme}</h4> `;
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}
*/