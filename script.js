function encriptar() {
    let texto = document.getElementById("texto").value.toLowerCase(); // Convertimos el texto a minúsculas
    let resultado = ""; // Inicializamos el texto encriptado

    // i = es para que tome letras mayúsculas y minúsculas
    // g = toma  en cuenta la línea o la oración
    // m = toma en cuenta múltiples líneas
 
        resultado = texto.replace(/e/img, 'enter');
        resultado = resultado.replace(/i/img, 'imes');
        resultado = resultado.replace(/a/img, 'ai');
        resultado = resultado.replace(/o/img, 'ober');
        resultado = resultado.replace(/u/img, 'ufat');
     // aplicamos las reglas de encriptación
    // Mostramos el texto encriptado en el textarea de resultado y ocultamos la imagen
    
    document.getElementById("loading-img").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("textoDesencriptado").value = resultado;
    // Mostramos el textarea y habilitamos el botón de copiar
    document.getElementById("textoDesencriptado").style.display = "block";
    document.getElementById("copyButton").disabled = false;
}

function desencriptar() {
    let texto = document.getElementById("textoDesencriptado").value.toLowerCase(); // Obtenemos el texto encriptado y lo convertimos a minúsculas
    let resultado = ""; // Inicializamos el texto desencriptado

    resultado = texto.replace(/enter/img, 'e')
                         .replace(/imes/img, 'i')
                         .replace(/ai/img, 'a')
                         .replace(/ober/img, 'o')
                         .replace(/ufat/img, 'u');
    document.getElementById("textoDesencriptado").value = resultado;


    // Mostramos el texto desencriptado en el textarea de resultado y ocultamos la imagen
    document.getElementById("textoDesencriptado").value = resultado;
    document.getElementById("loading-img").style.display = "none";
    document.getElementById("info").style.display = "none";
    // Mostramos el textarea y habilitamos el botón de copiar
    document.getElementById("textoDesencriptado").style.display = "block";
    document.getElementById("copyButton").disabled = false;
}


function copiarTexto() {
    var textoDesencriptado = document.getElementById("textoDesencriptado");
    textoDesencriptado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");

    // Ocultamos el textarea resultado y mostramos la imagen
    document.getElementById("textoDesencriptado").style.display = "none";
    document.getElementById("loading-img").style.display = "block";
    document.getElementById("info").style.display = "block";
    // Deshabilitamos el botón de copiar
    document.getElementById("copyButton").disabled = true;
}
