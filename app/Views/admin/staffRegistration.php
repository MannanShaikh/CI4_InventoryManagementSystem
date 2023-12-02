<!DOCTYPE html>
<html lang="en">

<head>

    <!-- META DATA -->

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- ICON LINK -->

    <link rel="icon" href="../images/mobile-store.ico" type="/icon type">

    <title>EMPLOYEE</title>

    <!-- CSS -->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">

    <link rel="stylesheet" href="../css/employee.css">

    <link rel="stylesheet" href="../css/header.css">


    <!-- SCRIPTS -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

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


    <script src="../script/toggler.js"></script>
    <script src="../script/employee.js"></script>
    <script src="../script/header.js"></script>
    <script src="../script/validation.js"></script>

</head>

<body>
    <div id="AdminHeader"></div>
    <div class="container">
        <div class="col-md-12">
            <label class="switch">
                <input type="checkbox" id="togBtn">
                <div class="slider round"></div>
            </label>
            <div class="row">
                <div class="form-group col">
                    <label for="name"><b>NAME</b></label>
                    <input type="text" class="form-control" id="name" onblur="Alphabets(this.value, this.id)">
                </div>
                <div class="form-group col">
                    <label for="aadhar"><b>AADHAR NUMBER</b></label>
                    <input type="number" class="form-control" id="aadhar" onblur="AadhaarLength(this.value)">
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <label for="email"><b>EMAIL</b></label>
                    <input type="email" class="form-control" id="email" onblur="EmailValidate(this.value, this.id)">
                </div>
                <div class="form-group col">
                    <label for="contact"><b>CONTACT</b></label>
                    <input type="tel" class="form-control" id="contact" onblur="ContactNumber(this.value, this.id)">
                </div>
            </div>
            <div class="row hideshow">
                <div class="form-group col">
                    <label for="password"><b>PASSWORD</b></label>
                    <input type="password" class="form-control" id="password" onblur="Password(this.value, this.id)">
                    <span toggle="#password" class="fa fa-eye toggle-password" onclick="HideShow()"></span>
                </div>
                <div class="form-group col">
                    <label for="confirm"><b>CONFIRM PASSWORD</b></label>
                    <input type="password" class="form-control" id="confirm" onblur="Password(this.value, this.id)">
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
            <button onclick="Register()" type="button" class="btn btn-primary register"><b>REGISTER</b></button>
            <button onclick="Update()" type="button" class="btn btn-primary update"><b>UPDATE</b></button>
            <button onclick="Search()" type="button" class="btn btn-primary update"><b>SEARCH</b></button>
        </div>
    </div>

    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">ERROR</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
</body>

</html>