


var map;
      function initMap() {
        const latitud = document.querySelector('#lat_centro_educativo');
        const longitud = document.querySelector('#lng_centro_educativo');

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: parseFloat(latitud.value), lng: parseFloat(longitud.value)},
          zoom: 17
        });
        var centro_educativo = new google.maps.Marker({
          position: {
              lat: parseFloat(latitud.value), 
              lng: parseFloat(longitud.value)
          },
          map: map,
          draggable:false,
          title:"Selecciona la ubicación del Centro Educativo"
        });
      }

      
