let botones = document.getElementsByClassName('boton')
let resultado = document.getElementById('resultado')

for (i = 0; i < botones.length; i ++){
    botones[i].addEventListener('click', function botonPresionado(){
        if(this.value != "DEL" & this.value !="C" & this.value != "="){
            resultado.textContent += this.value
            console.log(resultado)
        }else{
            if (this.value == "="){
                for (e = 0; e < resultado.textContent.length; e++){
                    if (resultado.textContent[e] == "√"){
                        var definitiva = resultado.textContent.slice(2, resultado.textContent.length)
                        console.log(definitiva)
                        var raiz = "Math.sqrt" + "(" + resultado.textContent[e+1] + definitiva + ")";
                        resultado.textContent = eval(raiz)
                        console.log(raiz)
                    }else{
                        resultado.textContent = eval(resultado.textContent)
                    }
                }
            }
            else if (this.value == "C"){
                resultado.textContent = "";
            }
            else if (this.value == "DEL"){
                resultado.textContent = resultado.textContent.slice(0, -1)
            }
         
        }  
    })
}



