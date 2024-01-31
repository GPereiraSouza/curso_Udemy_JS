function timer(){
    function getTimeSeconds(seconds){
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    
    const timer = document.querySelector('.timer');
    let seconds = 0;
    let clock;
    
    function startTimer(){
        clock = setInterval(() => {
            seconds++;
            timer.innerHTML = getTimeSeconds(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', (e) => {
        const el = e.target;
    
        if(el.classList.contains('zerar')){
         console.log('voce clicou em zerar')   
         clearInterval(clock);
         timer.classList.remove('stop');
         seconds = 0;
         timer.innerHTML = '00:00:00';
        }
        if(el.classList.contains('iniciar')){
            timer.classList.remove('stop');
            clearInterval(clock);
            startTimer();
        }
        if(el.classList.contains('pausar')){
            clearInterval(clock);
            timer.classList.add('stop');
        }
    });
}

timer();