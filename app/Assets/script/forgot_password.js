// FUNCTION NAME IN PASCAL CASE
// VARIABLE NAME IN SNAKE CASE

function SendMail() 
{
    aadhaar = $("#aadhar").val();
    if (aadhaar != "") 
    {
        $.post('../PHP/forgot_password.php',
            {
                aadhaar: aadhaar
            },
            function (data, status)
            {
                var result = JSON.parse(data);
                if(result == "success" && status == "success")
                {
                    window.location.assign("../AUTHENTICATE/changePassword.html");
                }
                else
                {
                    $(".modal-body").html("ERROR: "+data);
                    $('#myModal').modal('show');
                    $("#aadhar").focus();
                }
            }
        );
    }
    else 
    {
        $(".modal-body").html("Input field is empty, please enter Aadhaar number.");
        $('#myModal').modal('show');
        $("#aadhar").focus();
    }
}