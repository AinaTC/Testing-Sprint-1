// Tasca 2: Entrega d'exercici: Classes & Arrow Functions

// Nivell 1 Ex 1
/* Mostra per la consola el resultat d'una arrow function autoinvocable 
que sumi dos nombres. */

console.log(((Num1, Num2) => Num1+Num2)(3,2));


// Nivell 2 Ex 1
/* Crea una arrow function que, rebent un paràmetre, retorni un
 objecte amb un atribut que tingui com a valor el paràmetre rebut. */

 let p = par => obj = {atr:par};
 
// Nivell 2 Ex 2
/* Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada.
 La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 
 'nom'. Invoca el mètode dirNom des de fora de la classe. */

 export class Persona {
    constructor(nom){
        this.nom = nom;
    };
    dirNom(){console.log(this.nom);};
};



// Nivell 3 Ex 1
/*Escriu una function creadora d'objectes que faci instàncies
 d'una classe abstracta. Invoca-la amb diferents definicions. */

export class AbstractClass {
    constructor(x) {
        this.x = x;
        if(this.constructor === AbstractClass){
            throw new TypeError('Abstract class cannot be instantiated directly');
        }
    }
}

export class SubClass extends AbstractClass {
    constructor(x, y) {
        super(x);
        this.y = y;
    }
};
 
 const ObjCreator = (x,y) => new SubClass(x,y);


 //new AbstractClass(1); // throws error
 module.exports ={}
 module.exports.ObjCreator = ObjCreator;
 //module.exports.Persona = Persona;