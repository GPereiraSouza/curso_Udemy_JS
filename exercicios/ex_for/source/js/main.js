const elementos = [
    {tag: 'p', texto: 'Doidera'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCreate = document.createElement(tag);
    tagCreate.innerText = texto;
    div.appendChild(tagCreate);
}

container.appendChild(div);