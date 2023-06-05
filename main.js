var contenedorImagen = document.getElementById('stock');
var imagen = contenedorImagen.getElementsByTagName('img')[0];

contenedorImagen.addEventListener('mouseover', function() {
    imagen.classList.add('hidden');
});

contenedorImagen.addEventListener('mouseout', function() {
    imagen.classList.remove('hidden');
});
contenedorImagen.addEventListener('mouseout', function() {
    imagen.remove('img');
});