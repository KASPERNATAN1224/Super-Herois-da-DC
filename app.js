function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value;

if (campoPesquisa == "") {
    section.innerHTML = "<p> Nenhum heroi encontrado</p>" 
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = ""
let titulo = "" 
let descricao = ""
let tag = ""

for(let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tag = dado.tag.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)){
        resultados += `<div class="item-resultado">
                <h2>
                    <a href="#" id="batman" target="_blank">${dado.titulo}</a>
                   </h2> 
                   <p class="descricao-meta">${dado.descricao}</p>
                   <a href=${dado.link} target="_blank">mais resultados</a>
            </div>`
    }
    
}
if(!resultados){"<p> Nenhum heroi encontrado</p>"}

section.innerHTML = resultados
}
