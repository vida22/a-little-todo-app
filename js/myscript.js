$(document).ready(function() {
      //add todo
      $("#add-button").click(addTodo);  
      //deelte todo
      $(document).on("click",'.material-icons.delete-button', deleteTodo);
      //show and hide placeholder text for cards
      checkTodos();
      $(document).on("click",'#delete-todo-button', checkTodos)
      //complete todo
      $(document).on("click",'.checkbox', completeTodo);
      //reset modal
      $('.modal').on('hidden.bs.modal', resetModal);
    });

//Show/hide placeholder text for cards
function checkTodos(){
    //show and hide today's placeholder
    if ($('#today').children('li').length > 0){
        console.log("Has todos in Today");
        $("#todayplaceholder").hide();
    } else {
        $("#todayplaceholder").show();
        console.log("No todos in Today");
    };
    //show and hide tomorrow placeholder
    if ($('#tomorrow').children('li').length > 0){
        console.log("Has todos in Tomororw");
        $("#tomorrowplaceholder").hide();
    } else {
        $("#tomorrowplaceholder").show();
        console.log("No todos in Tomorrow");
    };
    //show and hide next 7 days placeholder
    if ($('#next7days').children('li').length > 0){
        console.log("Has todos in Next 7 days");
        $("#nextplaceholder").hide();
    } else {
        $("#nextplaceholder").show();
        console.log("No todos in Next 7 days");
    };
}


//Add Todo

    function addTodo() {
      console.log("To-do add button clicked");
      var new_todo = $("#todo-title").val();
      var todo_project = $("#project").find("option:selected").val();
      var todo_due = $("#due").find("option:selected").val();
    
      //remove space and make lowercase
      project_class = todo_project.replace(/\s/g, '').toLowerCase();
      due_class = todo_due.replace(/\s/g, '').toLowerCase();
    
      console.log(project_class, due_class);
      
      //hide modal
      
      $('#addTodoModal').modal('hide');
      
      //append todo
      $("#" + due_class)
      .append($('<li>')
            .append($('<input>').attr("type","checkbox").addClass("checkbox"))
            .append($('<p>').attr("class","myp").text(new_todo))
            .append($('<div>').attr('class','todo-options')
                    .append($('<div>').addClass('list-name')
                           .append($('<div>').addClass('circle').addClass(project_class))
                           .append($('<h3>').addClass('myh3').text(todo_project)))
                    .append($('<i>').addClass("material-icons").addClass("delete-button").text("delete")))
            )
      checkTodos(); 
    };


//reset modal
    function resetModal(){
      console.log("Reset modal");
      $("#notes").val('');
      $("#todo-title").val('');
      $("#project").val('Personal');
      $("#due").val('Today');
    }



//Complete Todo 

    function completeTodo(){
        console.log("box checked!");
        $(this).next().toggleClass('stroked');
    }


//Delete Todo

    function deleteTodo(){
        console.log("delete clicked!"); $(this).parent('div').parent('li').attr("id","tobedeleted");
        $('#deleteModal').modal('show');
        $('#delete-todo-button').on('click', function () {
            $('#tobedeleted').remove();
            $('#deleteModal').modal('hide');
        });
    };


