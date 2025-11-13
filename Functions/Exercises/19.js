// 19) O cardápio de uma lanchonete é o seguinte: 
//     Código   Descrição do Produto   Preço 
//     100      Cachorro Quente        R$ 3,00 
//     200      Hambúrguer Simples     R$ 4,00 
//     300      Cheeseburguer          R$ 5,50 
//     400      Bauru                  R$ 7,50 
//     500      Refrigerante           R$ 3,50 
//     600      Suco                   R$ 2,80 
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item.
// Use o comando switch. Crie um caso default para produto não existente.

function calculatePrice(itemCode, quant) {
    let price;

    switch (itemCode) {
        case 100:
            price = 3.00;
            break;
        case 200:
            price = 4.00;
            break;
        case 300:
            price = 5.50;
            break;
        case 400:
            price = 7.50;
            break;
        case 500:
            price = 3.50;
            break;
        case 600:
            price = 2.80;
            break;
        default:
            return 'Produto não existente.';
    }
    return `Total a pagar: R$ ${(price * quant).toFixed(2)}`;
}

console.log(calculatePrice(100, 2)); // Total a pagar: R$ 6.00
console.log(calculatePrice(300, 1)); // Total a pagar: R$ 5.50
console.log(calculatePrice(500, 3)); // Total a pagar: R$ 10.50
console.log(calculatePrice(700, 1)); // Produto não existente.