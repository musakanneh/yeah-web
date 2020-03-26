<?php
$servername='localhost';
$username='theyckbf_waitingList';
$password='txd852168*';
$dbname = "theyckbf_waitingList";
$conn=mysqli_connect($servername,$username,$password,"$dbname");
if(!$conn){
    die('Could not Connect MySql Server:' .mysql_error());
}
?>