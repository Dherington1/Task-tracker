
// create a variable to hold the new element 
var tasksToDoEl = document.querySelector("#tasks-to-do");
//connect button to a variable 
// this is attached to a big id however since the button has a type="submit" were able to grab onto it in the event listener with a submit input 
var formEl = document.querySelector("#task-form")

// must make function before calling it in the listener
var taskFormHandler = function (event){
    // we're instructing the browser to not carry out its default behavior to refresh after every task input
    event.preventDefault();

    // create the variable that reads the input from the user 
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // create the variable that reads the task type 
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // Check if input values are empty strings 
    if (!taskNameInput || !taskTypeInput){
        alert("You need to fill out the task form!");
        return false;
    }

    // resets the text boxes
    formEl.reset();

    // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  // makes the creatTaskEl run when the button is pressed 
  createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj){
    // create element to attach to the ul 
    var listItemEl = document.createElement("li");
    // give the element the same CSS styles 
    listItemEl.className = "task-item";


    // create a div to hold the task info (name and type)
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    // youre creating the H3 tag and putting informaiton into it 
    // shows split because of span
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    
    // use the listItemEl to connect to the page 
    listItemEl.appendChild(taskInfoEl);

    // now paste new function on page 
    tasksToDoEl.appendChild(listItemEl);
}


// add a listener so the click works when click
formEl.addEventListener("submit", taskFormHandler);
