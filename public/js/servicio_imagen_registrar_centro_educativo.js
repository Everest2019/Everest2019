$(function(){
    let imagenUrl = '';

    $.cloudinary.config({cloudname: 'everestproyecto', api_key: '589584724821689'});

    let btn_subir_imagen = $('#btn_seleccionar_portada');

    btn_subir_imagen.on('click', function(e){

        cloudinary.openUploadWidget({cloudname: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#preview_portada').src = imagenUrl;
                console.log(imagenUrl);
        });
    });
})