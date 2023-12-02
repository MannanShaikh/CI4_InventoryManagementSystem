// FUNCTION NAMES IN PASCAL CASE.
// VARIABLE NAMES IN SNAKE CASE.

function Register() {
    imei = $("#imei").val();                    // STORE ALL TEXTBOX VALUES IN VARIABLES.
    brand = $("#brand").val();
    model = $("#model").val();
    price = $("#price").val();

    if (imei != "" && brand != "" && model != "" && price != "")  //CHECK WHETHER FIELDS ARE EMPTY OR NOT.
    {
        $.post(                                 // AJAX CALL.
            "../PHP/product.php",
            {
                function_name: "register",       // AJAX CALL PARAMETERS.
                imei: imei,
                brand: brand,
                model: model,
                price: price
            },
            function (data, status) {

                if (status == "success") {
                    if (JSON.parse(data) == "Success") {
                        $('.container').find('input').val('');
                        $(".modal-body").html("Product registration completed.");
                        $('#myModal').modal('show');
                    }
                    else {
                        $(".modal-body").html("ERROR: " + data);
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
    else {
        $(".modal-body").html("Input fields cannot be empty.");
        $('#myModal').modal('show');
    }
}

function Update() {
    imei = $("#imei").val();                    // STORE ALL TEXTBOX VALUES IN VARIABLES.
    brand = $("#brand").val();
    model = $("#model").val();
    price = $("#price").val();

    if (imei != "" && brand != "" && model != "" && price != "")  //CHECK WHETHER FIELDS ARE EMPTY OR NOT.
    {
        $.post(                                     // AJAX CALL.
            "../PHP/product.php",
            {
                function_name: "update",             // AJAX CALL PARAMETERS.
                imei: imei,
                brand: brand,
                model: model,
                price: price,
            },
            function (data, status) {

                if (status == "success") {
                    if (JSON.parse(data) == "Success") {
                        $('.container').find('input').val('');
                        $(".modal-body").html("Product Updation Completed.");
                        $('#myModal').modal('show');
                    }
                    else {
                        $(".modal-body").html("ERROR: " + data);
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
    else {
        $(".modal-body").html("Input fields cannot be empty.");
        $('#myModal').modal('show');
    }
}

function Search() {
    imei = $("#imei").val();

    if (imei == null || imei == "") {
        $(".modal-body").html("IMEI field cannot be empty, enter IMEI number to search");
        $('#myModal').modal('show');
    }
    else {
        $.post(
            "../PHP/product.php",
            {
                function_name: "Search",       // AJAX CALL PARAMETERS.
                imei: imei
            },
            function (data, status) {
                data = JSON.parse(data);
                data = data[0];
                data['Flag'] == 1 ? $('#status').prop("checked", true ) : $('#status').prop("checked", false );
                $("#brand").val() = values['Brand'];
                $("#model").val() = values['Model'];
                $("#price").val() = values['Amount'];
            }
        );
    }
}