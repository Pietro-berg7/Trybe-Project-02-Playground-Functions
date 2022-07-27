// Desafio 11
function generatePhoneNumber(parametro) {
  let cont = 0;
  if (parametro.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of parametro) {
    for (let i = 0; i <= parametro.length; i += 1) {
      if (index === parametro[i]) {
        cont += 1;
      }
      if (cont >= 3 || index < 0 || index > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    cont = 0;
  }
  return '(' + parametro[0] + parametro[1] + ') ' + parametro[2] + parametro[3] + parametro[4] + parametro[5] + parametro[6] + '-' + parametro[7] + parametro[8] + parametro[9] + parametro[10];
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
