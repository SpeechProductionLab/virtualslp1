<?php

if (isset($_FILES["video"])) {

        $fileName = "myvideo.webm";
        $uploadDirectory = './'.$fileName;

        if (!move_uploaded_file($_FILES["video"]["tmp_name"], $uploadDirectory)) {
            echo("problem moving uploaded file ");
        }
}else {
        echo("No file uploaded");

   }
   
?>
