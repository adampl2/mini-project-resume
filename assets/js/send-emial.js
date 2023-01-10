function sendMail(contactForm) {
    emailjs.send("service_qsv99lb", "template_os5sdfw", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response.status, response.text);
                alert("You request has been submitted successfully!")
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}