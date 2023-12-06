<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="../images/mobile-store.ico" type="image/icon type">
  <title>AUTHNETICATION</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="../css/login.css">

  <script src="../script/login.js"></script>
  <script src="../script/validation.js"></script>

  <!-- ANIMATE CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

</head>

<body>
  <div class="container animate__animated animate__backInDown">
    <form action="/mobile-store/authentication/post" method="post">
      <div class="col-md-12">
        <div class="form-group">
          <label for="aadhar"><b>AADHAR NUMBER</b></label>
          <input type="number" class="form-control" id="aadhar" name="aadhar" onblur="AadhaarLength(this.value)">
        </div>
        <div class="form-group">
          <label for="pwd"><b>PASSWORD</b></label>
          <input type="password" class="form-control" id="pwd" name="pwd" onblur="Password(this.value,this.id)">
          <span toggle="#password" class="fa fa-eye toggle-password" onclick="HideShow()"></span>
        </div>
        <button type="submit" class="btn btn-primary"><b>LOGIN</b></button>
        <a href="forgotPassword.html" style="float: right;">Cannot Login ?</a>
      </div>
    </form>
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