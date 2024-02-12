function calcularArea() {
    let base = parseInt(document.getElementById('base').value);
    let altura = parseInt(document.getElementById('altura').value);

    //Validación
    if (isNaN(base)) {
        alertify.error('Número de base en blanco')
    } else if(isNaN(altura)) {
        alertify.error('Número de altura en blanco')
    } else {
        var area = base * altura;
        document.getElementById('resultado').value = area
    }
}

function limpiarCampos() {
    document.getElementById('base').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').value = '';
}
