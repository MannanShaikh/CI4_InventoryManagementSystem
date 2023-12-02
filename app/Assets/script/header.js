function LogOut()
{
    $.post(                                 // AJAX CALL.
        "../PHP/header.php",
        {},
        function (data, status) 
        {

            if (status == "success") {
                if (JSON.parse(data) == "Success") {
                    window.location.assign("../AUTHENTICATE/login.html");
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