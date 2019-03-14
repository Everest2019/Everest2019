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
    


    btn_subir_portada.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['portada']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#preview_portada').src = imagenUrl;
                console.log(imagenUrl);
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
                console.log(imagenUrl);
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
                console.log(imagenUrl);
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
                console.log(imagenUrl);
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
                console.log(imagenUrl);
        });
    });

    btn_subir_documento1.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['documento']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_documento1').src = './img/check.png';
                console.log(imagenUrl);
        });
    });

    btn_subir_documento2.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['documento']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_documento2').src = './img/check.png';
                console.log(imagenUrl);
        });
    });

    btn_subir_documento1.on('click', function(e){

        cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto', tags: ['documento']},
        function(error, result) {
            if(error) console.log(error);
            
            let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;
                document.querySelector('#img_documento3').src = './img/check.png';
                console.log(imagenUrl);
        });
    });
})