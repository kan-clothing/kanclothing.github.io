var btn = document.getElementById('checkout');
btn.addEventListener('click', function(e) {
    e.preventDefault()
		alert("If the next message box says OK, your email has been sent successfully. Make sure you have entered a valid email, we'll reply as soon as possible (our email may be marked as spam, please check spam). Have a nice day!");
	
	var sname = document.getElementById('fname').value;
    var fname = document.getElementById('sname').value;
	var email = document.getElementById('email').value;
	var message1 = document.getElementById('message').value;
    var postal = document.getElementById('postcode').value;
    var phone = document.getElementById('phone').value;
	
	var mail ='SUBJECT: CHECKOUT ' +  '<br/> ORDERS: Wala pa haha (place holder lang e2)' + '</br> NAME: '+ sname + ' '+ fname +'<br/> EMAIL: ' + email +'</br> PHONE: ' + phone +'</br> POSTCODE: ' + postal +'<br/> NOTES: ' + message1;
	           
	
	
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kanclothingph1@gmail.com",
        Password: "5A9752781AFC5E4478BF8F10BB7AACF32FDC",
        To: "kanclothingph1@gmail.com",
        From: "kanclothingph1@gmail.com",
        Subject: 'CHECKOUT',
        Body: mail,
    }).then(
        message => alert("Email sent successfully")
    ).catch(
        error => alert("Error: " + error)
    );
});
