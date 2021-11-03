//NIVELL 1
const sum = require('../app/calculadora').sum;
const mult = require('../app/calculadora').multiply;
const subs = require('../app/calculadora').subtract;
const div = require('../app/calculadora').divide;


describe("Testeja la correcta execució de les funcions per sumar, restar, multiplicar i dividir dos o més operands", () => {
  test('test adding function', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 2,5,8)).toBeGreaterThan(0);
    expect(sum(-1, 2.7)).not.toBeNull();
  });

  test('test multiply function', () => {
    expect(mult(1, 2)).toBe(2);
    expect(mult(1, -2,5,8)).toBeLessThan(0);
    expect(mult(-1.5, 0)).not.toBeNull();
  });

  test('test substract function', () => {
    expect(subs(1, 2)).toBe(-1);
    expect(subs(-1.6, 0)).not.toBeNull();
    expect(subs(1, -2,5,8)).toBeLessThan(0);
  });

  test('test divide function', () => {
    expect(div(1, 2)).toBe(0.5);
    expect(div(1, -2,5,8)).toBeLessThan(0);
    expect(div(-1.2, 0)).not.toBeNull();
    expect(div(0, 0)).not.toBeNull();
  });
});

 const asaw = require('../app/Tasca4_Async_Await');
 const getEmp = asaw.employee;
 const getSal = asaw.salary;

 describe("Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1 ", () => {

  test('gets employee with id 1', () => {
    return getEmp(1).then(data => {
      expect(data).not.toBeNull();
      expect(data.name).toContain('Linux');
    });
  });

  test('gets Salary of Bill Gates', () => {
    return getSal({id: 2, name: 'Bill Gates'}).then(data => {
      expect(data).toBe(1000);
    });
  });
 });

 
 
 const asynFun = asaw.asynFun;
 describe("Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1", () => {
  console.log = jest.fn();
  test("Verify asynFun", () => {
    asynFun().then( data => {
    expect(data).toBeUndefined();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenLastCalledWith('Promesa resolta');
    });      
  })
})


describe(" Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3", () => {
  test("test nesting employee and salary", () => {
    getEmp(1).then(res => getSal(res).then(r=> {
        expect(r).toBe(4000);
        expect(res).toHaveProperty('name');
        expect(res).toMatchObject({id:1,name:"Linux Torvalds"});
      })) 
  });
});


describe("Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  test('test settimeout', async() => {
  await asynFun();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});
});


//NIVELL 2

describe("Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2", () => {
  const Persona = require("../app/Persona");
  jest.mock("../app/Persona", function () {
    const { default: mockRealPerson } = jest.requireActual('../app/Persona');
    return mockRealPerson;
  });
  it('test mock de persona', () => {
    jest.spyOn(Persona.prototype, 'dirNom');
    const persona = new Persona('Aina')
    persona.dirNom()
    expect(Persona.prototype.dirNom).toBeCalled();
    expect(Persona.prototype.dirNom).toHaveBeenCalledTimes(1);
    expect(persona.nom).toEqual('Aina');
  });
});


const ObjCreator =  require('../app/Tasca2_Classes_Arrow_Functions').ObjCreator;

describe("Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.", () => {
test('Testing the function ObjCreator', () => {
  let z = ObjCreator(1,2);
  expect(z.x).toEqual(1);
  expect(z.y).toEqual(2);
});
});



//NIVELL 3

describe("Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.", () => {
  let getEmp2 = require('../app/Tasca4_Async_Await_withJSON').employee;
  let getSal2 = require('../app/Tasca4_Async_Await_withJSON').salary;  
  
  jest.mock('../app/data.json', () => {return {
    employees: [
      { id: 1, name: 'James Bond' },
      { id: 2, name: 'Inspector Gadget' },
      { id: 3, name: 'Conan' }
    ],  salaries: [
      { id: 1, salary: 5000 },
      { id: 2, salary: 900 },
      { id: 3, salary: 2500 }
    ]
  }});

  it('gets employee with id 1', () => {
    return getEmp2(1).then(data => {
      expect(data).not.toBeNull();
      expect(data.name).toContain('James');
    });
  });

  it('gets Salary of Bill Gates', () => {
    return getSal2({id: 2, name: 'Ispector Gadget'}).then(data => {
      expect(data).toBe(900);
    });
  });
});


describe("Utilitzant com a base l'exercici Async / Await Nivells 2 i 3, crea un test que forci errors de funcionament i verifiqui que l'error llançat per la funció és l'esperat.", () => {
  let getns = asaw.getNameAndSalary ;
  test('gets employee with id 10', () => {
      return getns(10).catch(e => expect(e).toThrow("Cannot read property 'id' of undefined"));
    });
});
