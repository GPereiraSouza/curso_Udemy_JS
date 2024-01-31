const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;

for(p of ps){
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = '#fff';
}

