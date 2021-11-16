<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once "vendor/autoload.php";

class SendMailPHP
{
    public function __getSendMail($fromMail, $toMail, $content_send)
    {
        //PHPMailer Object
        $mail = new PHPMailer(true); //Argument true in constructor enables exceptions 

        try {
            //Server settings
            $mail->SMTPDebug  = 0;
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = base64_decode($fromMail['mailUser']);                     //SMTP username
            $mail->Password   = base64_decode($fromMail['passUser']);                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;
            $mail->CharSet = "UTF-8";
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );                                  //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom(base64_decode($fromMail['mailUser']), 'PHP_Mailer'); // Mail From
            $mail->addAddress($toMail, $toMail); // Mail To

            $mail->addReplyTo(base64_decode($fromMail['mailUser']), 'Information');

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'PHP_Send_Mail_System';
            $mail->Body    = $content_send;
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo 'Đổi mật khẩu thành công';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}
