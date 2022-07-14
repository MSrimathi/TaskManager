$(document).ready(function() {
    $("#addBtn").click(function() {
        // alert("Added");
        location.href = "/users/add";
    })

    $("#delBtn").click(function() {
        var checkCount = ($(":checkbox:checked").length);

        if(checkCount != 1) {
            alert("Please select one checkbox");
            return;
        }
        var result = confirm("Are you sure want to delete user");

        if(!result) {
            return;
        }
        alert("task deleted successfully");
    })

    $("#edBtn").click(function() {
        var checkCount = ($(":checkbox:checked").length);

        if(checkCount != 1) {
            alert("Please select one checkbox");
            return;
        }

        location.href = '/users/edit';
})
})
