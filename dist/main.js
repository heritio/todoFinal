(()=>{"use strict";let e=document.getElementById("content");!function(){let t=document.createElement("form");t.classList.add("inputinfo");let n=document.createElement("h3");n.textContent="Task name";let l=document.createElement("INPUT");l.setAttribute("type","text");let o=document.createElement("h3");o.textContent="description";let s=document.createElement("TEXTAREA"),a=document.createElement("h3");a.textContent="Due Date";let c=document.createElement("INPUT");c.setAttribute("type","date");let r=document.createElement("h3");r.textContent="Priority";let d=document.createElement("SELECT"),i=document.createElement("option");i.value="1",i.text="priority 1 (Red)";let p=document.createElement("option");p.value="2",p.text="priority 2 (Yellow)";let u=document.createElement("option");u.value="3",u.text="priority 3 (Green)",d.add(i,null),d.add(p,null),d.add(u,null);let m=document.createElement("h3");m.textContent="Notes";let h=document.createElement("TEXTAREA"),E=document.createElement("button");E.textContent="Create",E.classList.add("submitbtn");let k=document.createElement("button");k.textContent="Cancel",k.classList.add("cancelbtn"),t.append(n),t.append(l),t.append(o),t.append(s),t.append(a),t.append(c),t.append(r),t.append(d),t.append(m),t.append(h),t.append(k),t.append(E),e.append(t)}(),function(){let t=document.createElement("form");t.classList.add("projectform");let n=document.createElement("h3");n.textContent="Project name";let l=document.createElement("input");l.setAttribute("type","text"),l.id="projectnamefield";let o=document.createElement("button");o.textContent="Create",o.classList.add("submitbtn","submitbtnproject");let s=document.createElement("button");s.textContent="Cancel",s.classList.add("cancelbtn","cancelbtnproject"),t.append(n),t.append(l),t.append(s),t.append(o),e.append(t)}(),function(){let t=document.createElement("div");t.classList.add("interface");let n=document.createElement("div");n.classList.add("projects"),n.id="projects";let l=document.createElement("div");l.classList.add("details"),l.id="details",t.append(n),t.append(l),e.append(t)}();let t=document.querySelector("#projects");const n=(()=>{let e=[{projectTitle:"Default project folder",tasks:[{title:"Task one",description:"this task goes like this",dueDate:"2021-07-22",priority:"2",notes:"these are the notes",checklist:!1},{title:"Task Two",description:"this task goes like this",dueDate:"2021-07-22",priority:"2",notes:"these are the notes",checklist:!1},{title:"Task three",description:"this task goes like this and this",dueDate:"2021-03-26",priority:"1",notes:"these are the notes for this other one",checklist:!1}]},{projectTitle:"New project folder",tasks:[{title:"Task four",description:"this task goes like this",dueDate:"2021-07-22",priority:"2",notes:"these are the notes",checklist:!1},{title:"Task five",description:"this task goes like this and this",dueDate:"2021-03-26",priority:"1",notes:"these are the notes for this other one",checklist:!1}]},{projectTitle:"New project folder",tasks:[{title:"Task four",description:"this task goes like this",dueDate:"2021-07-22",priority:"2",notes:"these are the notes",checklist:!1},{title:"Task five",description:"this task goes like this and this",dueDate:"2021-03-26",priority:"1",notes:"these are the notes for this other one",checklist:!1}]}];return{createProject(t){e.push({ourProjectTitle:t,tasks:[]})},newTask(t,n,l,o,s,a=!1,c){let r={title:t,description:n,dueDate:l,priority:o,notes:s,checklist:a};for(let t=0;t<e.length;t++)e[t].projectTitle==c&&e[t].tasks.push(r)},getList:()=>e,getFolderName:()=>e.map((e=>e.projectTitle)),getTitle(t){for(let n=0;n<e.length;n++)if(e[n].projectTitle==t)return e[n].tasks.map((e=>e.title))},getTask(t,n){for(const l of e)if(l.projectTitle==n)for(const e of l.tasks)if(e.title==t)return e},getLastProjectTitle:()=>e[e.length-1].projectTitle,renderProjects(){let t=document.querySelector(".projects"),n=e;for(let e=0;e<n.length;e++){let l=document.createElement("div"),o=document.createElement("button"),s=document.createElement("div");s.classList.add("content"),o.classList.add("collapsible"),o.textContent=n[e].projectTitle,l.id=e,l.classList.add("projectdiv"),l.append(o),l.append(s),t.append(l)}let l=document.createElement("button");l.textContent="+ Add Project",l.classList.add("newprojectbtn"),t.append(l)},renderTasksCollapsibleContainer(){var e=document.querySelectorAll(".collapsible");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}))},renderTasksTittle(){var e=document.querySelectorAll(".collapsible");for(let t=0;t<e.length;t++){let l=e[t].textContent,o=n.getTitle(l);for(let n=0;n<o.length;n++){let l=document.createElement("h3");l.textContent=String(o[n]),l.classList.add("pointerstyle"),l.setAttribute("data-folder",e[t].textContent),e[t].nextElementSibling.append(l)}let s=document.createElement("button");s.textContent="+ Add Task",s.classList.add("newtaskbtn"),e[t].nextElementSibling.append(s)}},renderTasksDetail(e,t){let l=document.querySelector(".details"),o=n.getTask(e,t),s=document.createElement("div");s.classList.add("details");let a=document.createElement("h3");a.textContent="title: "+o.title;let c=document.createElement("h4");c.textContent="Description: "+o.description;let r=document.createElement("h4");r.textContent="Due Date: "+o.dueDate;let d=document.createElement("h4");d.textContent="Priority: "+o.priority;let i=document.createElement("h4");i.textContent="Notes: "+o.notes,s.append(a),s.append(c),s.append(r),s.append(d),s.append(i),l.replaceWith(s)},renderNewProject(e){let t=document.getElementsByClassName("projectdiv"),l=document.querySelector(".projects"),o=document.querySelector(".newprojectbtn"),s=document.createElement("div"),a=document.createElement("button"),c=document.createElement("div");a.classList.add("collapsible"),c.classList.add("content"),a.textContent=e,n.createProject(e),s.id=t.length,s.classList.add("projectdiv"),s.append(a);let r=document.createElement("button");r.textContent="+ Add Task",r.classList.add("newtaskbtn"),c.append(r),l.insertBefore(s,o),s.append(c)},replaceProjects(t){let n={projectTitle:t,tasks:[]};e.push(n);let l=document.querySelector(".projects"),o=e,s=document.createElement("div");for(let e=0;e<o.length;e++){let t=document.createElement("div"),n=document.createElement("button"),l=document.createElement("div");l.classList.add("content"),n.classList.add("collapsible"),n.textContent=o[e].projectTitle,t.id=e,t.classList.add("projectdiv"),t.append(n),t.append(l),s.append(t)}let a=document.createElement("button");a.textContent="+ Add Project",a.classList.add("newprojectbtn"),s.append(a),l.replaceWith(s),s.classList.add("projects"),a.addEventListener("click",(()=>{c.classList.add("spawn")}))}}})();n.renderProjects(),n.renderTasksCollapsibleContainer(),n.renderTasksTittle(),t.addEventListener("click",(function(e){e.target.classList.contains("pointerstyle")&&n.renderTasksDetail(e.target.textContent,e.target.getAttribute("data-folder"))}));let l=document.querySelector(".newprojectbtn"),o=document.querySelector(".cancelbtnproject"),s=document.querySelector(".submitbtnproject"),a=document.getElementById("projectnamefield"),c=document.querySelector(".projectform");l.addEventListener("click",(()=>{c.classList.add("spawn")})),o.addEventListener("click",(e=>{e.preventDefault(),a.value="",c.classList.remove("spawn")})),s.addEventListener("click",(e=>{e.preventDefault(),n.replaceProjects(a.value),n.renderTasksCollapsibleContainer(),n.renderTasksTittle(),c.classList.remove("spawn")}))})();