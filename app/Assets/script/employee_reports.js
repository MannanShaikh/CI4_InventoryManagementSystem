$.post(
    "../PHP/employee_reports.php",
    { functionName: "GetMemberNames" },
    function (data, status) {
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {

            var card = document.createElement('div');
            card.className = "card col-md-5";
            card.style = "width:400px;padding:10px; margin:10px !important;";

            var body = document.createElement('div');
            body.className = "card-body";

            var title = document.createElement('h1');
            title.className = "card-title";
            title.innerText = data[i]['EmployeeName'];

            var text = document.createElement('p');
            text.className = "card-text";

            var emp_adhar = document.createElement('div');
            emp_adhar.innerText = data[i]['AadharNumber'];

            var emp_email = document.createElement('div');
            emp_email.innerText = data[i]['Email'];

            var emp_contact = document.createElement('div');
            emp_contact.innerText = data[i]['ContactNumber'];

            body.appendChild(title);
            text.appendChild(emp_adhar);
            text.appendChild(emp_email);
            text.appendChild(emp_contact);
            body.appendChild(text);
            card.appendChild(body);

            var button = document.createElement('a');
            button.className = "btn btn-primary";
            button.style = "width:150px";
            button.innerText = "View";
            button.addEventListener("click", CurrentSearch);
            card.appendChild(button);

            document.getElementsByClassName('row')[0].append(card);
        }
    }
);

function CurrentSearch()
{
    var aadhaar = this.parentNode.childNodes[0].childNodes[1].childNodes[0].innerText;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;

    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var setdate = now.getFullYear()+"-"+(month)+"-"+(day);

    Search(today, today, aadhaar);
    
    $('#from').val(setdate);
    $('#to').val(setdate);

    $("#cards").addClass("d-none");
    $('#table').removeClass("d-none");
}

function FilterSearch()
{
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var aadhaar = document.getElementById('aadhar').innerText;

    Search(from, to, aadhaar);
}

function Search(from, to, aadhaar) {
    

    aadhaar == "" || aadhaar == null ? alert("Field cannot be empty.") :
        $.post("../PHP/employee_reports.php", { functionName : "GetData", from : from, to : to, aadhaar: aadhaar }, function (data) {
            data = JSON.parse(data);
            document.getElementById('name').innerText = data[0]['EmployeeName'];
            document.getElementById('aadhar').innerText = data[0]['AadharNumber'];
            document.getElementById('contact').innerText = data[0]['ContactNumber'];
            document.getElementById('email').innerText = data[0]['Email'];
            data[0]['Status'] = '1' ? document.getElementById('status').innerText = "Active" : document.getElementById('status').innerText = "In-active";
            for (var i = 0; i < data.length; i++) {

                var row = document.createElement('tr');

                var brand = document.createElement('td');
                brand.innerText = data[i]['Brand'];

                var model = document.createElement('td');
                model.innerText = data[i]['Model'];

                var amount = document.createElement('td');
                amount.innerText = data[i]['Amount'];

                var total = document.createElement('td');
                total.innerText = data[i]['Date'];


                row.appendChild(brand);
                row.appendChild(model);
                row.appendChild(amount);
                row.appendChild(total);

                document.getElementsByTagName('tbody')[0].append(row);
            }
        });
    ;
}