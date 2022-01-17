<?php
$url = "http://teste.sunsalesystem.com.br/api/estagio/informatica/gerarDeclaracaoHomeOffice?nome=" . $_GET["nome"] . "&cpf=" . $_GET["cpf"];

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$resp = curl_exec($curl);

echo $resp;

?>