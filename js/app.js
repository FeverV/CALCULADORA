
var calculadora = {
    display: document.getElementById("display"),
    cero: document.getElementById("0"),
    uno: document.getElementById("1"),
    dos: document.getElementById("2"),
    tres: document.getElementById("3"),
    cuatro: document.getElementById("4"),
    cinco: document.getElementById("5"),
    seis: document.getElementById("6"),
    siete: document.getElementById("7"),
    ocho: document.getElementById("8"),
    nueve: document.getElementById("9"),
    punto: document.getElementById("punto"),
    igual: document.getElementById("igual"),
    mas: document.getElementById("mas"),
    menos: document.getElementById("menos"),
    por: document.getElementById("por"),
    entre: document.getElementById("dividido"),
    signo: document.getElementById("sign"),
    on: document.getElementById("on"),
    raiz: document.getElementById("raiz")
}

 // -----------------------------------------------------------
    calculadora.cero.addEventListener("click", function(){
        validacion("0");
        
    })
    calculadora.cero.addEventListener("mousedown", function(){
        calculadora.cero.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.cero.addEventListener("mouseup", function(){
        calculadora.cero.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.uno.addEventListener("click", function(){
        validacion("1");
    })
    
    calculadora.uno.addEventListener("mousedown", function(){
        calculadora.uno.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.uno.addEventListener("mouseup", function(){
        calculadora.uno.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.dos.addEventListener("click", function(){
        validacion("2");
    })
    calculadora.dos.addEventListener("mousedown", function(){
        calculadora.dos.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.dos.addEventListener("mouseup", function(){
        calculadora.dos.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.tres.addEventListener("click", function(){
        validacion("3");
    })
    calculadora.tres.addEventListener("mousedown", function(){
        calculadora.tres.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.tres.addEventListener("mouseup", function(){
        calculadora.tres.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.cuatro.addEventListener("click", function(){
        validacion("4");
    })
    calculadora.cuatro.addEventListener("mousedown", function(){
        calculadora.cuatro.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.cuatro.addEventListener("mouseup", function(){
        calculadora.cuatro.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.cinco.addEventListener("click", function(){
        validacion("5");
    })
    calculadora.cinco.addEventListener("mousedown", function(){
        calculadora.cinco.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.cinco.addEventListener("mouseup", function(){
        calculadora.cinco.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.seis.addEventListener("click", function(){
        validacion("6");
    })
    calculadora.seis.addEventListener("mousedown", function(){
        calculadora.seis.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.seis.addEventListener("mouseup", function(){
        calculadora.seis.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.siete.addEventListener("click", function(){
        validacion("7");
    })
    calculadora.siete.addEventListener("mousedown", function(){
        calculadora.siete.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.siete.addEventListener("mouseup", function(){
        calculadora.siete.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.ocho.addEventListener("click", function(){
        validacion("8");
    })
    calculadora.ocho.addEventListener("mousedown", function(){
        calculadora.ocho.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.ocho.addEventListener("mouseup", function(){
        calculadora.ocho.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.nueve.addEventListener("click", function(){
        validacion("9");
    })
    calculadora.nueve.addEventListener("mousedown", function(){
        calculadora.nueve.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.nueve.addEventListener("mouseup", function(){
        calculadora.nueve.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.punto.addEventListener("click", function(){
        validacion(".");
    })
    calculadora.punto.addEventListener("mousedown", function(){
        calculadora.punto.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.punto.addEventListener("mouseup", function(){
        calculadora.punto.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.igual.addEventListener("mousedown", function(){
        // validacion("enter")
        calculadora.igual.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.igual.addEventListener("mouseup", function(){
        calculadora.igual.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.mas.addEventListener("mousedown", function(){
        calculadora.mas.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.mas.addEventListener("mouseup", function(){
        validacion("+")
        calculadora.mas.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.menos.addEventListener("mousedown", function(){
        calculadora.menos.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.menos.addEventListener("mouseup", function(){
        validacion("-")
        calculadora.menos.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.por.addEventListener("mousedown", function(){
        calculadora.por.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.por.addEventListener("mouseup", function(){
        validacion("*")
        calculadora.por.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.entre.addEventListener("mousedown", function(){
        calculadora.entre.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.entre.addEventListener("mouseup", function(){
        validacion("/")
        calculadora.entre.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.signo.addEventListener("mousedown", function(){
        calculadora.signo.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.signo.addEventListener("mouseup", function(){
        calculadora.signo.setAttribute("style", "transform:scale(1, 1)")
    })
    
    // -----------------------------------------------------------
    calculadora.on.addEventListener("mousedown", function(){
        calculadora.on.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.on.addEventListener("mouseup", function(){
        calculadora.on.setAttribute("style", "transform:scale(1, 1)")
    })
    
     // -----------------------------------------------------------
    calculadora.raiz.addEventListener("mousedown", function(){
        calculadora.raiz.setAttribute("style", "transform:scale(0.9, 0.9)")
    })
    calculadora.raiz.addEventListener("mouseup", function(){
        calculadora.raiz.setAttribute("style", "transform:scale(1, 1)")
    })

document.onkeypress =tecla; 

 function tecla(event){
     var tecla = event.which || event.keyCode;
     tecla = String.fromCharCode(tecla);
     validacion(tecla);
    
    if (tecla == String.fromCharCode(13)){
       igual();
    }
 }
 
 var op;
 var primer_valor;
 var resultado;
function validacion(value){
    
            if(value === "+"){
                resultado = "+";
            }else if(value ==="-"){
            resultado = "-";
            }else if(value ==="*"){
            resultado = "*";
            }else if(value ==="/"){
            resultado = "/";
            }

    if(value === "+"){
        
        op =true;
        if(primer_valor){
            primer_valor = parseFloat(primer_valor) + parseFloat(calculadora.display.innerHTML);
        }
        return 0;
    }else if(value === "-"){
        
        op =true;
        if(primer_valor){
            primer_valor = parseFloat(primer_valor) + parseFloat(calculadora.display.innerHTML);
        }
        return 0;
    }else if(value === "*"){
        
        op =true;
        if(primer_valor){
            primer_valor = parseFloat(primer_valor) + parseFloat(calculadora.display.innerHTML);
        }
        return 0;
    }else if(value === "/"){
        
        op =true;
        if(primer_valor){
            primer_valor = parseFloat(primer_valor) + parseFloat(calculadora.display.innerHTML);
        }
        return 0;
    }
    
    if(op){
        if (!primer_valor){
        primer_valor = calculadora.display.innerHTML;
        }
        
        calculadora.display.innerHTML = "0";
        op=false;
    }
 
    if (calculadora.display.innerHTML === "0" && value === "0" ) {
        return "0";
    }
    if(calculadora.display.innerHTML === "0"){
        calculadora.display.innerHTML= value;
        
    }
    else{
    calculadora.display.innerHTML = calculadora.display.innerHTML + value;
    calculadora.display.innerHTML = String(calculadora.display.innerHTML).substr(0,8);
    }

  
    
 } // FIN DE FUNCTION VALIDACION

function teclaOn(){
    calculadora.display.innerHTML = "0";
    primer_valor=""; 
    op = false;
}

function igual(){
    
    if (resultado ==="+"){
    calculadora.display.innerHTML= parseFloat(primer_valor) + parseFloat(calculadora.display.innerHTML);    
    }else if(resultado==="-"){
    calculadora.display.innerHTML= parseFloat(primer_valor) - parseFloat(calculadora.display.innerHTML);    
    }else if(resultado==="*"){
    calculadora.display.innerHTML= parseFloat(primer_valor) * parseFloat(calculadora.display.innerHTML);    
    }else if(resultado==="/"){
    calculadora.display.innerHTML= parseFloat(primer_valor) / parseFloat(calculadora.display.innerHTML);    
    }
    primer_valor = "";
}

function masmenos(){
    calculadora.display.innerHTML = calculadora.display.innerHTML * -1;
}
