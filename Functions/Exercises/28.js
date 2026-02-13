// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i=0; i < numbers.lenght; i++) {
        if (numbers[i] %2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log('Números pares: ' + evenCount);
    console.log('Números ímpares: ' + oddCount);
}

const sampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
countEvenOdd(sampleNumbers);
