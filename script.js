const EmployeesArrayLS=[
    {
       id : 234,
       name: "Leanne Graham",
       job : "Employee",
       email: "Sincere@april.biz",
       salary: 5000,
       department: "Quality Assurance department",
       signed_in: "April 21,2017",
    }
    ,
    {
        id : 238,
        name: "Ervin Howell",
        job : "Employee",
        email: "Shanna@melissa.tv",
        salary: 3750,
        department: "Business Unit department",
        signed_in: "septamber 26,2012",
    }
    ,
    {
        id : 526,
        name: "Clementine Bauch",
        job: "Employee",
        email: "Nathan@yesenia.net",
        salary: 3750,
        department: "Business Unit department",
        signed_in: "Novamber 5,2013",
    }
    ,
    {
        id : 812,
        name: "Patricia Lebsack",
        job: "Employee",
        email: "Julianne.OConner@kory.org",
        salary: 5000,
        department: "HR department",
        signed_in: "May 26,2019",
    }
    ,
    {
        id : 421,
        name: "Chelsey Dietrich",
        job: "Employee",
        email: "Lucio_Hettinger@annie.ca",
        salary: 5000,
        department: "HR department",
        signed_in: "July 19,2016",
    }
    ,
    {
        id : 248,
        name: "Glenna Reichert",
        job: "Employee",
        email: "Chaim_McDermott@dana.io",
        salary: 4000,
        department: "Production department",
        signed_in: "May 9,2014",
    }
    ,
    {
        id : 243,
        name: "Kurtis Weissnat",
        job: "Employee",
        email: "Telly.Hoeger@billy.biz",
        salary: 5000,
        department: "HR department",
        signed_in: "February 20,2008",
    }
    , 
    {
        id : 773,
        name: "Nicholas Runolfsdottir V",
        job: "Employee",
        email: "Sherwood@rosamond.me",
        salary: 10000,
        department: "Marketing department",
        signed_in: "Augest 31,2011",
    }
    ,
    {
        id : 898,
        name: "Clementina DuBuque",
        job: "Employee",
        email: "Rey.Padberg@karina.biz",
        salary: 1875,
        department: "IT department",
        signed_in: "January 25,2005",
    }
    ,
    {
        id : 316,
        name: "Mrs. Dennis Schulist",
        job: "Employee",
        email: "Karley_Dach@jasper.info",
        salary: 4000,
        department: "Accounting & Financial department",
        signed_in: "June 12,2009",
    }
    ,
    {
        id : 908,
        name: "Michael Scott",
        job: "Head UI & UX department",
        email: "Mcgregory@elina.io",
        salary: 5000,
        department: "UI & UX department",
        signed_in: "March 9,2016",
    }
    ,
    {
        id : 968,
        name: "Richard Wattrson",
        job: "Employee",
        email: "Elmore_anderson@Nicole.io",
        salary: 11000,
        department: "Research & Development department",
        signed_in: "June 21,2020",
    }
    ]
    localStorage.setItem("Employees" , JSON.stringify(EmployeesArrayLS)) 
    const EmployeesArray=JSON.parse(localStorage.getItem("Employees"))
/*array of pages-names*/
const nav_items=[
     "Dashboard" , "Departments" , "Employees" 
]
/*function which make user to visit each page*/
nav_items.map((element , i) =>document.getElementById("nav-bar").innerHTML+=
  `<li key=${i} class="nav-item ${document.body.id === element?"bg-primary text-white":"text-primary"}">
    <a class="nav-link ${document.body.id === element && "text-white"}" href="./${element}.html">${element}</a>
  </li>`
)

if(document.body.id === "Dashboard")
{

const dashboardArray=[
/*array of laptops*/
{
   title: "Available Position",
   number: 52,
   position:"12 Urgently needed",
   col: 3,
   color: "danger",
   text1:" ",
   text2:" ",
   text3:" "
}
,
{
    title: "Job Open",
    number: 18,
    position:"6 Active Hiring",
    col: 3,
    color: "primary",
    text1:" ",
    text2:" ",
    text3:" ",
}
,
{
    title: "New Employees",
    number: 23,
    position:"4 Department",
    col: 3,
    color: "danger",
    text1:" ",
    text2:" ",
    text3:" ",
}
,
{
    title: "Department",
    number: 9,
    position:"2 new department",
    col: 3,
    color: "dark",
    text1:" ",
    text2:" ",
    text3:" ",
}
,
{
    title: "Total Employees",
    number: 173,
    position:" ",
    col: 5,
    color: "danger",
    text1:"96 men",
    text2:"77 women",
    text3:" ",
}
,
{
    title: "Talent Request",
    number: 16,
    position:" ",
    col: 5,
    color: "danger",
    text1:"6 men",
    text2:"10 women",
    text3:" ",
}
,
{
    title: "Annoncements",
    number: 24,
    position:" ",
    col: 10,
    color: "danger",
    text1:"outing schedule for every department",
    text2:"Meeting HR Department",
    text3:"IT Department need two more talents for UI/UX Designer position",
}
]
    
let htmlItems = ``;
let dashboardContainer = document.getElementById("dashboard");
dashboardArray.forEach( function(value){
   htmlItems += `<div class="col-${value.col} mt-5">
<div class="card p-5">
   <div class="card-body">
       <p class="card-text">${value.title}</p>
       <h4 class="card-title">${value.number}</h4>
       <p class="card-text text-${value.color}">${value.position}</p>
       <h6 class="card-text">${value.text1}</h6>
       <h6 class="card-text">${value.text2}</h6>
       <h6 class="card-text">${value.text3}</h6>
   </div>
</div>
</div>`;
});

dashboardContainer.innerHTML = htmlItems;


}

else if(document.body.id === "Departments")
{

const DepartmentArray=[
/*array of mobiles*/
{
    title: "HR department",
    employees: 12,
    price: "60000$ total",
 }
,
{
    title: "Business Unit department",
    employees: 32,
    price: "120000$ total",
 }
,
{
   title: "Quality Assurance department",
   employees: 15,
   price: "105000$ total",
}
,
{
    title: "Production department",
    employees: 35,
    price: "140000$ total",
 }
,
{
    title: "Marketing department",
    employees: 12,
    price: "120000$ total",
 }
,
{
    title: "Research & Development department",
    employees: 8,
    price: "88000$ total",
 }
,
{
    title: "Accounting & Financial department",
    employees: 15,
    price: "60000$ total",
 }
,
{
    title: "UI & UX department",
   employees: 20,
   price: "58000$ total",
}
,
{
   title: "IT department",
   employees: 24,
   price: "45000$ total",
}
]
    
    let htmlItems = ``;
    let DepartmentContainer = document.getElementById("departments");
/*function which make card for each Mobile*/
    DepartmentArray.forEach( function(value){
     htmlItems += `<div class="scaled col mt-4">
    <div class="card p-5">
       <div class="bg-primary"></div>
       <div class="card-body">
           <p class="card-title text-center text-dark">${value.title}</p>
           <h3 class="card-text text-center">${value.employees}</h3>
           <p class="card-text text-center">${value.price}</p>
       </div>
    </div>
</div>`;
    });
    
    DepartmentContainer.innerHTML = htmlItems;
}

else if(document.body.id === "Employees")
{   /*array of contacts*/ 
        function clickUser(id)
        {
           localStorage.setItem("currentUserId" , id)
        }
        let htmlItems = ``;
        let ContactsContainer = document.getElementById("employees");
        EmployeesArray.forEach( function(value){
        htmlItems += `
            <div class="scaled col-4 mt-5">
                <div class="card">
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s" alt="Card image" style="width:100%">
                    <div class="card-body">
                      <h4 class="card-title">${value.name}</h4>
                      <p class="card-text">${value.job}</p>
                      <p class="card-text">${value.department}</p>
                      <p class="card-text">${value.email}</p>
                      <p class="card-text">${value.signed_in}</p>
                      <a onclick="clickUser(${value.id})" href="EmployeeProfile.html" class="btn btn-primary d-block">See Profile</a> 
                    </div>
                </div>
            </div>`;
    })
    ContactsContainer.innerHTML = htmlItems;
}

else if(document.body.id === "EmployeeProfile")
{   /*array of contacts*/ 

let editedEmployees = [];
if(!localStorage.getItem("editedEmployees"))
{ 
    localStorage.setItem("editedEmployees" , JSON.stringify(EmployeesArrayLS))
}

    editedEmployees=JSON.parse(localStorage.getItem("editedEmployees"))
    

const currentEmployee = editedEmployees.filter((Employee)=>Employee.id === Number(localStorage.getItem("currentUserId")))
console.log(currentEmployee)

function saveChanges()
{
   var index = editedEmployees.indexOf(currentEmployee[0])
   editedEmployees[index] = {
        id : currentEmployee[0].id ,
        name: currentEmployee[0].name,
        job : currentEmployee[0].job,
        email: currentEmployee[0].email,
        salary: document.getElementById("salary").value,
   }
   localStorage.setItem("editedEmployees" , JSON.stringify(editedEmployees))
}

document.getElementById("EmployeeProfileContainer").innerHTML = `
<div class="col-4 mt-5 d-flex justify-content-center">
    <div class="card d-flex justify-content-center">
        <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s" alt="Card image" style="width:100%">
        <div class="card-body">
          <h1>${currentEmployee[0].name}</h1>
          <p class="card-text">${currentEmployee[0].job}</p>
          <p class="card-text">${currentEmployee[0].department}</p>
          <p class="card-text">${currentEmployee[0].email}</p>
          <p class="card-text">${currentEmployee[0].signed_in}</p>
          <input id="salary" type="number" value=${currentEmployee[0].salary}>
          <button onclick="saveChanges()">save changes</button>
        </div>
    </div>
</div>
`


}