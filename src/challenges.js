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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
