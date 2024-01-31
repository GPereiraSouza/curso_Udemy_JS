function meuEscopo(){
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');

    function imc(e){
        e.preventDefault();
        
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

         if(!peso.value){
             res.innerHTML = '<p>Peso invalido!</p>'
             return;
         }

         if(!altura.value){
             res.innerHTML = '<p>Altura invalido!</p>'
             return;
         }

        let imc =  peso.value/ (altura.value**2);

        if(imc < 18.5){
            res.innerHTML = `<p>Abaixo do peso</p>`
        } else if(imc >= 18.5 && imc <= 24.9){
            res.innerHTML = `<p>Peso normal</p>`
        } else if(imc >= 25 && imc <= 29.9){
            res.innerHTML = `<p>Sobrepeso</p>`
        } else if(imc >= 30 && imc <= 34.9){
            res.innerHTML = `<p>Obesidade grau 1</p>`
        } else if(imc >= 35 && imc <= 39.9){
            res.innerHTML = `<p>Obesidade grau 2</p>`
        } else if(imc >= 40){
            res.innerHTML = `<p>Obesidade grau 3</p>`
        } else {
            res.innerHTML = '<p>Aconteceu algum erro</p>'
        }  

        console.log(peso.value, altura.value)
    }
    form.addEventListener('submit', imc);

}
meuEscopo();