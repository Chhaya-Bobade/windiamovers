function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        moving_date: document.getElementById("moving_date").value,
        moving_from: document.getElementById("moving_from").value,
        moving_to: document.getElementById("moving_to").value,
        massage: document.getElementById("massage").value,
    };

    const serviceID = "service_36268xe";
const templateID = "template_ii0lsoe";

emailjs.send(serviceID, templateID, params)
.then (
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("moving_date").value = "";
        document.getElementById("moving_from").value = "";
        document.getElementById("moving_to").value = "";
        document.getElementById("massage").value = "";

        console.log(res);
        alert("message sent successfully");

    }
)
.catch((err) => console.log(err));
}

