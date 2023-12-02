<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../images/mobile-store.ico" type="/icon type">
    <title>Supplier Order</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="../script/supplier_reports.js"></script>

    <!-- <script>
        $.post(
            "../PHP/authorization.php",{},
            function (data, status) {
                data = JSON.parse(data);
                data == "True" ? "" : window.location.assign("../AUTHENTICATE/login.html");
            }
        );
    </script> -->

    <script>
        $(document).ready(function () {
            $("#AdminHeader").load("AdminHeader.html");
        });
    </script>
    <link rel="stylesheet" href="../css/reports.css">
    <link rel="stylesheet" href="../css/supplier_order.css">
    <link rel="stylesheet" href="../css/header.css">
    <script src="../script/header.js"></script>
</head>

<body>
    <div id="AdminHeader"></div>
    <div class="container" id="card_data">
        <div class="row" style="padding: 15px !important;"></div>
    </div>

    <div class="container d-none" id="form_data">
        <div class="col-md-12">
            <div class="row">
                <div class="form-group col">
                    <label for="gst"><b>GSTIN</b></label>
                    <input type="text" class="form-control" id="gst" disabled>
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <label for="brand"><b>BRAND</b></label>
                    <input class="form-control" id="brand" disabled>
                </div>
                <div class="form-group col">
                    <label for="model"><b>MODEL</b></label>
                    <select class="form-control" id="model" onchange="GetData()" disabled></select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <label for="quantity"><b>QUANTITY</b></label>
                    <input type="number" id="quantity" disabled>
                </div>
                <div class="form-group col">
                    <label for="amount"><b>AMOUNT</b></label>
                    <input type="number" id="amount" disabled>
                </div>
            </div>
            <button type="button" onclick="Add()" class="btn btn-primary order"><b>ADD</b></button>
        </div>
    </div>

    <div class="container d-none" id="table_data">
        <div class="row" >
            <div class="col-md-12 table-responsive"><br>
                <table class="table table-hover" id="table">
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="tablebody">
                    </tbody>
                </table>
            </div>
        </div>
        <button type="button" onclick="PlaceOrder()" class="btn btn-primary order"><b>ORDER</b></button>
    </div>

    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title"></h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
</body>

</html>