function meuEscopo(){
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');

    const people = []; 

    function eventform(e){
        e.preventDefault();
        const name = form.querySelector('#name');
        const surname = form.querySelector('#surname');
        const weight = form.querySelector('#weight');
        const height = form.querySelector('#height');

        people.push({
            name : name.value,
            surname : surname.value,
            weight : weight.value,
            height : height.value
        });

        
        console.log (people);

        res.innerHTML += `<p>${name.value} ${surname.value} ${weight.value} ${height.value}</p>`
    }
    form.addEventListener('submit', eventform);
}
meuEscopo();