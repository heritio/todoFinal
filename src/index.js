import {initialLoadForm, initialLoadInterface, initialProjectForm, changeNameMsg} from "./initialload";


initialLoadForm();
initialProjectForm();
initialLoadInterface();
changeNameMsg();



let projectFolders = document.querySelector("#projects");






const ourTasks = (() => {
    let _ourProjects = [{projectTitle: "Default project folder",
                       
                      tasks: [{title: "Task one", 
                      description: "this task goes like this", 
                      dueDate: "2021-07-22", priority: "2", 
                      notes: "these are the notes", checklist: false},{title: "Task Two", 
                      description: "this task goes like this", 
                      dueDate: "2021-07-22", priority: "2", 
                      notes: "these are the notes", checklist: false},
                      {title: "Task three", 
                      description: "this task goes like this and this", 
                      dueDate: "2021-03-26", priority: "1", 
                      notes: "these are the notes for this other one", checklist: false}]}];
        
    
  
       return {
         
        createProject(ourProjectTitle){
          _ourProjects.push({ourProjectTitle, tasks: []})
        },
        
        newTask(title,description,dueDate,priority,notes,checklist = false,projectTitle){
           let ourTask = {title, description,dueDate,priority,notes,checklist};
           
           for(let i = 0; i < _ourProjects.length; i++){
             if(_ourProjects[i].projectTitle == projectTitle){
              _ourProjects[i].tasks.push(ourTask);
             }
             
           }
        },
        
         getList(){
          return _ourProjects;
        },
        
        getFolderName(){
          return _ourProjects.map(folder => folder.projectTitle);
        },
  
        
        getTitle(ProjectFolderName){
          for(let r = 0; r < _ourProjects.length; r++){
            if(_ourProjects[r].projectTitle == ProjectFolderName){
              let tittleArr = _ourProjects[r].tasks.map(taskList => taskList.title);
              return tittleArr;
            }
            
          }
        },
  
        getTask(ourTaskTittle, folderName){
           for(const folder of _ourProjects){
             if(folder.projectTitle == folderName){
               for(const task of folder.tasks){
                 if(task.title == ourTaskTittle){
                   return task;
                 }
               }
             }
           }
        },
  
        getLastProjectTitle(){
          return _ourProjects[_ourProjects.length - 1].projectTitle;
        },

        renderProjects(){
            let projectsDisplay = document.querySelector(".projects");
            
            let ourlist = _ourProjects;
            
            
              for(let k = 0; k < ourlist.length; k++){
                  let projectDiv = document.createElement("div");
                  let projectName = document.createElement("button");
                  let tasksDiv = document.createElement("div");
                  tasksDiv.classList.add("content");
                  projectName.classList.add("collapsible")
                  projectName.textContent = ourlist[k].projectTitle;
                  projectDiv.id = k;
                  projectDiv.classList.add("projectdiv");
                  projectDiv.append(projectName);
                  projectDiv.append(tasksDiv);
                  projectsDisplay.append(projectDiv);
              }
            
                let newProjectBtn = document.createElement("button");
                newProjectBtn.textContent = "+ Add Project";
                newProjectBtn.classList.add("newprojectbtn");
                projectsDisplay.append(newProjectBtn);
              
            
        },

        renderTasksCollapsibleContainer(){
            let ourlist = _ourProjects;
          
            
           var coll = document.querySelectorAll(".collapsible");
          
          for (let l = 0; l < coll.length; l++) {
            coll[l].addEventListener("click", function() {
              this.classList.toggle("active");
              var content = this.nextElementSibling;
              if (content.style.display === "block") {
                content.style.display = "none";
              } else {
                content.style.display = "block";
              }
            });
          }
          
        },

        renderTasksTittle(){
            var coll = document.querySelectorAll(".collapsible");
            for(let p = 0; p < coll.length; p++){
              let projectFolderName = coll[p].textContent;
              let ourTitlesArr = ourTasks.getTitle(projectFolderName);
              for(let u = 0; u < ourTitlesArr.length; u++){
                let titleElem = document.createElement("h3");
                titleElem.textContent = String(ourTitlesArr[u]);
                titleElem.classList.add("pointerstyle");
                titleElem.setAttribute("data-folder", coll[p].textContent)
                coll[p].nextElementSibling.append(titleElem);
              }
              let newTaskBtn = document.createElement("button");
              newTaskBtn.textContent = "+ Add Task";
              newTaskBtn.classList.add("newtaskbtn");
              coll[p].nextElementSibling.append(newTaskBtn);
            }

        },

        renderTasksDetail(ourTaskTittle,folderName){
            let ourDetailsDiv = document.querySelector(".details"); 
            let ourDetails = ourTasks.getTask(ourTaskTittle,folderName);
        
            let ourNewDetails = document.createElement("div");
            ourNewDetails.classList.add("details");
        
            let ourTitle = document.createElement("h3");
            ourTitle.textContent = "title: " + ourDetails.title;
            let ourDescription = document.createElement("h4");
            ourDescription.textContent = "Description: " + ourDetails.description;
            let ourDueDate = document.createElement("h4");
            ourDueDate.textContent = "Due Date: " + ourDetails.dueDate;
            let ourPriority = document.createElement("h4");
            ourPriority.textContent = "Priority: " + ourDetails.priority;
            let ourNotes = document.createElement("h4");
            ourNotes.textContent = "Notes: " + ourDetails.notes;
            
            ourNewDetails.append(ourTitle);
            ourNewDetails.append(ourDescription);
            ourNewDetails.append(ourDueDate);
            ourNewDetails.append(ourPriority);
            ourNewDetails.append(ourNotes);
        
            ourDetailsDiv.replaceWith(ourNewDetails);
        
        
        },

        renderNewProject(title){
   
            let projectDivs = document.getElementsByClassName("projectdiv");
        
            let projectsDisplay = document.querySelector(".projects");
            let newProjectBtn = document.querySelector(".newprojectbtn");
        
          
              let projectDiv = document.createElement("div");
              let projectName = document.createElement("button");
              let tasksDiv = document.createElement("div");
              
              projectName.classList.add("collapsible")
              tasksDiv.classList.add("content");
              projectName.textContent = title;
        
              ourTasks.createProject(title);
        
           
              projectDiv.id = projectDivs.length;
        
              projectDiv.classList.add("projectdiv");
             
              
              projectDiv.append(projectName);
                  
              
              let newTaskBtn = document.createElement("button");
              newTaskBtn.textContent = "+ Add Task";
              newTaskBtn.classList.add("newtaskbtn");
              tasksDiv.append(newTaskBtn);
        
              projectsDisplay.insertBefore(projectDiv, newProjectBtn);
              projectDiv.append(tasksDiv);
            
          
        },


        replaceProjects(newFolderName){
            let newFolder = {projectTitle:newFolderName, tasks:[]};
            _ourProjects.push(newFolder);

            let projectsDisplay = document.querySelector(".projects");
            let detailsDisplay = document.querySelectorAll(".pointerStyle");

            
            let ourlist = _ourProjects;
              
               let updatedProjectList = document.createElement("div");
            
              for(let k = 0; k < ourlist.length; k++){
                  let projectDiv = document.createElement("div");
                  let projectName = document.createElement("button");
                  let tasksDiv = document.createElement("div");
                  tasksDiv.classList.add("content");
                  projectName.classList.add("collapsible")
                  projectName.textContent = ourlist[k].projectTitle;
                  projectDiv.id = k;
                  projectDiv.classList.add("projectdiv");
                  projectDiv.append(projectName);
                  projectDiv.append(tasksDiv);
                  updatedProjectList.append(projectDiv);
              }
            
                let newProjectBtn = document.createElement("button");
                newProjectBtn.textContent = "+ Add Project";
                newProjectBtn.classList.add("newprojectbtn");
                updatedProjectList.append(newProjectBtn);
                projectsDisplay.replaceWith(updatedProjectList);
                updatedProjectList.classList.add("projects");

                newProjectBtn.addEventListener("click", () => {
                    projectForm.classList.add("spawn");
                });              

                updatedProjectList.addEventListener("click", function(e) {
                    if(!e.target.classList.contains("pointerstyle")){
                        return;
                    }
                    ourTasks.renderTasksDetail(e.target.textContent, e.target.getAttribute("data-folder"));
                });

                let ourProjectsFolders = document.querySelectorAll(".projects")

                ourProjectsFolders.forEach(e => e.addEventListener("click", function(e){
                if(!e.target.classList.contains("newtaskbtn")){
                return;
               }
                    let ourInputField = document.querySelector(".inputinfo");
                    ourInputField.classList.add("spawn");
                }));

                

                initialLoadForm();
                
                
                
        },

        renderNewTask(title,description,dueDate,priority,notes,ourFolderName){
            
            for(let i = 0; i < _ourProjects.length; i++){
                if(_ourProjects[i].projectTitle == ourFolderName){
                    _ourProjects[i].tasks.push({title, description, dueDate, priority, notes, checklist: false});
                }else{
                    continue;
                }
            }


            
        },
        updateTasksTitle(ourFolderName, ourTitle){
            let targetFolder = document.querySelectorAll(".content");
            for(let i = 0; i < targetFolder.length; i++){
              if(targetFolder[i].parentElement.textContent == ourFolderName){
                let ourTitleElem = document.createElement("h3");
                ourTitleElem.textContent = ourTitle;
                ourTitleElem.classList.add("pointerstyle");
                targetFolder[i].prepend(ourTitleElem);
                targetFolder.setAttribute("data-folder", ourFolderName);
              }else{
                continue;
              }
            }
            
        },

        reRenderTasks(ourFolderName){
         let ourFoldersList = document.querySelectorAll(".collapsible");
         let ourTasksNames = this.getTitle(ourFolderName);
        
         let newDiv = document.createElement("div");
         for(let t = 0; t < ourFoldersList.length; t++){
            let targetContentDiv = ourFoldersList[t].nextElementSibling;
             if(ourFoldersList[t].textContent == ourFolderName){
               for(let y = 0; y < ourTasksNames.length; y++){
                let ourTitleNode = document.createElement("h3");
                ourTitleNode.textContent = ourTasksNames[y];
                ourTitleNode.classList.add("pointerstyle");
                ourTitleNode.setAttribute("data-folder", ourFolderName);
                newDiv.append(ourTitleNode);
               }
               let newTaskBtn = document.createElement("button");
                newTaskBtn.textContent = "+ Add Task";
                newTaskBtn.classList.add("newtaskbtn");
                newDiv.append(newTaskBtn);
                targetContentDiv.replaceWith(newDiv); 
                newDiv.classList.add("collapsible");

             }

         }
         
           
        }
         
        
       };
})();



  ourTasks.renderProjects();
  ourTasks.renderTasksCollapsibleContainer();
  ourTasks.renderTasksTittle();
  
  
let newProjectBtn = document.querySelector(".newprojectbtn");
let cancelBtnProject = document.querySelector(".cancelbtnproject");
let submitBtnProject = document.querySelector(".submitbtnproject");
let projectInputField = document.getElementById("projectnamefield");
let projectForm = document.querySelector(".projectform");
let ourProjectsFolders = document.querySelectorAll(".projects")
let cancelBtnInfoInput = document.querySelector(".cancelbtninfo");
let createBtnInfoInput = document.querySelector(".submitbtninfo");

ourProjectsFolders.forEach(e => e.addEventListener("click", function(e){
    if(!e.target.classList.contains("newtaskbtn")){
        return;
    }
    let ourInputField = document.querySelector(".inputinfo");
    ourInputField.classList.add("spawn");
}));

cancelBtnInfoInput.addEventListener("click", (e)=> {
   e.preventDefault();
    let inputInfoForm = document.querySelector(".inputinfo");
    inputInfoForm.classList.remove("spawn");
})


projectFolders.addEventListener("click", function(e) {
    if(!e.target.classList.contains("pointerstyle")){
        return;
    }
    ourTasks.renderTasksDetail(e.target.textContent, e.target.getAttribute("data-folder"));
});



newProjectBtn.addEventListener("click", () => {
    projectForm.classList.add("spawn");
});

cancelBtnProject.addEventListener("click", (e) => {
    e.preventDefault();
    projectInputField.value = "";
    projectForm.classList.remove("spawn");
});

submitBtnProject.addEventListener("click", (e) => {
    e.preventDefault();
    let errormsg = document.querySelector(".nameerrorpopup");
    let listToCheck = ourTasks.getList();
    if(listToCheck.some(listToCheck => listToCheck.projectTitle === projectInputField.value)){
       errormsg.classList.add("spawn");
       return;
    }else if(projectInputField.value == ""){
        return;
    }

   ourTasks.replaceProjects(projectInputField.value);
   ourTasks.renderTasksCollapsibleContainer();
   ourTasks.renderTasksTittle();
  
   projectForm.classList.remove("spawn");

   updateFolderSelection();
 
});


(function addFolderSelection(){
    let parentItem = document.querySelector(".inputinfo");
    let childToIsertBefore = document.querySelector(".cancelbtninfo");
     
    let folderNames = document.getElementsByClassName("collapsible");

    let labelFolderSelection = document.createElement("h3");
    labelFolderSelection.textContent = "Folder";
    let folderSelection = document.createElement("SELECT");
    for(let t = 0; t < Array.from(folderNames).length; t++){
      let ourOption = document.createElement("OPTION");
      ourOption.value = folderNames[t].textContent;
      ourOption.text = folderNames[t].textContent;
      folderSelection.add(ourOption, null);
    }
    folderSelection.classList.add("folderselection");

    parentItem.insertBefore(folderSelection, childToIsertBefore);
 
})();


function updateFolderSelection(){
    let parentItem = document.querySelector(".inputinfo");
    let childToReplace = document.querySelector(".folderselection");
     
    let folderNames = document.getElementsByClassName("collapsible");

    let labelFolderSelection = document.createElement("h3");
    labelFolderSelection.textContent = "Folder";
    let folderSelection = document.createElement("SELECT");
    for(let t = 0; t < Array.from(folderNames).length; t++){
      let ourOption = document.createElement("OPTION");
      ourOption.value = folderNames[t].textContent;
      ourOption.text = folderNames[t].textContent;
      folderSelection.add(ourOption, null);
    }
   
    folderSelection.classList.add("folderselection");
    childToReplace.replaceWith(folderSelection);
}



createBtnInfoInput.addEventListener("click", function(e){
    e.preventDefault();
    
    let ourTitle = document.querySelector(".titleinputvalue");
    let description = document.querySelector(".descriptioninputvalue");
    let dueDate = document.querySelector(".dateinputvalue");
    let priority = document.querySelector(".priorityinputvalue");
    let notes = document.querySelector(".notesinputvalue");
    let ourFolderName = document.querySelector(".folderselection");
    
    if(ourTitle.value == ""){
        return;
    }
    
    ourTasks.renderNewTask(ourTitle.value, description.value, dueDate.value, priority.value,notes.value, ourFolderName.value);
    ourTasks.reRenderTasks(ourFolderName.value);
    
});

