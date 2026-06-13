let todo = [];
let req = prompt("Enter The Request You Want to perform");

while(true){
    if(req == "add"){
        let task = prompt("Enter the task You want to add");
        todo.push(task);
        console.log("Task Added");
    }

    else if(req=="list"){
        console.log("-----------------------------------------------");
        for(tasks of todo){
            console.log(tasks);
        }
        console.log("-----------------------------------------------");
    }

    else if(req=="delete"){
        let idx = promtp("Enter the Task no. you want to delete[0-(n-1)]");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }

    else if(req == "quit"){
        console.log("You quit the app");
        break;
    }
    req = prompt("Enter Your Request Agian");
}