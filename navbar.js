let ubicacionPrincipal = window.pageYOffset;

window.onscroll = function() {
    let desplazamientoActual = window.pageYOffset;

    if(ubicacionPrincipal >= desplazamientoActual) {
        document.getElementById('navbar').style.top = '0';
    }
    else {
        document.getElementById('navbar').style.top = '-100px';
        document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
    }

    if(window.pageYOffset == 0) {
        document.getElementById('navbar').style.backgroundColor = 'transparent';
        document.getElementById('navbar').style. transition = 'all 0.5s ease'; 
    }

    ubicacionPrincipal = desplazamientoActual;
}