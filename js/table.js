
//Get Data from Database
fetch("/.netlify/functions/getData")
.then((response) => response.json())
.then((data) => populateTable(data.rows))
.catch(function(error) {
    
    const tableBodyEmpty = document.getElementById('tableBodyEmpty');
    tableBodyEmpty.style.display = "block";
      
});

function populateTable(rows) {

    //console.log(rows);

    const tableBody = document.getElementById('tbody');

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

        tableBody.appendChild(tr);
    })
}

//Filter Table

function filterTable() {

    // Declare variables
    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[getVal];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

let getVal = 0;

let searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', filterTable);

document.getElementById('selectOptions').addEventListener('change', function() {

    getVal = this.value;

});
