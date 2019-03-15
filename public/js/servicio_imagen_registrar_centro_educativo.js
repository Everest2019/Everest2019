$(function(){
    let imagenUrl = '';

    $.cloudinary.config({cloud_name: 'everestproyecto', api_key: '589584724821689'});

    let btn_subir_portada = $('#btn_seleccionar_portada');
    let btn_subir_imagen_galeria1 = $('#btn_galeria1');
    let btn_subir_imagen_galeria2 = $('#btn_galeria2');
    let btn_subir_imagen_galeria3 = $('#btn_galeria3');
    let btn_subir_imagen_galeria4 = $('#btn_galeria4');
    let btn_subir_documento1 = $('#btn_documento1');
    let btn_subir_documento2 = $('#btn_documento2');
    let btn_subir_documento3 = $('#btn_documento3');
    let btn_foto_encargado = $('#btn_foto_encargado');
    let btn_logo_institucion = $('#btn_logo_institucion');
    


    btn_subir_portada.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['portada']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#preview_portada').src = imagenUrl;
                document.querySelector('#img_portada').value = imagenUrl;
        });
    });

    btn_subir_imagen_galeria1.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['galeria']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_galeria1').src = imagenUrl;
                document.querySelector('#url_galeria1').value = imagenUrl;
        });
    });

    btn_subir_imagen_galeria2.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['galeria']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_galeria2').src = imagenUrl;
                document.querySelector('#url_galeria2').value = imagenUrl;
        });
    });

    btn_subir_imagen_galeria3.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['galeria']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_galeria3').src = imagenUrl;
                document.querySelector('#url_galeria3').value = imagenUrl;
        });
    });

    btn_subir_imagen_galeria4.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['galeria']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_galeria4').src = imagenUrl;
                document.querySelector('#url_galeria4').value = imagenUrl;
        });
    });

    btn_subir_documento1.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['documento']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_documento1').src = './img/document.png';
                document.querySelector('#url_documento1').value = imagenUrl;
        });
    });

    btn_subir_documento2.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['documento']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_documento2').src = './img/document.png';
                document.querySelector('#url_documento2').value = imagenUrl;
        });
    });

    btn_subir_documento3.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['documento']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_documento3 ').src = './img/document.png';
                document.querySelector('#url_documento3').value = imagenUrl;
        });
    });

    btn_foto_encargado.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['documento']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_encargado').src = imagenUrl;
                document.querySelector('#url_foto_encargado').value = imagenUrl;
        });
    });

    btn_logo_institucion.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['documento']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_logo_institucion').src = imagenUrl;
                document.querySelector('#url_logo_institucion').value = imagenUrl;
        });
    });
})