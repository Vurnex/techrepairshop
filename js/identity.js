
//Select Data from Database
fetch("/.netlify/functions/getData")
.then((response) => response.json())
.then((data) => populateTable(data.rows))
.catch(function(error) {  
      
});

function populateTable(rows) {

    console.log(rows);


    const table = document.getElementById('table');

    rows.forEach(function(object) {

        var tr = document.createElement('tr');

        tr.innerHTML = '<td>' + object.id + '</td>' +
        '<td>' + object.name + '</td>' +
        '<td>' + object.Email + '</td>' +
        '<td>' + object.Inquiry + '</td>' +
        '<td>' + object.Subject + '</td>' +
        '<td>' + object.Message + '</td>' +
        '<td>' + object.Company + '</td>' +
        '<td>' + object.Phone + '</td>' +
        '<td>' + object.DateTime + '</td>';

        table.appendChild(tr);
    })
}
