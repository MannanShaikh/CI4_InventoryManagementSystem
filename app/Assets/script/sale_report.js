function CurrentSearch()
{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;

    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var setdate = now.getFullYear()+"-"+(month)+"-"+(day);

    Search(today, today);
    
    $('#from').val(setdate);
    $('#to').val(setdate);

}

function FilterSearch()
{
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    Search(from, to);
}

function Search(from, to) {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    from > to ? console.log("From cannot be greater") :
        $.post("../PHP/sale_report.php", { from: from, to: to }, function (data) {
            data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {

                var row = document.createElement('tr');

                var aadhar = document.createElement('td');
                aadhar.innerText = data[i]['AadharNumber'];

                var name = document.createElement('td');
                name.innerText = data[i]['CustomerName'];

                var email = document.createElement('td');
                email.innerText = data[i]['Email'];

                var brand = document.createElement('td');
                brand.innerText = data[i]['Brand'];

                var model = document.createElement('td');
                model.innerText = data[i]['Model'];

                var gst = document.createElement('td');
                gst.innerText = data[i]['GST'];

                var amount = document.createElement('td');
                amount.innerText = data[i]['AmountWithGST'];

                var total = document.createElement('td');
                total.innerText = data[i]['GrandTotal'];

                row.appendChild(aadhar);
                row.appendChild(name);
                row.appendChild(email);
                row.appendChild(brand);
                row.appendChild(model);
                row.appendChild(gst);
                row.appendChild(amount);
                row.appendChild(total);

                document.getElementsByTagName('tbody')[0].append(row);
            }
        });
    ;
}