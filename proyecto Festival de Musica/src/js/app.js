document.addEventListener('DOMContentLoaded', function(){
    crearGaleria()
})

function crearGaleria(){

    const Cantidad_Imagenes=16
    const galeria = document.querySelector('.galeria-imagenes');



    for(let i=1; i<=Cantidad_Imagenes; i++){
        
        const imagen = document.createElement('PICTURE')
        imagen.innerHTML = 
        `<source srcset="dist/img/gallery/thumb/${i}.avif" type="image/avif">
        <source srcset="dist/img/gallery/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="dist/img/gallery/thumb/${i}.jpg" alt="imagen galeria">`;

        //Event handler
        imagen.onclick = function(){
            mostrarImagen(i)
            
        }

        galeria.appendChild(imagen)
    }
};

function mostrarImagen(i) {
    //genera imagen
    const imagen = document.createElement('IMG')
    imagen.src=`src/img/gallery/full/${i}.jpg`
    imagen.alt='Imagen Galería' 


    //generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    modal.appendChild(imagen)

    //agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overFlow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal= document.querySelector('.modal')

    modal.classList.add('fadeOut')

    setTimeout(()=>{
        modal?.remove()
    },500);

    const body = document.querySelector('body')
    body.classList.remove('overFlow-hidden')
}