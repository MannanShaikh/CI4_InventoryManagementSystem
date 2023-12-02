<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../images/mobile-store.ico" type="image/icon type">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>BILLING</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        $.post(
            "../PHP/authorization.php",{},
            function (data, status) {
                data = JSON.parse(data);
                data == "True" ? "" : window.location.assign("../AUTHENTICATE/login.html");
            }
        );
    </script>
    <script>
        $(document).ready(function () {
            $(function () {
                $("#header").load("EmployeeHeader.html");
            });
        });
    </script>
    <script src="../script/header.js"></script>
    <link rel="stylesheet" href="../css/header.css">
    <script src="../script/customer_order.js"></script>
    <script src="../script/validation.js"></script>
    <link rel="stylesheet" href="../css/customer_order.css">

    <!-- ANIMATE CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

</head>

<body>
    <div id="header"></div>
    <div class="container animate__animated animate__backInDown">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="name">INVOICE NUMBER:</label>
                    <input type="text" class="form-control" id="invoice" disabled>
                </div>
                <div class="form-group">
                    <label for="name">CUSTOMER FULL NAME:</label>
                    <input type="text" class="form-control" id="name" onblur="Alphabets(this.value, this.id)">
                </div>
                <div class="form-group">
                    <label for="aadhaar">AADHAAR NUMBER:</label>
                    <input type="number" class="form-control" id="aadhaar" onblur="AadhaarLength(this.value)">
                </div>
                <div class="form-group">
                    <label for="email">EMAIL:</label>
                    <input type="email" class="form-control" id="email" onblur="EmailValidate(this.value, this.id)">
                </div>
                <div class="form-group">
                    <label for="imei">IMEI:</label>
                    <input type="text" class="form-control" id="imei" onchange="Add()">
                </div>
                <div class="form-group">
                    <label for="discount">DISCOUNT:</label>
                    <input type="number" class="form-control" id="discount">
                </div>
                <button type="button" onclick="Save()" class="btn btn-primary"><b>SAVE</b></button>
            </div>
            <div class="col-md-6">
                <table class="table" id="table">
                    <thead>
                        <tr>
                            <th>IMEI</th>
                            <th>BRAND</th>
                            <th>MODEL</th>
                            <th>GST</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody id="tablebody">
                    </tbody>
                </table>
            </div>
        </div>
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