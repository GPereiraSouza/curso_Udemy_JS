function lista(){
    const inputTarefa = document.querySelector('#input-tarefa');
    const btnTarefa = document.querySelector('#btn-tarefa');
    const newTarefa = document.querySelector('.tarefas');

    function criaLi(){
        const li = document.createElement('li');
        return li;
    }

    inputTarefa.addEventListener('keypress',(e) => {
        if(e.keyCode === 13){
            if(!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
            clearInput();
        }
    });

    function clearInput(){
        inputTarefa.value = '';
        inputTarefa.focus(); 
    }

    function criaBtnApagar(li){
        li.innerHTML += ' ';
        const btnApagar = document.createElement('button');
        btnApagar.innerText = 'Apagar';
        btnApagar.setAttribute('class', 'apagar')
        li.appendChild(btnApagar);
    }

    function criaTarefa(textoInput) { 
        const li = criaLi();
        li.innerHTML = textoInput;
        newTarefa.appendChild(li);
        criaBtnApagar(li);
        salvarTarefas();
    }

    btnTarefa.addEventListener('click', (e) =>{
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        clearInput();
    });

    document.addEventListener('click', (e) => {
        const el = e.target;
        
        if(el.classList.contains('apagar')){
            el.parentElement.remove();
            salvarTarefas();
        }
    });

    function salvarTarefas(){
        const liTarefas = newTarefa.querySelectorAll('li');
        const listaDeTarefas = [];
        
        for (let tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }

    function addTarefasSalvas(){
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);

        for(let tarefa of listaDeTarefas){
            criaTarefa(tarefa);
        }
    }
    
    addTarefasSalvas()
}

lista();
