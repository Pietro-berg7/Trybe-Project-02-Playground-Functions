// Desafio 1
function compareTrue(parametro1, parametro2) {
  let valor;
  if (parametro1 && parametro2) {
    valor = true;
  } else {
    valor = false;
  }
  return valor;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(parametro) {
  parametro = parametro.split(' ');
  return parametro;
}

// Desafio 4
function concatName(parametro) {
  let string = ', ';
  let frase = parametro[parametro.length - 1] + string + parametro[0];
  return frase;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  let pontuacao = vitorias * 3 + empates;
  return pontuacao;
}

// Desafio 6
function highestCount(parametro) {
  let cont = 0;
  parametro.sort((a, b) => a - b);
  for (let i = 0; i < parametro.length; i += 1) {
    if (parametro[i] === parametro[parametro.length - 1]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 -= mouse;
  cat2 -= mouse;
  cat1 = Math.abs(cat1);
  cat2 = Math.abs(cat2);
  let valor;
  if (cat2 < cat1) {
    valor = 'cat2';
  } else if (cat2 > cat1) {
    valor = 'cat1';
  } else {
    valor = 'os gatos trombam e o rato foge';
  }
  return valor;
}

// Desafio 8
function fizzBuzz(parametro) {
  let array = [];
  for (let index of parametro) {
    if (index % 3 === 0 && index % 5 === 0) {
      array.push('fizzBuzz');
    } else if (index % 3 === 0) {
      array.push('fizz');
    } else if (index % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(parametro) {
  parametro = parametro.replaceAll('a', '1');
  parametro = parametro.replaceAll('e', '2');
  parametro = parametro.replaceAll('i', '3');
  parametro = parametro.replaceAll('o', '4');
  parametro = parametro.replaceAll('u', '5');
  return parametro;
}

function decode(parametro) {
  parametro = parametro.replaceAll('1', 'a');
  parametro = parametro.replaceAll('2', 'e');
  parametro = parametro.replaceAll('3', 'i');
  parametro = parametro.replaceAll('4', 'o');
  parametro = parametro.replaceAll('5', 'u');
  return parametro;
}

// Desafio 10
function techList(array, string) {
  let Object = {};
  let arrayObject = [];
  array.sort();

  let valor;
  if (array.length === 0) {
    valor = 'Vazio!';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      Object = {
        tech: array[i],
        name: string,
      };
      arrayObject.push(Object);
    }
    valor = arrayObject;
  }
  return valor;
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
