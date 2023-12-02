$.post(
    "../PHP/product_reports.php",
    { functionName: "GetBrandNames" },
    function (data, status) {
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {

            var card = document.createElement('div');
            card.className = "card";

            var body = document.createElement('div');
            body.className = "card-body";
            

            var brand = document.createElement('brand');
            brand.innerText = data[i]['Brand'];

            var badge = document.createElement('span');
            badge.className = "badge badge-success";
            badge.style="float: right";
            badge.innerText = data[i]['count(1)'];

            var footer = document.createElement('div');
            footer.className = "card-footer";

            var button = document.createElement('button');
            button.className = "btn btn-outline-success";
            // button.style = "width:150px";
            button.innerText = "View Models";
            button.addEventListener("click", Load);

            footer.appendChild(button);
            body.appendChild(brand);
            body.appendChild(badge);
            card.appendChild(body);
            card.appendChild(footer);

            document.getElementsByClassName('card-columns')[0].append(card);
        }
    }
);

function Load() {
    var brand_name = this.parentNode.parentNode.childNodes[0].childNodes[0].innerText;
    $('.card').remove();

    $.post(
        "../PHP/product_reports.php",
        {functionName : "GetModelNames",brandName : brand_name},
        function (data, status) {
            data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
    
                var card = document.createElement('div');
                card.className = "card";
    
                var body = document.createElement('div');
                body.className = "card-body";
                body.innerText = data[i]['Model'];
    
                var badge = document.createElement('span');
                badge.className = "badge badge-secondary";
                badge.style="float: right";
                badge.innerText = data[i]['count(1)'];
    
                
                body.appendChild(badge);
                card.appendChild(body);
    
                document.getElementsByClassName('card-columns')[0].append(card);
            }
        }
    );
}