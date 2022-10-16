<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $emailFrom = 'contact@thiagodiogenes.tech';
  $emailTo = 'thiagomdiogenes@gmail.com';
  $emailHeaders = "From: $emailFrom \r\n";
  $emailHeaders .= "Reply-To: $email \r\n";
  $emailHeadersHTML = "MIME-Version: 1.0" . "\r\n";
  $emailHeadersHTML .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $emailHeadersHTML .= "From: $emailFrom \r\n";
  $emailHeadersHTML .= "Reply-To: $email \r\n";
  $emailSubject = 'Contact Form Submission';
  $emailBody = "Name: $name.\n"."Email: $email.\n"."Message: $message.\n";
  $emailBodyHTML = "
  <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
  <html xmlns='https://www.w3.org/1999/xhtml'>
    <head>
      <title>Contact Form Submission</title>
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </head>
    <body style='font-family: sans-serif; background-color: #202125;'>
      <div style='background-color: #202125; color: #eaeaea; padding: 15px; text-align: center;''>
        Contact Form Submission
      </div>
      <hr style='margin: 0 0 15px; border: 1px solid #5d5d5d;' />
      <div style='padding: 30px; background-color: #202125; color: #eaeaea;'>
        <p style='margin: 0 0 15px;'>Name: $name</p>
        <p style='margin: 0 0 15px;'>Email: $email</p>
        <p style='margin: 0 0 15px;'>Message: $message</p>
      </div>
      <hr style='margin: 0; border: 1px solid #5e5d5d;' />
      <div style='background-color: #202125; color: #eaeaea; padding: 15px; text-align: right;'>
        <p style='margin: 0;'>© 2020 Developed by Thiago Diogenes</p>
      </div>
    </body>
  </html>
  ";

  mail($emailTo, $emailSubject, $emailBodyHTML, $emailHeadersHTML);

  header("Location: contact-received");
?>