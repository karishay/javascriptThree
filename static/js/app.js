$(document).ready(function(){
    var formSubmitButton = $("#form_submit");
    // button listener that uses ajax to add a new list item 
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

    // button listener that uses ajax to add a new to do item to the list item
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

    //button listener that uses ajax to a
    var seeTodoItems = $("label.todo-list");
    seeTodoItems.on("click", function(event){
        event.preventDefault();
        console.log(event.currentTarget.id);

        // prevent the browser form submission from happening
        $.ajax({
            url: '/todo_lists/'+ event.currentTarget.id,
            method: "GET",
            //we're gonna need different data
            data: $("#todo-list").serialize(),
        }).done(function(data){
            var listNode = document.getElementsByTagName("body")[0];
            console.log(listNode);
            //add a button html in string here
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

