// função recursiva -> função que chama a se mesmo


function recursiva(max) {
    console.log(max);
    if(max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);