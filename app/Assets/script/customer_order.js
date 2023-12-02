$.post(
    "../PHP/customer_order.php",
    {
        function_name: "GetInvoice",
    },
    function (data, status) {
        data = JSON.parse(data);
        data = parseInt(data) + 1;
        document.getElementById("invoice").value = data;
    }
);




function Add() {
    imei = $("#imei").val();

    if (imei == null || imei == "") {
        $(".modal-body").html("IMEI field cannot be empty");
        $('#myModal').modal('show');
    }
    else {
        $.post(
            "../PHP/customer_order.php",
            {
                function_name: "Add",
                imei: imei
            },
            function (data, status) {
                var models = [];
                models = JSON.parse(data);
                models = models[0];
                if (models != "" || models != null) {
                    var row = document.createElement('tr');

                    var imei = document.createElement('td');
                    imei.innerText = models['IMEI'];
                    row.appendChild(imei);

                    var brand = document.createElement('td');
                    brand.innerText = models['Brand'];
                    row.appendChild(brand);

                    var model = document.createElement('td');
                    model.innerText = models['Model'];
                    row.appendChild(model);

                    var gst = document.createElement('td');
                    var gst_amount =  (models['Amount'] * 18)/100;
                    gst.innerText = gst_amount;
                    row.appendChild(gst);

                    var amount = document.createElement('td');
                    amount.innerText = gst_amount + parseInt(models['Amount']);
                    row.appendChild(amount);

                    var button_data = document.createElement('td');
                    var button = document.createElement('input');
                    button.type = "button";
                    button.value = "REMOVE";
                    button.className = "btn btn-danger";
                    button.onclick = function () {
                        var index = this.parentNode.parentNode.rowIndex;
                        document.getElementById("table").deleteRow(index);
                    }
                    button_data.appendChild(button);
                    row.appendChild(button_data);
                    document.getElementById('tablebody').appendChild(row);
                }
                else {
                    $(".modal-body").html("This IMEI does not exist in the records");
                    $('#myModal').modal('show');
                }
            }
        );
    }
}

function Save() {
    email = $("#email").val();
    customer_name = $("#name").val();
    invoice = $("#invoice").val();
    aadhaar = $("#aadhaar").val();
    discount = $("#discount").val();

    if (email == "" || customer_name == "" || aadhaar == "" || discount == "") {
        $(".modal-body").html("field/s cannot be empty");
        $('#myModal').modal('show');
    }
    else {

        var count = document.getElementById("table").rows.length;

        var imei_array = new Array();
        var amount_array = new Array();
        var gst_array = new Array();

        for (var i = 1; i < count; i++) {

            imei_array.push(document.getElementById("table").rows[i].cells[0].innerHTML);
            gst_array.push(document.getElementById("table").rows[i].cells[3].innerHTML);
            amount_array.push(document.getElementById("table").rows[i].cells[4].innerHTML);

        }

        var imei = JSON.stringify(imei_array);
        var amount = JSON.stringify(amount_array);
        var gst = JSON.stringify(gst_array);


        $.post(
            "../PHP/customer_order.php",
            {
                function_name: "Save",
                imei: imei,
                email: email,
                customername: customer_name,
                invoice: invoice,
                discount: discount,
                amount: amount,
                aadhaar: aadhaar,
                gst: gst
            },
            function (data, status) {
                window.location.assign("../PHP/BillFormat.php");
            }
        );
    }
}