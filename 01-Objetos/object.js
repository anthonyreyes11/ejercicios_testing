// test objetos
function setPropsOnObj(obj) {
  obj.p = 5
  obj.plataforma = 5
  obj.proximo = function (number) {
    return number + 1
  }
  obj.la = {
    clave: {
      secreta: {
        es: 404
      }
    }
  }
}

// test arreglos
function setPropsOnArr(array) {
  array['hola'] = () => {
    return "Hola!";
  }
  array['river'] = 'plate';

  array[0] = 5;

  array['doble'] = num => {
    return num * 2;
  }
}

//test funciones
funtionobjet = function () {
  return 'Soy una función con propiedades!';
};

function setPropsOnFunc(funtionobjet) {
  funtionobjet['year'] = '2017';
  funtionobjet['mitad'] = num => {
    return num / 2
  }
  funtionobjet.prototype.helloWorld = function () {
    return 'Hello World'
  }
}