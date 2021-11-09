<?php
    ini_set('display_errors', 'On');
    error_reporting(E_ALL);

    $executionStartTime = microtime(true);

    // $url = "http://api.geonames.org/findNearByWeatherJSON?formatted=true&lat=" . $_POST['lat'] . "&lng=" . $_POST['lon'] . "&username=flightltd&style=full";
    $url = "http://api.openweathermap.org/data/2.5/weather?q=london&appid=a837c7f451a78e5c15c37babdf0c6c38";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);

    $result = curl_exec($ch);

    curl_close($ch);

    $decode = json_decode($result, true);

    $output['status']['code'] = '200';
    $output['status']['name'] = 'ok';
    $output['status']['description'] = 'success';
    $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . ' ms';
    $output['data'] = $decode;

    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($output);
?>