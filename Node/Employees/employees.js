const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chinese = e => e.country === 'China';
const female = e => e.gender === 'F';
const lowestSalary = (employee, currentEmployee) => {
    return employee.salary < currentEmployee.salary ? employee : currentEmployee;
}

axios.get(url).then(response => {
    const employees = response.data;
    console.log(employees);

    const employee = employees
        .filter(chinese)
        .filter(female)
        .reduce(lowestSalary);

    console.log(employee);  
})