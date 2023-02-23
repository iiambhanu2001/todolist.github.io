const formel1=document.querySelector(".form");

let inputel=document.querySelector(".input");

let newli=document.querySelector(".list");
///////////////geting elements from local storage///////


let list=JSON.parse(localStorage.getItem("list"));
list.forEach(work=>{
  toDoList(work);
})


///////final function/////////////////
formel1.addEventListener("submit",(event) =>{ 
 event.preventDefault();
  toDoList();
});


function toDoList(work){
 let task=inputel.value;
 if(work){
    task=work.name
 }
 const li1=document.createElement("li");//creating new element;
if(work && work.checked){
  li1.classList.add("checked");
}
 li1.innerText=task;
 newli.appendChild(li1);
 inputel.value="";
 
 const checkbtn1 = document.createElement("div");
checkbtn1.innerHTML = `
<i class="fas fa-check-square">
`;
li1.appendChild(checkbtn1);
const trashbtn1 = document.createElement("div");
trashbtn1.innerHTML = ` 
<i class="fas fa-trash">
`;
li1.appendChild(trashbtn1); //adding class to list 

checkbtn1.addEventListener("click",()=>{
         
     li1.classList.toggle("checked");
     saved();
       
})
trashbtn1.addEventListener("click",()=>{
         
  li1.remove();
  saved();
})
saved();
}

function saved(){
  const listel=document.querySelectorAll("li");
   list =[];
  listel.forEach(li1=>{
         list.push({
          name: li1.innerText,
          checked: li1.classList.contains("checked"),
         })
  });
       localStorage.setItem("list",JSON.stringify(list));
}
 

//             SAVING DATA IN LOCAL STORAGE            ///
