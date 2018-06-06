<?php
$servername = "localhost";
$username = "cliente";
$password = "12345";
$dbname = "centros_acopio";
$lati =  $_POST['postlat'];
$longi  = $_POST['postlng'];

// crea la conexion
$conn = new mysqli($servername, $username, $password, $dbname);
// verifica
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//query que calcula por medio del servidor la distancia mas cercana
$sql = mysqli_query($conn,"SELECT  nombre, lat, lng, (6371 * acos( cos( radians('$lati') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('$longi') ) + sin( radians('$lati') ) * sin( radians( lat ) ) ) ) AS distance FROM coordenadas HAVING distance < 300 ORDER BY distance LIMIT 1;");

$data = array();
while ($row = mysqli_fetch_assoc($sql))
{
  $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>
