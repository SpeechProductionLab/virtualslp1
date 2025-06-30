<?php


$RANDOM = rand(1,9999);
date_default_timezone_set('America/Toronto');
$DATE = date('m_d_Y_h_i_s_a', time());

if (isset($_FILES["video"])) {

        $fileName = $_POST["name"]."_".$DATE.".mp4";
        $uploadDirectory = "recordings/".$fileName;

        if (!move_uploaded_file($_FILES["video"]["tmp_name"], $uploadDirectory)) {
            echo("Problem Uploading the File");
        }else {
		echo("Your File Was Uploaded!");
		}
}else {
        echo("No File Uploaded");

   }
?>