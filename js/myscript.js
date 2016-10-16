$(document).ready(function() {
      $("#add-button").click(addTodo);  
      $(document).on("click",'.material-icons.delete-button', deleteTodo);
      $(document).on("click",'.checkbox', completeTodo);
    });

    function addTodo() {
      console.log("To-do add button clicked");
      var new_todo = $("#user-input").val();
      $("#todo-list").append($('<li>')
            .append($('<input>').attr("type","checkbox").addClass("checkbox"))
            .append($('<p>').text(new_todo))
            .append($('<i>').addClass("material-icons").addClass("delete-button").text("delete"))
       ) 
    };


    function completeTodo(){
        console.log("box checked!");
        $(this).next().toggleClass('stroked');
    }

    function deleteTodo(){
        console.log("delete clicked!"); $(this).parent('div').parent('li').attr("id","tobedeleted");
        $('#deleteModal').modal('show');
        $('#delete-todo-button').on('click', function () {
            $('#tobedeleted').remove();
            $('#deleteModal').modal('hide');
        });
        
//        var r = confirm("Are you sure you want to delete this todo?");
//        console.log(r);
//        if (r == true) {
//            $(this).parent('li').remove();
//        } else {};
    };


