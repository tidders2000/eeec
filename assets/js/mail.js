function sendMail(contactform) {

    emailjs.send("service_pv0itze", "eagle", {
        "first_name": contactform.fname.value,
        "last_name": contactform.lname.value,
        "from_email": contactform.email.value, 
        "comment": contactform.comment.value,
        "contact":contactform.contact.value
    })
    
 .then(
        function(response) {
            console.log("SUCCESS", response);
           alert("Message Sent")
            
          
        },
        function(error) {
            console.log("FAILED", error);
            alert("Error: Message Not Sent")
        }
    );
    return false;  // To block from loading a new page
}

function signUp(signup){

emailjs.send("service_pv0itze", "eagle_subscribe", {
    "subscribe": signup.email.value
})
.then(
    function(response) {
        console.log("SUBSCRIBED", response);
       alert("Subscribed")
        
      
    },
    function(error) {
        console.log("FAILED", error);
        alert("Error: Subscription failed")
    }
);
return false;  // To block from loading a new page
}

