
function adicionarItem(){
    //Adicionados parâmetros com o input.value e ul
    var task = document.querySelector('#nameTaskID').value
    var ul = document.querySelector('#menu')

    criarElementos(task, ul)

    checarTask()
    
}

function removerItem(idLi){
    var ul = document.querySelector('#menu')
    var li = document.getElementById(idLi)
    ul.removeChild(li)
}

function criarElementos(task, ul){
    //Adicionado parâmetro com li, e texto interno com a task
    var li = document.createElement('li')
    li.setAttribute('id', task)

    //Adicionado div do bs
    var divBt = document.createElement('div');
    divBt.classList.add("input-group")
    divBt.classList.add("task")

    //Adicionado input checkbox
    var inCheck = document.createElement('input')
    inCheck.type ='checkbox'
    inCheck.classList.add('input-check') 
    inCheck.setAttribute('onclick', `checarTask()`)

    //Adicionado input text
    var inText = document.createElement('input')
    inText.type ='text'
    inText.readOnly=true;
    inText.value = task
    inText.classList.add('form-control')

    //Adicionado div do button
    var divBtn = document.createElement('div');
    divBtn.classList.add("input-group-append")

    //Adicionado input button
    var inBtn = document.createElement('input')
    inBtn.type ='button'
    inBtn.value = '-'
    inBtn.classList.add('btn')
    inBtn.classList.add('btn-outline-danger')
    inBtn.setAttribute('onclick', `removerItem('${task}')`)
    
    ul.appendChild(li);
    li.appendChild(divBt)

    divBt.appendChild(inCheck)
    divBt.appendChild(inText)
    divBt.appendChild(divBtn)

    divBtn.appendChild(inBtn)
}

function checarTask(){
        let progressbar = document.querySelector('#pctConcluido')
        const checkboxes = document.querySelectorAll('.input-check');
        const totalCheckboxes = checkboxes.length;
        let marcados = 0;

            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    marcados++;
                }
            });

            const porcentagemMarcados = (marcados / totalCheckboxes) * 100;
            console.log(progressbar)
            progressbar.value = porcentagemMarcados.toString()

            const progressBarElement = document.querySelector('.progress-bar');
            progressBarElement.style.setProperty('--progress-angle', `${porcentagemMarcados}%`);

}





