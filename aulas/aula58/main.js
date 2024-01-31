//Manipulando Prototypes

//new Object -> Todas funções contruturas tem um Objecti.prototype
const objA = {
    chaveA: 'A'
    //__proto__: Objecti.prototype
};


//new Object -> Todas funções contruturas tem um Objecti.prototype
const objB = {
    chaveB: 'B'
    //__proto__: ObjA
};

//Setando o prototype de B em A
Object.setPrototypeOf(objB, objA);

