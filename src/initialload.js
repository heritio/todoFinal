let content = document.getElementById("content");


function initialLoadForm(){
   
    let inputDiv = document.createElement("form");
    inputDiv.classList.add("inputinfo");
    
    let labelTitle = document.createElement("h3");
    labelTitle.textContent = "Task name";
    let inputTitle = document.createElement("INPUT");
    inputTitle.setAttribute("type", "text");

    let labelDescription = document.createElement("h3");
    labelDescription.textContent = "description";
    let inputDescription = document.createElement("TEXTAREA");

    let labelDueDate = document.createElement("h3");
    labelDueDate.textContent = "Due Date";
    let inputDate = document.createElement("INPUT");
    inputDate.setAttribute("type", "date");

    let labelPriority = document.createElement("h3");
    labelPriority.textContent = "Priority";
    let inputPriority = document.createElement("SELECT");
    let inputPriorityOption1 = document.createElement("option");
    inputPriorityOption1.value = "1";
    inputPriorityOption1.text = "priority 1 (Red)";
    let inputPriorityOption2 = document.createElement("option");
    inputPriorityOption2.value = "2";
    inputPriorityOption2.text = "priority 2 (Yellow)";
    let inputPriorityOption3 = document.createElement("option");
    inputPriorityOption3.value = "3";
    inputPriorityOption3.text = "priority 3 (Green)";
    inputPriority.add(inputPriorityOption1, null);
    inputPriority.add(inputPriorityOption2, null);
    inputPriority.add(inputPriorityOption3, null);

    let labelNotes = document.createElement("h3");
    labelNotes.textContent = "Notes";
    let inputNotes = document.createElement("TEXTAREA");
    
    let submitBtn = document.createElement("button");
    submitBtn.textContent = "Create";
    submitBtn.classList.add("submitbtn")

    let cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel"
    cancelBtn.classList.add("cancelbtn");

    inputDiv.append(labelTitle);
    inputDiv.append(inputTitle);
    inputDiv.append(labelDescription);
    inputDiv.append(inputDescription);
    inputDiv.append(labelDueDate);
    inputDiv.append(inputDate);
    inputDiv.append(labelPriority);
    inputDiv.append(inputPriority);
    inputDiv.append(labelNotes);
    inputDiv.append(inputNotes);
    inputDiv.append(cancelBtn);
    inputDiv.append(submitBtn);
    
    content.append(inputDiv);

}

function initialProjectForm(){
    let inputProjectDiv = document.createElement("form");
    inputProjectDiv.classList.add("projectform");
    let nameLabel = document.createElement("h3");
    nameLabel.textContent = "Project name";
    let inputFieldName = document.createElement("input");
    inputFieldName.setAttribute("type","text");
   
    inputFieldName.id = "projectnamefield";

    let submitBtn = document.createElement("button");
    submitBtn.textContent = "Create";
    submitBtn.classList.add("submitbtn", "submitbtnproject")

    let cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel"
    cancelBtn.classList.add("cancelbtn", "cancelbtnproject");
    
    
   
    
    inputProjectDiv.append(nameLabel);
    inputProjectDiv.append(inputFieldName);
    inputProjectDiv.append(cancelBtn)
    inputProjectDiv.append(submitBtn);

    content.append(inputProjectDiv);

}

function initialLoadInterface(){
    
    
    let todoInterface = document.createElement("div");
     todoInterface.classList.add("interface");
    let  projectList = document.createElement("div");
    projectList.classList.add("projects");
    projectList.id = "projects";
    let taskDetails = document.createElement("div"); 
    taskDetails.classList.add("details");
    taskDetails.id = "details";

    todoInterface.append(projectList);
    todoInterface.append(taskDetails);

    content.append(todoInterface);

   
}



export  {initialLoadForm ,initialProjectForm, initialLoadInterface};