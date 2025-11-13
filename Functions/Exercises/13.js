// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. 
// Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 

function checkDayType(dayNumber) {
    switch (dayNumber) {
        case 1:
        case 7:
            console.log('Weekend');
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Weekday');
            break;
        default:
            console.log('Invalid day');
    }
}

checkDayType(1); // Weekend
checkDayType(3); // Weekday
checkDayType(6); // Weekday
checkDayType(7); // Weekend
checkDayType(8); // Invalid day 