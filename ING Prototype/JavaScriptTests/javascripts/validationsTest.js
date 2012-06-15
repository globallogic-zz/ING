// Test data
var blankId = "";
var invalidId = "!@#$%^&*()";
var Id = "ABC123";

// Create User Test Module
module("User Login", {
    setup: function () {
        // runs before each test in this module
        $('#qunit-fixture').append('<input type="text" id="txtIdNumber" />');
        $('#qunit-fixture').append('<input type="button" id="btnSubmit" value="Login" onclick="javascript: return IsValidIDNumber();" />');

        $('#qunit-fixture').append('<div id="divMessage"></div>');
    },
    teardown: function () {
        // runs after each test
    }
});

// Test whether a validation message is shown when ID Number is not entered
test("Validation message is shown when ID Number is not entered i.e blank", function () {
    expect(1);

    // Input ID Number
    $('#txtIdNumber').val(blankId);

    // Trigger onClick event of submit button to execute validations
    $('#btnSubmit').trigger('click');

    var isValid = $('#divMessage').val() == undefined || $('#divMessage').val().indexOf("ID Number is required") != -1 ? true : false;
    ok(isValid, "'ID Number is required' error to be displayed.");
});

// Test whether a validation message is shown when invalid ID Number is provided
test("Validation message is shown when ID Number doesn't contain alphanumeric", function () {
    expect(1);

    // Input ID Number
    $('#txtIdNumber').val(invalidId);

    // Trigger onClick event of submit button to execute validations
    $('#btnSubmit').trigger('click');

    var isValid = $('#divMessage').val() == undefined || $('#divMessage').val().indexOf("ID Number should contain alphanumeric only") != -1 ? true : false;
    ok(isValid, "'ID Number should contain alphanumeric only' error message to be displayed");
});

// Test whether a validation is not shown when valid ID Number is provided
test("No validation message shown when valid ID Number is provided", function () {
    expect(1);

    // Input ID Number
    $('#txtIdNumber').val(Id);

    // Trigger onClick event of submit button to execute validations
    $('#btnSubmit').trigger('click');

    var isValid = $('#divMessage').val() == undefined || $('#divMessage').val().indexOf("") != -1 ? true : false;
    ok(isValid, "Valid ID Number is entered");
});
