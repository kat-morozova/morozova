<?php
// Файлы phpmailer


// Роутер
function route($method, $urlData, $formData) {
  
    // POST /register
    if ($method === "POST") {
      //TODO: все что снизу, про сесии, оно не нужно фактически, это работает внутри JS
        
        // Переменные, которые отправляет пользователь

        include_once 'phpmailer/PHPMailer.php';
        include_once 'phpmailer/SMTP.php';
        include_once 'phpmailer/Exception.php';
        include_once 'response.php';

        $name = $_POST['name'] ?? $formData['name'];
        $tel = $_POST['tel'] ?? $formData['tel'];
        $email = $_POST['email'] ?? $formData['email'];
        $text = $_POST['texta'] ?? $formData['texta'];
        $file = $_FILES['file'] ?? $formData['file'];

        // Формирование самого письма
        $title = "$name, хочет связаться с вами";
        $body = "
        <h2>Обратная связь</h2>
        <b>Имя:</b> $name<br>
        <b>Телефон:</b> $tel<br>
        <b>Почта:</b> $email<br><br>
        <div style='padding: 20px; border: 1px solid #aaa; border-radius: 15px;'>
        <b>Сообщение:</b><br>$text
        </div>";

        // Валидация почты
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

        // Настройки PHPMailer
        $mail = new PHPMailer\PHPMailer\PHPMailer();
        try {
            $mail->isSMTP();   
            $mail->CharSet = "UTF-8";
            $mail->SMTPAuth   = true;
            //$mail->SMTPDebug = 2;
            $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

            // Настройки вашей почты
            $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
            $mail->Username   = 'fotoss-kurgan@mail.ru'; // Логин на почте
            $mail->Password   = 'fotoss.vlad.dim20'; // Пароль на почте
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
            $mail->setFrom('fotoss-kurgan@mail.ru', 'Отклик с сайта'); // Адрес самой почты и имя отправителя

            // Получатель письма
            $mail->addAddress('fotoss-kurgan@mail.ru');  
            $mail->addAddress('katmoroz16@yandex.ru'); // Ещё один, если нужен
            // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

            // Прикрипление файлов к письму
        if (!empty($file['name'][0])) {
            for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
                $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
                $filename = $file['name'][$ct];
                if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
                    $mail->addAttachment($uploadfile, $filename);
                    $rfile[] = "Файл $filename прикреплён";
                } else {
                    $rfile[] = "Не удалось прикрепить файл $filename";
                }
            }   
        }
        // Отправка сообщения
        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;    

        // Проверяем отравленность сообщения
        if ($mail->send()) {$result = "success";} 
        else {$result = "error";}

        } catch (Exception $e) {
            $result = "error";
            $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
        }
        } else {
            $result = "email";
        }
        // Отображение результата
        // echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
        if($result == "error"){
            response(405, ["result" => $result, "resultfile" => $rfile, "status" => $status]);

        } else {
            response(200, ["result" => $result, "resultfile" => $rfile, "status" => $status]);
        }
        
            // response(200, ["data" => ["message" => "Logout"]]);
            // return;
            }
    // Возвращаем ошибку
    // response(422, ["errors" => ["ощибка метода"], "method" => $method]);
  }



?>