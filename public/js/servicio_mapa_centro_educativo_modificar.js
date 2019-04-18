var map;
const latitud =  document.querySelector('#txt_latitud');
const longitud =  document.querySelector('#txt_longitud');

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: parseFloat(latitud.value) , lng: parseFloat(longitud.value)},
          zoom: 12
        });
        var centro_educativo = new google.maps.Marker({
          position: {
              lat: parseFloat(latitud.value),
              lng: parseFloat(longitud.value)
          },
          map: map,
          draggable:true,
          title:"Selecciona la ubicación del Centro Educativo"
        });
        
          google.maps.event.addListener(centro_educativo, 'dragend', function (evt) {
            let lat = centro_educativo.getPosition().lat();
            let lng = centro_educativo.getPosition().lng();

            document.querySelector('#txt_latitud').value = lat;
            document.querySelector('#txt_longitud').value = lng;
        });
      }

      
