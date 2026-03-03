const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const employees = response.data;
    console.log(employees);
})

const chinese = employee => employee.country === 'China';
const female = employee => employee.gender === 'F';
const lowestSalary = (employee, currentEmployee) => {
    return employee.salary < currentEmployee.salary ? employee : currentEmployee;
}

axios.get(url).then(response => {
    const employees = response.data;
    const employee = employees
        .filter(chinese)
        .filter(female)
        .reduce(lowestSalary);

    console.log(employee);  
})