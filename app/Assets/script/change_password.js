// FUNCTION NAME IN PASCAL CASE
// VARIABLE NAME IN SNAKE CASE

function Reset()
{
    aadhar = $("#aadhar").val();        // STORE ALL VALUES IN VARIABLES.
    old_password = $("#oldpwd").val();
    new_password = $("#newpwd").val();
    confirm_password = $("#conpwd").val();

    if(aadhar != "" && old_password != "" && new_password != "" && confirm_password != "")  // CHECK IF ALL THE FIELDS ARE FILLED.
    {
        if(new_password == confirm_password)                                                       // CHECK WHETHER BOTH FIELDS ARE SAME OR NOT.
        {
            $.post("../PHP/change_password.php",                                        // AJAX CALL TO PHP FILE
                {
                    aadhar: aadhar,                                             // PARAMETERS IN THE AJAX CALL
                    oldpassword : old_password,
                    confirmpassword: confirm_password
                },
                function(data, status)
                {
                    if(JSON.parse(data) == "Success" && status == "success")
                    {
                        window.location.assign("login.html");                       // IF THE SERVER SENDS SUCCESS THEN REDIRECT TO LOGIN PAGE.
                    }
                    else
                    {
                        $(".modal-body").html("ERROR: "+data);
                        $('#myModal').modal('show');
                    }
                }
            );
        }
        else
        {
            $(".modal-body").html("Passwords mis-match.");
            $('#myModal').modal('show');
            confirm_password.val() = "";            // CLEAR CONIRM PASSWORD FIELD.
            confirm_password.focus();               // FOCUS ON CONIRM PASSWORD FIELD.
        }
    }
    else
    {
        $(".modal-body").html("Field/(s) cannot be empty.");
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