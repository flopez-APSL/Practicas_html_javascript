var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = 'Si haces click aqui. podrás añadir texto a una lista. Has de confirmar apretando el boton ok.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  var listItem = document.createElement('li');
  var listContent = prompt('¿Qué contenido desea que disponga la siguiente lista?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Introduzca un elemento para añadir a a la lista por favor.. ');
    this.textContent = listContent;
  }
}
