
function Authenticate() {

    aadhaar_number = $("#aadhar").val();
    password = $("#pwd").val();

    if (aadhaar_number != "" && password != "") {
        $.post("../PHP/login.php",
            {
                aadhaar: aadhaar_number,
                password: password
            },
            function (data, status) {
                if (status == "success") {
                    var role = JSON.parse(data);
                    if (role == "Admin") {
                        window.location.assign("../ADMIN/AdminDashboard.html");
                    }
                    else if (role == "Employee") {
                        window.location.assign("../EMPLOYEE/customerOrder.html");
                    }
                    else {
                        $(".modal-body").html("Invalid Credentials, User not found");
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
        $(".modal-body").html("Input Fields cannot be empty");
        $('#myModal').modal('show');
        $("#username").focus();

    }
}

function HideShow() {
    $(".toggle-password").toggleClass("fa-eye-slash");
    var input = $("#password");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
}