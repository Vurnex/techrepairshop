const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(function() { formAlertSuccess.style.display = "block"; })
      .catch(function(error) { formAlertFail.style.display = "block"; });
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);

  const formAlertSuccess = document.getElementById("form-alert-success");
  const formAlertFail = document.getElementById("form-alert-fail");