// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. 

function compareGrowth(height1, rate1, height2, rate2) {
    if (height1 === height2) {
        if (rate1 === rate2) {
            console.log('As crianças possuem a mesma altura e apresentam a mesma taxa');
            return;
        } else if (rate1 > rate2) {
            console.log('A criança 1 ultrapassará a criança 2 em 1 ano');
        } else {
            console.log('A criança 2 ultrapassará a criança 1 em 1 ano');
        }
    } else if(height1 > height2) {
        if(rate1 >= rate2) {
            console.log('A criança 1 sempre será maior que a criança 2');
        } else {
            let years = 0;
            while(height1 <= height2) {
                height1 += rate1;
                height2 += rate2;
                years++;
            }
            console.log('A criança 2 ultrapassará a criança 1 em ' + years + ' anos');
        }
    } else {
    if (rate2 >= rate1) {
      console.log("A criança 2 sempre será maior que a criança 1");
    } else {
      let years = 0;
      while (height1 <= height2) {
        height1 += rate1;
        height2 += rate2;
        years++;
      }
      console.log('A criança 1 ultrapassará a criança 2 em ' + years + ' anos');
    }
  }
}

compareGrowth(120, 5, 150, 2);
compareGrowth(140, 3, 140, 3);