var miTtulo = document.querySelector('h1');
miTtulo.innerHTML = 'Hello World!!';

document.write('document.write parece ser el equivalente a print en javascript');

var numero = 125
var numero2 = 562

document.write(' Imprimiendo resultados: ',numero * numero2);

var helado = prompt('¿Qué helado desea tomar? ',' ')

if (helado === 'chocolate') {
  alert('Si, tenemos helado de '+helado);

} else {
  alert('Lo siento. No tenemos helado de '+helado);
}

// Eventos. lo equivalente al ActionListener de JAVA. 
document.querySelector('html').onclick = function () {
  alert('No me toques!!')
  
}


function multiplicar(num1, num2) {
  var result = num1 * num2;
  return result;

}

primernumero = prompt('Dame un numero y lo multiplicaré: ','')
segundonumero = prompt('Muy bien. ¿Por cuánto lo multiplicamos? ',''),

  alert('El resultado es: '+multiplicar(primernumero,segundonumero));

