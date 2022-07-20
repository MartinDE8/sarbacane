<?php
    global $servername;
    global $dbname;
    global $username;
    global $password;

    // Connect to the DB
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check if connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    //check is we have data from form
    if(is_array($_POST)){

        //Redirect if empty field
        foreach ($_POST as $field){
            if(empty($field)){
                header('Location: https://sarbacane-test.000webhostapp.com/?response=empty-field');die();
            }
        }

        //Assign var to data
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $company = $_POST['company'];
        $address = $_POST['address'];
        $cp = $_POST['cp'];
        $city = $_POST['city'];
        $siren = $_POST['siren'];
        $naf = $_POST['naf'];

        //We insert the data collected into the DB
        if(!empty($name) && !empty($surname) && !empty($email) && !empty($tel) && !empty($company) && !empty($address) && !empty($cp) && !empty($city) && !empty($siren) && !empty($naf)){
            $sql = 'INSERT INTO inscrits_sarbacane (name, surname, email, tel, company, address, cp, city, siren, naf)
            VALUES ("'.$name.'", "'.$surname.'", "'.$email.'", "'.$tel.'", "'.$company.'", "'.$address.'", "'.$cp.'", "'.$city.'", "'.$siren.'", "'.$naf.'")';

            //And redirect to success page if data was inserted
            if ($conn->query($sql) === TRUE) {
                header('Location: https://sarbacane-test.000webhostapp.com/?response=success');die();
            }
        }
    }

    $conn->close();




