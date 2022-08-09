// Como podemos rodar isso em um arquivo .ts sem causar erros?

/* let employee = {}
    employee.code = 10;
    employee.name = "John"*/

const employee = {
    code: 10,
    name: 'John'
}

//Ou

const employee2: {code: Number, name: string} = {
    code: 10,
    name: 'John'
}

//Ou

interface Employee {
    code: number,
    name: string
};
