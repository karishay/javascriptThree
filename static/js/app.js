$(document).ready(function(){
    var formSubmitButton = $("#form_submit");
    
    formSubmitButton.on("click", function(event){
        event.preventDefault(); // prevent the browser form submission from happening
        $.ajax({
            url: "/",
            method: "POST",
            data: $("form#todo_list_form").serialize(),
        }).done(function(data){
            var listNode = document.getElementById("todo-list");
            listNode.innerHTML = data;
        }).fail(function(){
            alert('fail!!!');
        });

    });

    var todoSubmitButton = $("#submit-form");
    todoSubmitButton.on("click", function(event){
        event.preventDefault(); // prevent the browser form submission from happening
        $.ajax({
            url: '/todo_lists/'+ document.getElementById("unicorn").value,
            method: "POST",
            data: $("form#todo-item-form").serialize(),
        }).done(function(data){
            var listNode = document.getElementById("todo-list");
            console.log(listNode);
            listNode.innerHTML = data;
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
