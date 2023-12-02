<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../images/mobile-store.ico" type="image/icon type">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>PRODUCT</title>
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
            $("#Header").load("../EMPLOYEE/EmployeeHeader.html");
        });
    </script>
    <link rel="stylesheet" href="../css/product.css">
    <link rel="stylesheet" href="../css/header.css">
    <script src="../script/product.js"></script>
    <script src="../script/header.js"></script>
    <script src="../script/toggler.js"></script>

    <!-- ANIMATE CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

</head>

<body>
    <div id="Header"></div>
    <div class="container animate__animated animate__backInDown">
        <div class="col-md-12">
            <label class="switch">
                <input type="checkbox" id="togBtn">
                <div class="slider round"></div>
            </label>
            <div class="row">
                <div class="form-group col">
                    <label for="imei"><b>IMEI</b></label>
                    <input type="number" class="form-control" id="imei" onblur="ImeiLength(this.value)">
                </div>
                <div class="form-group col">
                    <label for="brand"><b>BRAND</b></label>
                    <input type="text" class="form-control" id="brand" onblur="Alphabets(this.value, this.id)">
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <label for="model"><b>MODEL</b></label>
                    <input type="text" class="form-control" id="model" onblur="AlphaNumeric(this.value, this.id)">
                </div>
                <div class="form-group col">
                    <label for="price"><b>PRICE</b></label>
                    <input type="number" class="form-control" id="price">
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value="" id="status"><b>STATUS</b>
                        </label>
                    </div>
                </div>
            </div>
            <button type="button" onclick="Register()" class="btn btn-primary register"><b>REGISTER</b></button>
            <button type="button" onclick="Update()" class="btn btn-primary update"><b>UPDATE</b></button>
            <button onclick="Search()" type="button" class="btn btn-primary update"><b>SEARCH</b></button>
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