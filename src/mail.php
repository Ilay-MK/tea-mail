<?php
    error_reporting(-1);
    header('Content-Type: text/html; charset= utf-8');

    $error = false;

    if (!empty($_POST["bsName"])) {
        $name = substr(htmlspecialchars(trim($_POST["bsName"])), 0, 250);
    } else {
        $error = true;
    }

    if (!empty($_POST["bsPhone"])) {
        $phone = substr(htmlspecialchars(trim($_POST["bsPhone"])), 0, 50);
    } else {
        $error = true;
    }

    /**/
    $utm_sourceSTR = "";
    $utm_termSTR   = "";

    if (!empty($_POST["utm_source"])) {
        $utm_source    = htmlspecialchars(trim($_POST["utm_source"]));
        $utm_sourceSTR = "\n\nutm_source: $utm_source;";
    }

    if (!empty($_POST["utm_term"])) {
        $utm_term    = htmlspecialchars(trim($_POST["utm_term"]));
        $utm_termSTR = "\n\nutm_term: $utm_term;";
    }

    if (!empty($_POST["whichService"])) {
        $whichService = substr(htmlspecialchars(trim($_POST["whichService"])), 0, 255);
    }

    if (!$error) {
        $recepient = "MiKrob09@gmail.com"; /* "MiKrob09@gmail.com" */
        $sitename  = "tea-mail";
        $pagetitle = "Новая заявка с сайта \"$sitename\"";

        $message   = "Имя: $name \nТелефон: $phone \n\nКуда кликнул: $whichService $utm_sourceSTR $utm_termSTR";

        mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
    } else {
        echo "<p class='bg-danger text-danger'>Произошла ошибка! Заполните правильно все поля!</p>";
    }
?>
