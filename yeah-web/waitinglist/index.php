<?php

include_once "connection.php";

if (!empty($_GET['name']) && !empty($_GET['phone_number']) && !empty($_GET['email'])) {

    //email exists
    if (record_exists('waitinglist', 'email', $_GET['email'], $conn)) {
        //email is free now check phone number

        //check phone number exists

        //email is free now check phone number

        //check phone number exists
        if (record_exists('waitinglist', 'phone_number', $_GET['phone_number'], $conn)) {
            //it does not insert
            insertUser($conn);
        } else {
            //if exists echo 6
            echo 6;
        }
    } else {
        //if exists echo 5
        echo 5;
    }

    //done if row exists
} else {

    //echo three for unseen error

    echo 3;
}


function insertUser($conn){
    $name = mysqli_real_escape_string($conn, $_GET['name']);
    $email = mysqli_real_escape_string($conn, $_GET['email']);
    $phone_number = mysqli_real_escape_string($conn, $_GET['phone_number']);

    if (mysqli_query($conn, "INSERT INTO waitinglist(name, email, phone_number) VALUES('" . $name . "', '" . $email . "', '" . $phone_number . "')")) {
        //echo one for success
        echo 1;
    } else {
        //echo 2 error on our side
        echo 2;
    }

    mysqli_close($conn);
}


//Check if a value exists in a table
function record_exists($table, $column, $value, $conn)
{
    $query = "SELECT * FROM waitinglist WHERE $column = '$value'";

    $result = mysqli_query($conn, $query);
    $rowcount = mysqli_num_rows($result);

    if ($rowcount == 0) {
        return TRUE;
    } else {
        return FALSE;
    }
}
