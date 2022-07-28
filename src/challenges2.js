// Desafio 11
function generatePhoneNumber(number) {
  let count = 0;
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < number.length; i += 1) {
    for (let j = 0; j <= number.length; j += 1) {
      if (number[i] === number[j]) {
        count += 1;
      }
      if (count >= 3 || number[i] < 0 || number[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    count = 0;
  }
  let resultado = ['(', number[0], number[1], ') ', number[2], number[3], number[4], number[5], number[6], '-', number[7], number[8], number[9], number[10]];
  return resultado.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let valor;
  if ( lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineC - lineC) && lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    valor = true;
  } else if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineB + lineA) {
    valor = false;
  } else if (lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineC - lineC) || lineC > Math.abs(lineB - lineA)) {
    valor = false;
  }
  return valor;
}

// Desafio 13
function hydrate(parametro) {
  let valor;
  let numeros = parametro.replace(/[^0-9]/g, '');
  let total = 0;
  numeros = numeros.split('');
  let arrayNumeros = [];
  const string1 = ' copo de água';
  const string2 = ' copos de água';

  for (let i = 0; i < numeros.length; i += 1) {
    arrayNumeros.push(parseInt(numeros[i]));
  }
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    total += arrayNumeros[i];
  }

  if (total === 1) {
    valor = total + string1;
  } else {
    valor = total + string2;
  }
  return valor;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
