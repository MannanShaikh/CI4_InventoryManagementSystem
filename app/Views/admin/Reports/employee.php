<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../images/mobile-store.ico" type="/icon type">
    <title>Employee Report</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="../script/employee_reports.js"></script>
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
    <link rel="stylesheet" href="../css/header.css">
    <script src="../script/header.js"></script>
</head>

<body>
    <div id="AdminHeader"></div>
    <div class="container" id="cards">
        <div class="row" style="padding: 15px !important;"></div>
    </div>


    <div class="container d-none" id="table">
        <input type="date" name="" id="from">
        <input type="date" name="" id="to">
        <input class="btn" type="button" value="Search" onclick="FilterSearch()"><br>
        <label id="name"></label><br>
        <label id="aadhar"></label><br>
        <label id="contact"></label><br>
        <label id="email"></label><br>
        <label id="status"></label><br>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
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