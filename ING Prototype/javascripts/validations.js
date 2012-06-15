function IsValidIDNumber() {
    var idNumber = $("#txtIdNumber").val();

    if (idNumber == "") {
        $("#divMessage").val("ID Number is required");
        return false;
    }
    else if (!(/^[0-9a-zA-Z]+$/.test(idNumber))) {
        $("#divMessage").val("ID Number should contain alphanumeric only");
        return false;
    }
    else {
        $("#divMessage").val("");
        return true;
    }
}
