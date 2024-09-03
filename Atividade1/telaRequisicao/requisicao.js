const fetchRequisicao = () => {
    const url = 'cadastro.html'; // URL do arquivo que você deseja carregar

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Obtém o conteúdo como texto
        })
        .then(html => {
            document.getElementById('conteudo').innerHTML = html; // Insere o HTML carregado na página atual
        })
        .catch(error => {
            console.error('Erro ao buscar o HTML:', error);
        });
};

window.onload = function() {
    // Recupera os dados do localStorage
    const nomeFilme = localStorage.getItem('nome_filme');
    const idFilme = localStorage.getItem('id_filme');
    const dataFilme = localStorage.getItem('data_filme');

    // Atualiza o conteúdo da página com os dados recuperados
    document.getElementById('nome').textContent = 'Nome do filme: ' + (nomeFilme ? nomeFilme : 'Não disponível');
    document.getElementById('id').textContent = 'Id do filme: ' + (idFilme ? idFilme : 'Não disponível');
    document.getElementById('data').textContent = 'Data do filme: ' + (dataFilme ? dataFilme : 'Não disponível');

    // Limpa os dados do localStorage (opcional)
    localStorage.removeItem('nome_filme');
    localStorage.removeItem('id_filme');
    localStorage.removeItem('data_filme');
};
