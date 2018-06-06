
// se determina la ubicacion del usuario
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

//con la ubicacion en cuenta, hace la peticion al servidor de correr un query que calcula la distancia mas cercana
//al usuario

function showPosition(position) {
  var ajax = new XMLHttpRequest();
  var method = "GET";
  var url = "procedure.php";
  var async = true;
  var inputlat = position.coords.latitude;
  var inputlng = position.coords.longitude;

  $.post(url, {postlat:inputlat,postlng: inputlng },
  function(data)
  {
    var data = JSON.parse(data);
    console.log(data);

    var html = "";

    for(var a=0; a< data.length;a++)
    {
      var nombre = data[a].nombre;
      var latitud = data[a].lat;
      var longitud = data[a].lng;
      var distancia = data[a].distance;
      console.log(nombre + " " + latitud +", "+longitud + " distancia: " + distancia);

      ///añade el marcador al mapa con el centro de acopio
      var myLatlng = new google.maps.LatLng(latitud,longitud);
      var mapOptions = {
        zoom: 18,
        center: myLatlng
      }
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Tu centro de acopio más cercano"
      });


      marker.setMap(map);
      document.getElementById("demo").innerHTML = nombre;
    }
  });
  ajax.open(method,url,async);
  ajax.send();

  ajax.onreadystatechange = function()
  {
    if(this.readyState == 4 && this.status ==200)
    {


    }
  }
  alert("Éste es tu centro de acopio más cercano!");
}

////////////

var map;
var markers = [];
var infoWindow;
var locationSelect;
// crea el mapa
function initMap() {
  var cdmx = {lat:  19.433528, lng: -99.128559};
  map = new google.maps.Map(document.getElementById('map'), {
    center: cdmx,
    zoom: 11,
    mapTypeId: 'roadmap',
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
  });
  infoWindow = new google.maps.InfoWindow();


}
