//Procurar o Botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click' , cloneField)
//Executar uma ação
function cloneField() {
    //Duplicar os Campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Pegar os Campos. Que Campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //Para cada Campo, Limpar
    fields.forEach(function(field) {
        //Pegar o Field do Momento e Limpar
        field.value = ""
    })
    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
