function simulador(){

    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');
    // let cNombres = document.getElementById('nombres').value;
    // let cTelefono = document.getElementById('telefono').value;
    // let cEmail = document.getElementById('email').value;
    // let cMonto = document.getElementById('monto').value;

}

document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('calcular').addEventListener('click',simulador);
});