El localizador funciona de forma web y se necesita php5.6 y mariadb

Se requiere crear una BD que se llame centros_acopio, con una tabla llamada coordenadas, que consiste en las columnas de id, nombre, latitud y longitud. Incluyo todos los inserts
en la carpeta.

por supuesto, se debe crear un nuevo usuario. El nombre del usuario es cliente, la contraseña es 12345

la aplicación después consiste en simplemente utilizar html 5 geolocation para determinar tu posición actual y a partir de eso, hacer un query a través de php, gracias al algoritmo
de la fórmula del harvesine, ya que como la tierra es esférica, la distancia óptima se calcula mejor con este algoritmo

después php regresa la información del post, que como el query está limitado a 1 resultado, sólo será un centro el más cercano. Después pones un marcador en el mapa con esas latitudes
y longitudes, el nombre del centro de acopio y listo
