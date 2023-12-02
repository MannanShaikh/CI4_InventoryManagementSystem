$.post(
    "../PHP/supplier_reports.php",
    { function_name: "GetAllSuppliers" },
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
            title.innerText = data[i]['GST'];

            var brand = document.createElement('p');
            brand.className = "card-text";
            brand.innerText = data[i]['Brand'];

            var model = document.createElement('p');
            model.className = "card-text";
            model.innerText = data[i]['Model'];

            body.appendChild(title);
            body.appendChild(brand);
            body.appendChild(model);
            card.appendChild(body);

            var button = document.createElement('a');
            button.className = "btn btn-outline-primary";
            button.style = "width:150px";
            button.innerText = "Order";
            button.addEventListener("click", Load);
            card.appendChild(button);

            document.getElementsByClassName('row')[0].append(card);
        }
    }
);

function Load() {
    var gst = this.parentNode.childNodes[0].childNodes[0].innerText;
    var brand = this.parentNode.childNodes[0].childNodes[1].innerText;

    $('#card_data').addClass('d-none');
    $('#form_data').removeClass('d-none');
    $('#table_data').removeClass('d-none');

    $('#gst').val(gst);
    $('#brand').val(brand);
    GetModels();
}

function GetModels() {

    brand = $("#brand").val();                    // STORE ALL TEXTBOX VALUES IN VARIABLES.
    gst = $("#gst").val();

    $.post(                                 // AJAX CALL.
        "../PHP/supplier_reports.php",
        {
            function_name: "getModels",       // AJAX CALL PARAMETERS.
            brand: brand,
            gst: gst
        },
        function (data, status) {

            if (status == "success") {
                var models = [];
                models = JSON.parse(data);
                modelsarray = models[0]
                for (let i = 0; i < modelsarray.length; i++) {
                    var option = document.createElement('option');
                    option.value = modelsarray[i];
                    option.innerText = modelsarray[i];
                    document.getElementById('model').appendChild(option);
                }
                document.getElementById('model').disabled = false;
                document.getElementById('quantity').disabled = false;
                document.getElementById('amount').value = models[1];
            }
            else {
                $(".modal-body").html("ERROR: " + data);
                $('#myModal').modal('show');
            }

        }
    );
}

function GetData() {

    model = $("#model").val();                    // STORE ALL TEXTBOX VALUES IN VARIABLES.
    gst = $("#gst").val();

    $.post(                                 // AJAX CALL.
        "../PHP/supplier_reports.php",
        {
            function_name: "GetData",       // AJAX CALL PARAMETERS.
            model: model,
            gst: gst
        },
        function (data, status) {

            if (status == "success") {
                data = JSON.parse(data);
                document.getElementById('amount').value = data;
            }
            else {
                $(".modal-body").html("ERROR: " + data);
                $('#myModal').modal('show');
            }

        }
    );
}

function Add() {

    brand = $('#brand').val();
    model = $('#model').val();
    quantity = $('#quantity').val();
    amount = $('#amount').val();

    total = quantity * amount;

    if (quantity != "") {
        var row = document.createElement('tr');

        var brand_name = document.createElement('td');
        brand_name.innerText = brand;
        row.appendChild(brand_name);

        var model_name = document.createElement('td');
        model_name.innerText = model;
        row.appendChild(model_name);

        var quantity_data = document.createElement('td');
        quantity_data.innerText = quantity;
        row.appendChild(quantity_data);

        var amount_data = document.createElement('td');
        amount_data.innerText = amount;
        row.appendChild(amount_data);

        var total_data = document.createElement('td');
        total_data.innerText = total;
        row.appendChild(total_data);

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
        $(".modal-body").html("Fields cannot be empty.");
        $('#myModal').modal('show');
    }
}

function PlaceOrder()
{
    $(".modal-body").html("THIS PAGE IS YET UNDER DEVELOPMENT !!");
    $('#myModal').modal('show');
}