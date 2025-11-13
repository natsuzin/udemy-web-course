// 11) As regras para o cálculo dos anos bissextos são as seguintes: 
// De 4 em 4 anos é ano bissexto; 
// De 100 em 100 anos não é ano bissexto; 
// De 400 em 400 anos é ano bissexto; 
// Prevalecem as últimas regras sobre as primeiras. 
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando  true ou false. 

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
        return true;
    }
    console.log(`${year} is not a leap year.`);
    return false;
}

console.log(isLeapYear(2020)); // 2020 is a leap year. true
console.log(isLeapYear(1900)); // 1900 is not a leap year. false
console.log(isLeapYear(2000)); // 2000 is a leap year. true
console.log(isLeapYear(2021)); // 2021 is not a leap year. false