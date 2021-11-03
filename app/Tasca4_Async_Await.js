// Tasca 4: Entrega d'exercici: Async / Await

// Nivell 1 Ex 1
/*
Donats els objectes employees i salaries, crea una arrow 
function getEmployee que retorni una Promise efectuant la 
cerca en l'objecte pel seu id. Crea una altra arrow function 
getSalary que rebi com a paràmetre un objecte employee i retorni
 el seu salari.
*/
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];



const getEmployee = id =>{
    return new Promise((resolve, reject) =>{
        const emp = employees.find(emp => emp.id === id);
        resolve(emp);
    })
    }


const getSalary = emp =>{ 
    return new Promise((resolve, reject) =>{
        const sal = salaries.find(sal => sal.id === emp.id);
        const Salary = sal.salary;
        resolve(Salary);
})
}


// Nivell 1 Ex 2
/*
Crea una funció asíncrona que rebi un id d'empleat i
imprimeixi per pantalla el nom de l'empleat i el seu salari, 
usant les funcions que has definit a l'exercici anterior.
*/

async function getNameAndSalary (id){
    const empl = await getEmployee(id);
    const salari = await getSalary(empl);
    console.log(empl.name, salari);
}



// Nivell 2 Ex 1
/*
Crea una nova funció asíncrona que cridi a una altra que retorni 
una Promise que efectuï la seva funció resolve() després de 
2 segons de la seva invocació.
*/


let promFun = () => {
    new Promise((resolve, reject) =>{ 
        setTimeout(() => resolve(console.log('Promesa resolta')), 2000);
    })
}

async function asynFun(){
    await promFun();
}



// Nivell 3 Ex 1
/*
Captura tots els errors possibles dels nivells 1 i 2.
*/

async function getNameAndSalary_catch (id){
    try{
        const empl = await getEmployee(id);
        const salari = await getSalary(empl);
        console.log(empl.name, salari);
    } catch(err){
        console.log(err.message);
}}


async function asynFun_catch(){
    try{
        await promFun();
    } catch(err) {
        console.log(err.message);
    }
}


let fun = () => console.log('Hello World');


module.exports = {};
module.exports.employee = getEmployee;
module.exports.salary = getSalary;
module.exports.asynFun = asynFun;
module.exports.fun=fun;
module.exports.getNameAndSalary =  getNameAndSalary_catch;