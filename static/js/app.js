$(document).ready(function(){
    var formSubmitButton = $("#form_submit");

    formSubmitButton.on("click", function(event){
        event.preventDefault(); // prevent the browser form submission from happening
        $.ajax({
            url: "/",
            method: "POST",
            data: $("form#todo_list_form").serialize(),
        }).done(function(data){
            console.log(data);
        }).fail(function(){
            alert('fail!!!');
        });

    });

    var getListsFromServer = function() {
        $.ajax({
            url:'/todo_lists/poll',
            method: "GET"
        }).done(function(data){
            //add the fucking names to the dom
            var listNode = document.getElementById("todo-list");
            listNode.innerHTML = data;
        });
    };


});