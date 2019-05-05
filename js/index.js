window.onload  = function(){
let tasks = [];
if( window.localStorage.getItem( 'todo-list' ) != null ) {
        tasks = JSON.parse(window.localStorage.getItem('todo-list'));
    }
document.getElementById('reset').onclick = function(){ 
    tasks = [];
    window.localStorage.removeItem('todo-list'); 
    console.log(tasks, window.localStorage.getItem('todo-list'));
};
function getTask() {
    
    let user = document.getElementById('user').value;
    let date = document.getElementById('date').value;
    let task = document.getElementById('task').value;
    if(user && date && task) {
        let tempTask ={};
        tempTask.name = user;
        tempTask.date = date;
        tempTask.task = task;
        tempTask.status = "waiting";
        tempTask.edited = false;
        tasks.push(tempTask);
        window.localStorage.setItem('todo-list',JSON.stringify(tasks) );
    }
    console.log(window.localStorage.getItem('todo-list'), tasks);
}


document.getElementById('submit').addEventListener('click', function(){
    
    getTask();
    console.log(tasks);
});
}