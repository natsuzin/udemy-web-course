// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. 
// Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho.
// Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar 
// os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de 
// pontos e quando fez seu pior jogo. (Número do pior jogo). 
// Obs.: O primeiro jogo não conta como novo recorde do melhor.  
// Exemplo:  
// String: “10 20 20 8 25 3 0 30 1” 
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)

function basketballScores(scoresString) {
    const scores = scoresString.split(' ').map(Number);
    let bestScore = scores[0];
    let worstScore = scores[0];
    let bestCount = 0;
    let worstGame = 1;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > bestScore) {
            bestScore = scores[i];
            bestCount++;
        }
        if (scores[i] < worstScore) {
            worstScore = scores[i];
            worstGame = i + 1; // +1 porque os jogos começam em 1
        }
    }
    return [bestCount, worstGame];
}

console.log(basketballScores("10 20 20 8 25 3 0 30 1")); // [3, 7]
console.log(basketballScores("5 10 15 20 25")); // [4, 1]