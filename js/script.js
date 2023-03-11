const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);

    Promise.all([
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          }),
        fetch("/.netlify/functions/DBConfig")
        .then(function() { 

            formAlertFail.style.display = "none";
            formAlertSuccess.style.display = "block"; })
    
          .catch(function(error) { 
            
            console.log(error); 
            
            formAlertSuccess.style.display = "none";
            formAlertFail.style.display = "block"; })
    ]);

    /*
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(function() { 

        formAlertFail.style.display = "none";
        formAlertSuccess.style.display = "block"; })

      .catch(function(error) { 
        
        console.log(error); 
        
        formAlertSuccess.style.display = "none";
        formAlertFail.style.display = "block"; }); 
        */
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);

  const formAlertSuccess = document.getElementById("form-alert-success");
  const formAlertFail = document.getElementById("form-alert-fail");