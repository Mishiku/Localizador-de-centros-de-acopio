<!DOCTYPE html >
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
  <title>Encuentra tu centro de acopio</title>
  <link rel="stylesheet" href="stilo.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


</head>
<body style="margin:0px; padding:0px;" onload="initMap()">
  <div>
    <label for="raddressInput">Busca tu centro de acopio más cercano:</label>

    <input type="button" onclick="getLocation()" value="Buscar"/>
    <p id="demo"></p>
  </div>
  <div><select id="locationSelect" style="width: 10%; visibility: hidden"></select></div>

  <div id="map" style="width: 100%; height: 90%"></div>

  <script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPqL8tyWFjM7pA2Hc-FGghjuNS9soKQAU&callback=initMap">
  </script>
<script src="script.js"></script>
</body>

</html>
