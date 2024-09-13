const nodemailer = require('nodemailer')




const sendmailAppointment = async (payload) => {
    const { patientEmail, date, time } = payload;

    console.log('sending mail');

    if (!patientEmail  || !date || !time) {
        return ({ success: false, message: 'Missing required fields' });
    }

    console.log('Sending mail to:', patientEmail);

    // Create a transporter object using your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use any email service provider
        auth: {
            user: 'neerushakarwal08@gmail.com', // Your email
            pass: 'bpzb xuvj jxeh cbjt', // Your email password or app-specific password if using Gmail
        },
    });

    // Configure the email options
    const mailOptions = {
        from: 'neerushakarwal08@gmail.com', // Sender address
        to: patientEmail, // Recipient address
        subject: 'Appointment Confirmation', // Subject line
        text: `Dear Patient,
  
  Your appointment has been successfully booked.
  
  Appointment Details:
  Date: ${date}
  Time: ${time}
  
  Thank you for using our service!
  
  Best regards,
  Your Medical Team`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return ({ success: true, message: 'Appointment confirmation email sent successfully' });
    } catch (error) {
        console.error('Error sending appointment email:', error);
        return ({ success: false, message: 'Failed to send email' });
        console.log(res.status);
    }
}


module.exports = { sendmailAppointment }