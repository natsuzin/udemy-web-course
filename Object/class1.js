class Launch {
    constructor(name = 'Generic Launch', value = 0) {
        this.name = name;
        this.value = value;
    }
}

class FinancialCycle {
    constructor(month, year) {
        this.month = month;
        this.year = year;
        this.launches = [];
    }

    // rest parameter: allows us to pass an indefinite number of arguments as an array
    addLaunch(...launches) { 
        launches.forEach( l => this.launches.push(l) ); // forEach: iterates over each element of the array and executes a provided function once for each element
    }

    summary() {
        let valueConsolidated = 0;
        this.launches.forEach( l => valueConsolidated += l.value );
        return valueConsolidated;
    }
}

const salary = new Launch('Salary', 5000);
const electricity = new Launch('Electricity Bill', -150);
const water = new Launch('Water Bill', -100);

const cycle = new FinancialCycle(6, 2024);
cycle.addLaunch(salary, electricity, water);
console.log(cycle.summary())