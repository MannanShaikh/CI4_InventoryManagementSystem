// FUNCTION NAMES IN PASCAL CASE.
// VARIABLE NAMES IN SNAKE CASE.

function Register() {
    emp_name = $("#name").val();                    // STORE ALL TEXTBOX VALUES IN VARIABLES.
    aadhar = $("#aadhar").val();
    email = $("#email").val();
    contact = $("#contact").val();
    password = $("#password").val();
    confirm_password = $("#confirm").val();

    if (emp_name != "" && aadhar != "" && email != "" && contact != "" && password != "" && confirm_password != "")  //CHECK WHETHER FIELDS ARE EMPTY OR NOT.
    {
        if (password == confirm_password)            // CHECK WHETHER BOTH FIELDS ARE SAME.
        {
            $.post(                                 // AJAX CALL.
                "../PHP/employee.php",
                {
                    function_name: "register",       // AJAX CALL PARAMETERS.
                    name: emp_name,
                    aadhar: aadhar,
                    email: email,
                    contact: contact,
                    password: password
                },
                function (data, status) {

                    if (status == "success") {
                        if (JSON.parse(data) == "Success") {
                            $(".modal-body").html("Employee registration completed.");
                            $('#myModal').modal('show');
                            $('.container').find('input').val('');
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
            $(".modal-body").html("Password mis-matched.");
            $('#myModal').modal('show');
            confirm_password.val() = "";
            confirm_password.focus();
        }
    }
    else {
        $(document).ready(function () {
            $(".modal-body").html("Input fields cannot be empty.");
            $('#myModal').modal('show');
        });
    }
}

function Update() {
    emp_name = $("#name").val();                    // STORE ALL TEXTBOX VALUES IN VARIABLES.
    aadhar = $("#aadhar").val();
    email = $("#email").val();
    contact = $("#contact").val();
    status = $('#status').is(':checked');

    status == "true" ? status = '1' : status = '0';

    if (emp_name != "" && aadhar != "" && email != "" && contact != "")  //CHECK WHETHER FIELDS ARE EMPTY OR NOT.
    {
        $.post(                                     // AJAX CALL.
            "../PHP/employee.php",
            {
                function_name: "update",             // AJAX CALL PARAMETERS.
                name: emp_name,
                aadhar: aadhar,
                email: email,
                contact: contact,
                status : status
            },
            function (data, status) {

                if (status == "success") {
                    if (JSON.parse(data) == "Success") {
                        $('.container').find('input').val('');
                        $('#status').prop("checked", false );
                        $(".modal-body").html("Employee Updation Completed.");
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

function HideShow() {
    $(".toggle-password").toggleClass("fa-eye-slash");
    var input = $("#password");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
}

function Search() {
    aadhar = $("#aadhar").val();

    if (aadhar == null || aadhar == "") {
        $(".modal-body").html("Aadhaar field cannot be empty, enter aadhaar number to search.");
        $('#myModal').modal('show');
    }
    else {
        $.post(
            "../PHP/employee.php",
            {
                function_name: "Search",
                aadhar: aadhar
            },
            function (data, status) {
                data = JSON.parse(data);
                data = data[0];
                data['Status'] == 1 ? $('#status').prop("checked", true ) : $('#status').prop("checked", false );
                document.getElementById('name').value = data['EmployeeName'];
                document.getElementById('aadhar').value = data['AadharNumber'];
                document.getElementById('email').value = data['Email'];
                document.getElementById('contact').value = data['ContactNumber'];
            }
        );
    }
}