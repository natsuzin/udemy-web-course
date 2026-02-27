class GrandFather {
    constructor(surname) {
        this.surname = surname;
    }
}

class Father extends GrandFather {
    constructor(surname, profession = 'Teacher') {
        super(surname);
        this.profession = profession;
    }
}

class Son extends Father {
    constructor() {
        super('Smith');
    }
}

const son = new Son();
console.log(son);
console.log(son.surname); // Smith