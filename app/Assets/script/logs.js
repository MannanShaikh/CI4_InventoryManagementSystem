$.post(
    "../PHP/logs.php",
    {functionName : "GetFileNames"},
    function (data, status) {
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {

            var card = document.createElement('div');
            card.className = "card col-md-12";
            card.style = "width:400px;padding:10px; margin-bottom:10px !important;";

            var body = document.createElement('div');
            body.className="card-body";
            body.innerText = data[i];
            card.appendChild(body);

            var button = document.createElement('a');
            button.className = "btn btn-outline-light text-dark";
            button.style = "width:150px;";
            button.innerText = "View More";
            button.addEventListener("click", Load);
            card.appendChild(button);

            document.getElementsByClassName('row')[0].append(card);
        }
    }
);

function Load() {
    var file_name = this.parentNode.childNodes[0].innerText;

    $.post(
        "../PHP/logs.php",
        {functionName : "GetFileData",fileName : file_name},
        function (data, status) {
            data = JSON.parse(data);
            $(".modal-body").html(data);
            $('#myModal').modal('show');
        }
    );
}