const corpoTabela = document.getElementById("corpoTabela")
const formulario =  document.getElementById("formulario")

const profis = [
    {nome:"teste", profissao:"ENGENHEIRO"},
    {nome:"teste2", profissao:"ADVOGADO"},
    {nome:"teste3", profissao:"MÉDICO"},
]

function exibir (){
    corpoTabela.innerHTML = ""
    
    for (profi of profis){
        corpoTabela.innerHTML +=`
            <tr>
                <td>${profi.nome}</td>
                <td>${profi.profissao}</td>
            </tr>
        `
    }
}

exibir()

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const valorNome = document.getElementById("campoNome").value
    const valorProf = document.getElementById("campoProf").value

    const x = {nome:valorNome, profissao:valorProf}

    profis.push(x)

    exibir()

})
