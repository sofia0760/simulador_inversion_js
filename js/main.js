function simulador(){

    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');
    
     //variable que capturan los valores de los campos 
    let cNombres = document.getElementById('nombres').value;
    let cTelefono = document.getElementById('telefono').value;
    let cEmail = document.getElementById('email').value;
    let cMonto = document.getElementById('monto').value;
    let cTiempo = document.getElementById('tiempo').value;

    //constantes que campuran las etiquetas span en las que se muestran los valores por eso la S de show
    const sTiempo = document.getElementById('sTiempo');   //la S significa show para mostrar 
    const sInteres = document.getElementById('sInteres');
    const sTotal = document.getElementById('sTotal');  
    const sGanancia = document.getElementById('sGanancia');
    const sNombres = document.getElementById('sNombres');
    const sCorreo = document.getElementById('sCorreo');

    //variables para realizar los calculos 
    let ganancia = 0;
    let total = 0; 
    switch (cTiempo) {
        case '1':
            //en este case realizaremos el calculo si el tiempo corresponde a un año]
            ganancia=(cMonto*0.008)*12;
            total= parseInt(cMonto ) + parseInt(ganancia);
            sInteres.textContent='0.8%';
            sTiempo.textContent='12 MESES';
            break;

        case '2':
            //en este case realizaremos el calculo si el tiempo corresponde a dos años 
            ganancia=(cMonto*0.013)*24;
            total= parseInt(cMonto ) + parseInt(ganancia);
            sInteres.textContent='1.3%';
            sTiempo.textContent='24 MESES';
            
            break;
            
        case '3':
            //en este case realizaremos el calculo si el tiempo corresponde a tres años 
            ganancia=(cMonto*0.017)*36;
            total= parseInt(cMonto ) + parseInt(ganancia);
            sInteres.textContent='1.7%';
            sTiempo.textContent='36  MESES';
            
            break;   
    }

    sTotal.textContent = total;
    sGanancia.textContent = ganancia;
    sNombres.textContent = cNombres;
    sCorreo.textContent = cEmail;

}

document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('calcular').addEventListener('click',simulador);
});