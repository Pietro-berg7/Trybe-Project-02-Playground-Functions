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
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
