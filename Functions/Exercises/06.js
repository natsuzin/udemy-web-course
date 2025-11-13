// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
// A primeira função retornará o montante da aplicação financeira sob o regime de juros simples
// e a segunda retornará o valor da aplicação sob o regime de juros compostos. 

function simpleInretest(capital, rate, time) {
    return capital + (capital * rate * time);
}

function compoundInterest(capital, rate, time) {
    return capital * (1 + rate) ** time;
}

console.log(simpleInretest(1000, 0.05, 5)); // 1250
console.log(compoundInterest(1000, 0.05, 5)); // 1276.2815625000003