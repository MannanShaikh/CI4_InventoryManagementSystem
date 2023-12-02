function Search() {
    var x = document.getElementsByTagName("table")[0].rows.length;
    if (x > 1) {
        for (var i = 1; i < x; i++) {
            document.getElementsByTagName('tr')[i].remove();
        }
        document.getElementById('adhar').innerText = "";
        document.getElementById('name').innerText = "";
        document.getElementById('email').innerText = "";
        GetData();
    }
    else
    {
        $('#table_data').removeClass("d-none");
        GetData();
    }
}

function GetData() {
    var adhar = document.getElementById('aadhar_number').value;
    adhar == "" ? console.log("cannot be empty") :
        $.post("../PHP/customer_report.php", { adhar: adhar }, function (data) {
            data = JSON.parse(data);
            document.getElementById('adhar').innerText = data[0]['AadharNumber'];
            document.getElementById('name').innerText = data[0]['CustomerName'];
            document.getElementById('email').innerText = data[0]['Email'];
            for (var i = 0; i < data.length; i++) {

                var row = document.createElement('tr');

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

                row.appendChild(brand);
                row.appendChild(model);
                row.appendChild(gst);
                row.appendChild(amount);
                row.appendChild(total);

                document.getElementsByTagName('tbody')[0].append(row);
            }
        });
}