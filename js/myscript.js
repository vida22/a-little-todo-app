$(document).ready(function() {
      $("#add-button").click(addTodo);  
      $(document).on("click",'.material-icons.delete-button', deleteTodo);
      $(document).on("click",'.checkbox', completeTodo);
    });


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
      
      $('#addTodoModal').modal('hide');

      
        
      $("#" + due_class).
      append($('<li>')
            .append($('<input>').attr("type","checkbox").addClass("checkbox"))
            .append($('<p>').attr("class","myp").text(new_todo))
            .append($('<div>').attr('class','todo-options')
                    .append($('<div>').addClass('list-name')
                           .append($('<div>').addClass('circle').addClass(project_class))
                           .append($('<h3>').addClass('myh3').text(todo_project)))
                    .append($('<i>').addClass("material-icons").addClass("delete-button").text("delete")))
            )
                             
    };


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


