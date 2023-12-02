<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../images/mobile-store.ico" type="/icon type">
    <title>Customer Report</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="../script/customer_report.js"></script>
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
            $("#AdminHeader").load("AdminHeader.html");
        });
    </script>
    <link rel="stylesheet" href="../css/reports.css">
    <link rel="stylesheet" href="../css/header.css">
    <script src="../script/header.js"></script>
</head>

<body>
    <div id="AdminHeader"></div>
    <div class="container">
        <!-- <input class="" type="text" name="" id="aadhar_number"> -->
        <div class="row">
            <div class="input-group mt-3 col-md-12">
                <input type="text" class="form-control" placeholder="Name / Aadhaar Number" id="aadhar_number">
                <div class="input-group-append">
                  <button class="btn btn-success" type="submit" onclick="Search()">Search</button>
                </div>
            </div>
        </div>
        <div class="row d-none" id="table_data">
            <div class="col-md-4"><br>
                <label class="form-control" id="adhar"></label>
            </div>
            <div class="col-md-4"><br>
                <label class="form-control" id="name"></label>
            </div>
            <div class="col-md-4"><br>
                <label class="form-control" id="email"></label>
            </div>
            
            <div class="col-md-12 table-responsive"><br>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>GST</th>
                            <th>Amount</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
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