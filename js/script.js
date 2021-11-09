var map;
$(window).on('load', function () {
    if ($('#preloader').length) {
    $('#preloader').delay(1000).fadeOut('slow', function () {
    $(this).remove();
    });
    }

      //GET CURRENT LOCATION
const x = document.getElementById("map");
    
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  x.innerHTML = "Geolocation is not supported by this browser.";
}


function showPosition(position) {
  
  map = L.map('map').setView([53, 45], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
  }).addTo(map);

  map.zoomControl.setPosition('bottomright');
  
  L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
  .bindPopup('You are here!')
  .openPopup();
}

  $.get("libs/php/countryNames.php").done(function(res) {
    let str = ``;
    if(res.status.name == "ok"){
      for(let i = 0; i < res.data.length; i++) {
        str += `<option class="dropdown-item" value=${res.data[i].properties.iso_a2}>${res.data[i].properties.name}</option>`;
      }
    }

    $('#dropdown').html(str);
  });

  
});

$('#test').click(function(){
  $('.main').html(`
      
  `)
})




