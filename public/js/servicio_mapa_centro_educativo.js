var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 9.933063, lng: -84.079479},
          zoom: 12
        });
        var centro_educativo = new google.maps.Marker({
          position: {
              lat: 9.933063, 
              lng: -84.079479
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

      
