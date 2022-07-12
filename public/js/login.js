$(document).ready(function() {
    var tmUsername = localStorage.getItem("tmUsername");
    var tmPassword = localStorage.getItem("tmPassword");
    $("#userName").val(tmUsername);
    $("#passInput").val(tmPassword);

    $("#showPassword").click(function() {
        var passInput = $("#passInput");
        
        if(passInput.attr("type") === "password") {
            passInput.attr("type", "text");
        }
        else {
            passInput.attr("type", "password");
        }
    })
    
    $("#rembrMe").click(function() {
        var userName = $("#userName").val();
        var password = $("#passInput").val();
        localStorage.setItem("tmUsername", userName);
        localStorage.setItem("tmPassword", password);
    })
})

