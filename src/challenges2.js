// Desafio 11
function generatePhoneNumber(parametro) {

  let cont = 0;
  if (parametro.length !== 11){
    return 'Array com tamanho incorreto.';
  } else if(parametro.length === 11){
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] > 9 || parametro[i] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 0) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
    cont = 0;
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 1) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    }
    cont = 0;
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 2) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
    cont = 0;
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 3) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
    cont = 0;
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 4) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
    cont = 0;
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 5) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
    cont = 0;
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 6) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
    cont = 0;
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 7) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
    cont = 0;
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 8) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
    cont = 0;
    for(let i = 0; i < parametro.length; i++){
      if (parametro[i] === 9) {
        cont++;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } 
    } 
  } 

  if (parametro.length === 11) {
    let numero = '(' + parametro[0] + parametro[1] + ') ' + parametro[2] + parametro[3] + parametro[4] + parametro[5] + parametro[6] + '-' + parametro[7] + parametro[8] + parametro[9] + parametro[10];
    return numero;
  }

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC  ) {
  
  if ((lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) && (lineB < (lineA + lineC) && lineB > Math.abs(lineC - lineC)) && (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA))) {
    return true;
  } else if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineA)) {
    return false;
  } else if (lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineC - lineC) || lineC > Math.abs(lineB - lineA)) {
              return false;
             }

}

// Desafio 13
function hydrate(parametro) {
  
  let numeros = parametro.replace(/[^0-9]/g,'');
  let total = 0;
  numeros = numeros.split('');
  let arrayNumeros = [];
  
  for (let i = 0; i < numeros.length; i++) {
    arrayNumeros.push(parseInt(numeros[i]));
  }
  for (let i = 0; i < arrayNumeros.length; i++) {
    total += arrayNumeros[i];
  }
  
  if (total === 1) {
    return total + ' copo de água';
  } else {
    return total + ' copos de água';
  }

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
