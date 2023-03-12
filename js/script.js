const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);

    const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

    console.log(formDataJsonString);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(function(data) { 
        
        formAlertFail.style.display = "none";
        formAlertSuccess.style.display = "block"; })

    .catch(function(error) { 
        
        console.log(error); 
        
        formAlertSuccess.style.display = "none";
        formAlertFail.style.display = "block"; 
    });

    fetch("/.netlify/functions/DBConfig", {
        method: "POST",
        headers: { 	
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        body: formDataJsonString,
    })
    .then((data) => console.log(data));
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);

  const formAlertSuccess = document.getElementById("form-alert-success");
  const formAlertFail = document.getElementById("form-alert-fail");