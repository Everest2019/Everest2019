$(function(){
    let imagenUrl = '';

    $.cloudinary.config({cloud_name: 'everestproyecto', api_key: '589584724821689'});

    let btn_subir_foto = $('#btn_subir_foto');
    
    btn_subir_foto.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['padre_familia']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_padre_familia').src = imagenUrl;
                document.querySelector('#url_foto_perfil').value = imagenUrl;
        });
    });
})