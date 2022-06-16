function mostrar_cadastro() {
    alert("Livro cadastrado com sucesso!")
    let nome = document.querySelector('#nome').value;
    let autor = document.querySelector('#autor').value;
    let paginas = document.querySelector('#paginas').value;
    let genero = document.querySelector('#genero').value;
    let livro = {
        nome: nome,
        autor: autor,
        paginas: paginas,
        genero: genero
    };
    return livro

}


function ver_lista(livros) {
    let mensagem = '';
    let id = 0;
    let tbody = document.querySelector('#tbody');
    for (let livro of livros) {
        let linha = document.createElement('tr')
        let coluna = document.createElement('td')
        let coluna2 = document.createElement('td')
        let coluna3 = document.createElement('td')
        let coluna4 = document.createElement('td')
        let coluna5 = document.createElement('td')
        let botao1 = document.createElement("button"); let botao2 = document.createElement("button");
        coluna.innerText = id
        coluna2.innerText = livro.nome
        coluna3.innerText = livro.autor
        coluna4.innerText = livro.paginas
        coluna5.innerText = livro.genero
        botao1.innerHTML = ("Editar"); botao2.innerHTML = ("Apagar");
        linha.appendChild(coluna)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        linha.appendChild(coluna5)
        linha.appendChild(botao1); linha.appendChild(botao2)
        tbody.appendChild(linha)
        id++ ;
    }
}