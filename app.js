//console.log(dados[2].descrição); --- para achar e exibir o item

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
console.log(section);

let resultados = ""

//para cada dado dentro da lista especifica de dados 
     //for   ()        of dados

for (let dado of dados) {
    section.innerHTML += `
    <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descrição}
            </p>
                <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
`
}

}







