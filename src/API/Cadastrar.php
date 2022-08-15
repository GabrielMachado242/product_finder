<?php

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");


include_once 'conexao.php'

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

http_response_code(200);
echo json_encode($dados['nome, email']);

?>