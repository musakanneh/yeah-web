<?php

include_once "connection.php";


if(isset($_POST['name'])){

    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone_number = mysqli_real_escape_string($conn, $_POST['mobile']);

    if(mysqli_query($conn, "INSERT INTO waitinglist(name, email, phone_number) VALUES('" . $name . "', '" . $email . "', '" . $phone_number . "')")) {
        echo 'success';
    } else {
        echo "Error: ". mysqli_error($conn);
    }

    mysqli_close($conn);


}

else{

    echo "Not set";
}


