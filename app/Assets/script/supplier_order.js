// FUNCTION NAMES IN PASCAL CASE.
// VARIABLE NAMES IN SNAKE CASE.

function PlaceOrder() {
    quantity = $("#quantity").val();                    // STORE ALL TEXTBOX VALUES IN VARIABLES.
    brand = $("#brand").val();
    model = $("#model").val();
    if (quantity == "") {
        $(".modal-body").html("Fields cannot be empty.");
        $('#myModal').modal('show');
    }
    else {
        $.post(                                 // AJAX CALL.
            "../PHP/supplier_order.php",
            {
                function_name: "PlaceOrder",       // AJAX CALL PARAMETERS.
                brand: brand,
                model: model,
                quantity: quantity
            },
            function (data, status) {

                if (status == "success") {
                    if (data == "Success") {
                        $('.container').find('input').val('');
                        $(".modal-body").html("Your order has been placed.");
                        $('#myModal').modal('show');
                    }
                }
                else {
                    $(".modal-body").html("ERROR: " + data);
                    $('#myModal').modal('show');
                }

            }
        );
    }
}

function CheckGst() {

    // THIS FUNCTION CHECKS FOR VALID GST NUMBER AND FETCHES BRANDS.

    gst = $("#gst").val();                    // STORE ALL TEXTBOX VALUES IN VARIABLES.

    if (gst.length < 15 || gst.length > 15)      // CHECK FOR CORRECT GST LENGTH.
    {
        $(".modal-body").html("GST number length is not correct.");
        $('#myModal').modal('show');
    }
    else {
        $.post(                                 // AJAX CALL.
            "../PHP/supplier_order.php",
            {
                function_name: "getBrand",       // AJAX CALL PARAMETERS.
                gst: gst
            },
            function (data, status) {

                if (status == "success") {
                    var brands = [];
                    brands = JSON.parse(data);
                    for (let i = 0; i < brands.length; i++) {
                        var option = document.createElement('option');
                        option.value = brands[i];
                        option.innerText = brands[i];
                        document.getElementById('brand').appendChild(option);
                    }
                    document.getElementById('brand').disabled = false;
                }
                else {
                    $(".modal-body").html("ERROR: " + data);
                    $('#myModal').modal('show');
                }

            }
        );
    }
}

function GetModels() {

    brand = $("#brand").val();                    // STORE ALL TEXTBOX VALUES IN VARIABLES.

    $.post(                                 // AJAX CALL.
        "../PHP/supplier_order.php",
        {
            function_name: "getModels",       // AJAX CALL PARAMETERS.
            brand: brand
        },
        function (data, status) {

            if (status == "success") {
                var models = [];
                models = JSON.parse(data);
                for (let i = 0; i < models.length; i++) {
                    var option = document.createElement('option');
                    option.value = models[i];
                    option.innerText = models[i];
                    document.getElementById('model').appendChild(option);
                }
                document.getElementById('model').disabled = false;
                document.getElementById('quantity').disabled = false;
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

    $.post(                                 // AJAX CALL.
        "../PHP/supplier_order.php",
        {
            function_name: "GetData",       // AJAX CALL PARAMETERS.
            model: model
        },
        function (data, status) {

            if (status == "success") {
                var models = [];
                models = JSON.parse(data);
                for (let i = 0; i < models.length; i++) {
                    var option = document.createElement('option');
                    option.value = models[i];
                    option.innerText = models[i];
                    document.getElementById('model').appendChild(option);
                }
                document.getElementById('model').disabled = false;
                document.getElementById('quantity').disabled = false;
            }
            else {
                $(".modal-body").html("ERROR: " + data);
                $('#myModal').modal('show');
            }

        }
    );
}