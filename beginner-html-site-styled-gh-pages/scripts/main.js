var myImage = document.querySelector('img');


//------------------------------------------CAMBIA LA IMAGEN------------------------------------------------

myImage.onclick = function () {

  var mySrc = myImage.getAttribute('src');

  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }

}


//-------------------------------------------CAMBIO DE MENSAJE DE BIENVENIDA-----------------------------------


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


  function setUserName() {

    var myName = prompt('Please, enter your name: ');
    // localStorage permite almacenar datos en el navegador y recuperarlos luego.
    localStorage.setItem('name', myName);
    myHeading.textContent = 'APSL is cool with, '+ myName;

  }


if(!localStorage.getItem('name')) {

  setUserName();

} else {
  var storedName = localStorage.getItem('name');

  myHeading.textContent = 'APSL is more cool with, ' + storedName;
}


myButton.onclick = function () {
    setUserName();

  }


