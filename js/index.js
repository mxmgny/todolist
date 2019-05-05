window.onload  = function(){
    let tasks = [];
    if( window.localStorage.getItem( 'todo-list' ) != null ) {
            tasks = JSON.parse(window.localStorage.getItem('todo-list'));
            printTasks();
        }
    document.getElementById('reset').onclick = function(){ 
        tasks = [];
        window.localStorage.removeItem('todo-list'); 
        printTasks()
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
    }
    
    function printTasks() {
        let out = '';
        for(let key in tasks){
            out += `<li>${tasks[key].name} | ${tasks[key].date} | ${tasks[key].task}</li>`;
        }
        document.getElementById('task-list').innerHTML =out;
    }
    
    
    document.getElementById('submit').addEventListener('click', function(){
        
        getTask();
        printTasks();
    });
    }