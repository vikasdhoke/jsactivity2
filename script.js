// api url
// const api_url =   "https://employeedetails.free.beeceptor.com/my/api/path";
const url = "https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817";
  
// Defining async function
async function getapi(url) {
    try {
           // Storing response
    const response = await fetch(url);
    // console.log(response);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data.data);
    } catch (error) {
        console.log(error)
    }
 

    if (data) {
        hideloader();
    }
    // var p = data.data
    show(data.data);
}
// Calling that async function
getapi(url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.office}</td>
    <td>${r.position}</td> 
    <td>${r.salary}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}