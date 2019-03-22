$(function(){
    let imagenUrl= '';
    //falta copiar name n key
    $.cloudinary.config({cloud_name: 'dsygeeptv',api_key:'822847152192946'});
    //falta este boton id en el html
    let uploadButton = $('#btn_seleccionar_imagen');

    uploadButton.on('click', function(e){
    //falta poner aqui name, preset
        cloudinary.openUploadWidget({cloud_name:'dsygeeptv',upload_preset:'everest',tags:['actividades']},
        function(error,result){
            if(error) console.log(error);
            let id=result[0].public_id;
            console.log(id);
            //falta agregar http de cloudinary
            imagenUrl = ''+ id ;
//falta este id en el html
            document.querySelector('#image_preview').src = imagenUrl;
            console.log(imagenUrl);
        });
    });

});