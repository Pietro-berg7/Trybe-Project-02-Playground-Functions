// Desafio 11
function generatePhoneNumber(n) {
  let count = 0;
  if (n.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < n.length; i += 1) {
    for (let j = 0; j <= n.length; j += 1) {
      if (n[i] === n[j]) {
        count += 1;
      }
      if (count >= 3 || n[i] < 0 || n[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    count = 0;
  }
  let result = ['(', n[0], n[1], ') ', n[2], n[3], n[4], n[5], n[6], '-', n[7], n[8], n[9], n[10]];
  return result.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let valor;
  let ab = lineA - lineB;
  let bc = lineB - lineC;
  let ac = lineA - lineC;
  let abs = lineA + lineB;
  let bcs = lineB + lineC;
  let acs = lineA + lineC;
  if (lineA < bcs && lineA > Math.abs(bc)
    && lineB < acs && lineB > Math.abs(ac)
    && lineC < abs && lineC > Math.abs(ab)) {
    valor = true;
  } else if (lineA > bcs || lineB > acs || lineC > abs) {
    valor = false;
  } else if (lineA > Math.abs(bc) || lineB > Math.abs(ac) || lineC > Math.abs(ab)) {
    valor = false;
  }
  return valor;
}

// Desafio 13
function hydrate(parametro) {
  let valor;
  let numeros = parametro.replace(/[^0-9]/g, '').split('');
  let total = 0;
  let arrayNumeros = [];
  const string1 = ' copo de água';
  const string2 = ' copos de água';
  for (let i = 0; i < numeros.length; i += 1) {
    arrayNumeros.push(parseInt(numeros[i], 10));
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
