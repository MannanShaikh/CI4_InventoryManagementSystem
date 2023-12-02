// FUNCTION NAME IN PASCAL CASE
// VARIABLE NAME IN SNAKE CASE

message = "ERROR: Invalid Input";

function Alphabets(alpha, id) {
    /^[A-Za-z\s]*$/.test(alpha) ? "" : (document.getElementById(id).value = "", $(".modal-body").html(message), $('#myModal').modal('show'));
}

function AlphaNumeric(alnum, id) {
    /^[A-Za-z0-9/-]*$/.test(alnum) ? "" : (document.getElementById(id).value = "", $(".modal-body").html(message), $('#myModal').modal('show'));
}

function ContactNumber(num, id) {
    /^[0-9]{10,10}$/.test(num) ? "" : (document.getElementById(id).value = "", $(".modal-body").html(message), $('#myModal').modal('show'));
}

function Password(pas, id) {
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pas) ? "" : (document.getElementById(id).value = "", $(".modal-body").html(message), $('#myModal').modal('show'));
}

function AadhaarLength(al) {
    /^[0-9]{12,12}$/.test(al) ? "" : ($(".modal-body").html("Aadhaar Number Field Requires 12 digits."), $('#myModal').modal('show'));
}

function EmailValidate(ev, id) {
    /^[a-zA-Z0-9!@#$%^&*.]{10,50}$/.test(ev) ? "" : (document.getElementById(id).value = "", $(".modal-body").html(message), $('#myModal').modal('show'));
}

function ImeiLength(al) {
    /^[0-9]{15,15}$/.test(al) ? "" : ($(".modal-body").html("IMEI Number Field Requires 15 digits."), $('#myModal').modal('show'));
}