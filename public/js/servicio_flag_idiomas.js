'use strict';

$(function(){
  let imagenUrl = '';

  $.cloudinary.config({cloud_name: 'everestproyecto', api_key: '589584724821689'});

  let uploadButton = $('#btn_seleccionar_imagen');

  uploadButton.on('click',function(e){

    cloudinary.openUploadWidget({cloud_name: 'everestproyecto', upload_preset: 'everestproyecto',tags:['banderas']},
    function(error,result){
        if(error) console.log(error);

        let id = result[0].public_id;
        console.log(id);

        imagenUrl = 'https://res.cloudinary.com/everestproyecto/image/upload/' + id;

        document.querySelector('#imagen_idioma').src = imagenUrl;
        console.log(imagenUrl);
  });
  });
})
