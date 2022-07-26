// Desafio 1
function compareTrue(parametro1, parametro2) {
  
  if (parametro1 === true && parametro2 === true) {
    return true;
  } else if(parametro1 === false && parametro2 === false) {
    return false;
  } else {
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {
  
  let area = (base * height) / 2;
  return area;

}

// Desafio 3
function splitSentence(parametro) {
  
  parametro = parametro.split(" ");
  return parametro;

}

// Desafio 4
function concatName(parametro) {
  
  let frase =  parametro[parametro.length - 1] + ', ' + parametro[0];
  return frase;

}

// Desafio 5
function footballPoints(vitorias, empates) {
  
  let pontuacao = (vitorias * 3) + empates;
  return pontuacao;

}

// Desafio 6
function highestCount(parametro) {
  
  let cont = 0;
  let maior = parametro[0];
  for (let i = 1; i < parametro.length; i++) {
    if (parametro[i] > maior) {
      maior = parametro[i];
    }
  }
  for (let i = 0; i < parametro.length; i++) {
    if (parametro[i] === maior) {
      cont++;
    }
  }
  return cont;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  cat1 -= mouse;
  cat2 -= mouse;

  if (cat1 < 0) {
    cat1 *= -1;
  } else if (cat2 < 0) {
    cat2 *= -1;
  }

  if (cat2 < cat1) {
    return 'cat2';
  } else if (cat2 > cat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }

}

// Desafio 8
function fizzBuzz(parametro) {
  
  let array = [];
  for (let i = 0; i < parametro.length; i++) {
    if (parametro[i] % 3 === 0 && parametro[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (parametro[i] % 3 === 0 && parametro[i] % 5 !== 0) {
      array.push('fizz');
    } else if (parametro[i] % 3 !== 0 && parametro[i] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;

}

// Desafio 9
function encode(parametro) {
  
  parametro = parametro.split("");
  for(let i = 0; i < parametro.length; i++) {
    if (parametro[i] === 'a') {
      parametro[i] = '1';
    } else if (parametro[i] === 'e') {
      parametro[i] = '2';
    } else if (parametro[i] === 'i') {
      parametro[i] = '3';
    } else if (parametro[i] === 'o') {
      parametro[i] = '4';
    } else if (parametro[i] === 'u') {
      parametro[i] = '5';
    } 
  }
  parametro = parametro.join("");
  return parametro;
  
  
}
function decode(parametro) {
  
  parametro = parametro.split("");
  for(let i = 0; i < parametro.length; i++) {
    if (parametro[i] === '1') {
      parametro[i] = 'a';
    } else if (parametro[i] === '2') {
      parametro[i] = 'e';
    } else if (parametro[i] === '3') {
      parametro[i] = 'i';
    } else if (parametro[i] === '4') {
      parametro[i] = 'o';
    } else if (parametro[i] === '5') {
      parametro[i] = 'u';
    } 
  }
  parametro = parametro.join("");
  return parametro;
  
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
