function sendMail() {

        if(
            document.getElementById("name").value !="" &&
            document.getElementById("email").value !="" && 
            document.getElementById("message").value!="" 
            
        ){
        var params=
        {
        
        
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }
        const serviceID = "service_oq2bttr";
        const templateID = "template_p04r559";
    
        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    console.log(res);
                    alert("your message sent successfully.")
                }
            )
            .catch((err) => console.log(err));
        }
    
    else {
        alert("enter full details")
    }
    }