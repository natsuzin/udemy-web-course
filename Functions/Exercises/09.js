// 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de 
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas 
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor 
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum 
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou 
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 
// e o aluno será aprovado.

function gradesSystem(grade) {
    if (grade < 38) {
        return `Student grade: ${grade}. Result: Failed`;
    }
    
    const nextMultipleOf5 = Math.ceil(grade / 5) * 5; // Calculate the next multiple of 5
    const difference = nextMultipleOf5 - grade; // Calculate the difference 
    
    if (difference >= 3) { 
        return `Student grade: ${grade}. Result: Passed`;
    }

    return `Student grade: ${nextMultipleOf5}. Result: Passed`;
}

// Test cases
console.log(gradesSystem(84)); // Student grade: 85. Result: Passed
console.log(gradesSystem(29)); // Student grade: 29. Result: Failed
console.log(gradesSystem(38)); // Student grade: 40. Result: Passed
console.log(gradesSystem(57)); // Student grade: 57. Result: Passed
console.log(gradesSystem(73)); // Student grade: 75. Result: Passed