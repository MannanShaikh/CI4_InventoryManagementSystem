<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../images/mobile-store.ico" type="/icon type">
    <title>Sales Report</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="../script/sale_report.js"></script>
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
<body onload="CurrentSearch()">
    <div id="AdminHeader"></div>
    <div class="container">
        <input type="date" name="" id="from">
        <input type="date" name="" id="to">
        <input class="btn btn-primary" type="button" value="Search" onclick="Search()">
        <table class="table" id="table_data">
            <thead>
                <tr>
                    <th>Aadhaar Number</th>
                    <th>Name</th>
                    <th>Email</th>
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
</body>