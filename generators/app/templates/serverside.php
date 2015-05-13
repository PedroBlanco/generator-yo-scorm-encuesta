<?php

/***  <%= URL %>/<%= TARGET %>.php

	<%= COMMENT %>

	Almacena en la BD los datos en la encuesta apropiada.

	***/

header("Content-type: text/plain");

$host = "<%= DB_HOST %>";
$user = "<%= DB_USER %>";
$pass = "<%= DB_PASS %>";
$db = "<%= DB_NAME %>";
$table = "<%= DB_TABLE %>";
$port = "<%= BD_PORT %>";
$debug = FALSE;

// 18 preguntas y un campo de comentarios
$n_respuestas = 18;

$respuesta = array();

// Si la valoración no es un entero entre 1 y 10, tomamos 10 como valor por defecto ;)
for ( $i = 1; $i <= $n_respuestas; $i++ ) {
	if ( ctype_digit ($_POST["pregunta".$i]) ) {
		if ( ($_POST["pregunta".$i] <= 10) && ($_POST["pregunta".$i] >= 1) ) {
			$respuesta[$i] = $_POST["pregunta".$i] + 0;
		} else {
			$respuesta[$i] = 10;
		}
	} else {
		$respuesta[$i] = 10;
	}
}

$mysqli = new mysqli( $host, $user, $pass, $db, $port);

if ($mysqli->connect_errno) {
    print ( "Error(1): Ha habido un problema con la encuesta. Avise al coordinador de la actividad." );
	if ( $debug ) {
		echo "Fallo en la conexi&oacute;n a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	}
}

if ( strlen ( $_POST['comentario'] ) == 0 ){
	$comentario = '';
}else {
	$comentario = htmlentities ( $_POST['comentario'], ENT_QUOTES | ENT_SUBSTITUTE | ENT_XHTML );
	// Prefiero codificar las comillas como entidades html en vez de escaparlas
	//$comentario = $mysqli->real_escape_string ( $_POST['comentario'] );
}

/* Prepared statement, stage 1: prepare */
if (!($stmt = $mysqli->prepare("INSERT INTO `".$table."` (pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8,pregunta9,pregunta10,pregunta11,pregunta12,pregunta13,pregunta14,pregunta15,pregunta16,pregunta17,pregunta18,comentario) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"))) {
     print ( "Error(2): Ha habido un problema con la encuesta. Avise al coordinador de la actividad." );
	if ( $debug ) {
		echo "Fallo al preparar: (" . $mysqli->errno . ") " . $mysqli->error;
	}
}

/* Prepared statement, stage 2: bind and execute */
if (!$stmt->bind_param("iiiiiiiiiiiiiiiiiis", $respuesta[1], $respuesta[2], $respuesta[3], $respuesta[4], $respuesta[5], $respuesta[6], $respuesta[7], $respuesta[8], $respuesta[9], $respuesta[10], $respuesta[11], $respuesta[12], $respuesta[13], $respuesta[14], $respuesta[15], $respuesta[16], $respuesta[17], $respuesta[18], $comentario )) {
    print ( "Error(3): Ha habido un problema con la encuesta. Avise al coordinador de la actividad." );
	if ( $debug ) {
		echo "Fallo al vincular: (" . $stmt->errno . ") " . $stmt->error;
	}
}

if (!$stmt->execute()) {
    print ( "Error(4): Ha habido un problema con la encuesta. Avise al coordinador de la actividad." );
	if ( $debug ) {
		echo "Fallo al ejecutar: (" . $stmt->errno . ") " . $stmt->error;
	}
} else {
	print ( "Gracias por realizar la encuesta. Ya puede salir de la actividad." );
}

/* explicit close recommended */
$stmt->close();
