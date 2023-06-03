var botonuno = document.getElementById ('botonuno');
var botondos = document.getElementById ('botondos');
var resultado = document.getElementById ('resultado');
var titulo = document.getElementById ('titulo');
var textuno = document.getElementById ('textuno');
var textdos = document.getElementById ('textdos');
var body = document.getElementById ('body');
botonuno.onclick = function (){
    resultado.textContent = alert = "Seleccionó estilo número uno";
    titulo.style.backgroundColor = 'coral';
    titulo.style.color = 'black' ;
    resultado.style.fontFamily = 'Arial';

    textuno.style.fontSize = '20px';
    textuno.style.marginLeft = '0px';
    textuno.style.backgroundColor = 'rgb(214, 144, 95)';
    textuno.style.fontFamily = 'Raleway';
    textuno.style.marginBottom = '0%';
    textuno.style.marginRight = '30%';
    textuno.style.color = 'white';

    textdos.style.backgroundColor = 'rgb(247, 131, 131)';
    textdos.style.fontSize = '15px';
    textdos.style.fontFamily = 'Pacifico';

    body.style.backgroundColor ='rgb(248, 215, 196)';
}

botondos.onclick = function (){
    resultado.textContent = alert = "Seleccionó estilo número dos";
    titulo.style.backgroundColor = 'rgb(201, 200, 244)';
    titulo.style.color = 'blue' ;
    titulo.style.fontSize = '35px';

    resultado.style.fontFamily = 'Arial';

    textuno.style.fontSize = '12px';
    textuno.style.marginLeft = '0px';
    textuno.style.backgroundColor = 'aliceblue';
    textuno.style.fontFamily = 'Dancing Font';
    textuno.style.marginBottom = '2%';
    textuno.style.marginRight = '50%';
    textuno.style.color = 'black';

    textdos.style.backgroundColor = 'aliceblue';
    textdos.style.fontSize = '12px';
    textdos.style.fontFamily = 'Times New Roman';
    textdos.style.marginRight = '40%';

    body.style.backgroundColor = 'aliceblue';
    
} 

botontres.onclick = function (){
    resultado.textContent = alert = "Seleccionó estilo número tres";
    titulo.style.backgroundColor = 'rgb(175, 125, 225)';
    titulo.style.color = 'black' ;
    titulo.style.fontSize = '40px';

    resultado.style.fontFamily = 'Arial';

    textuno.style.fontSize = '20px';
    textuno.style.color = 'black';
    textuno.style.backgroundColor = 'rgb(230, 206, 253)';
    textuno.style.fontFamily = 'Cute Font';
    textuno.style.fontSize = '20px';
    textuno.style.margin = '5% 20%';

    textdos.style.backgroundColor = 'rgb(230, 206, 253)';
    textdos.style.fontSize = '20px';
    textdos.style.fontFamily = 'Cute Font';
    textdos.style.margin = '5% 10%';

    body.style.backgroundColor = 'rgb(214, 173, 255)';
}