function readUrlFromUser() {
    const url=document.getElementById("enteredUrl").value;
    getAPI(url);
}
function getAPI(user_url) {
    const request = new XMLHttpRequest();
    request.open("GET", user_url);
    request.send();
    request.onload = () => {
        if (request.status===200) {
            let api_data=JSON.parse(request.response);
            // console.log(typeof api_data, typeof(request.response))
            console.log(api_data);
            // printData(request.response);
            printTable(api_data);
        } else {
        console.log(`error ${request.status} ${request.statusText}`);
        }
    }
}

function printData(present_Data) {
    document.getElementById("print_array").innerHTML=present_Data;
}

function printTable(data) {
    let tableRows = "";
    const new_data = [...data]
    new_data.push({
        id:10,
        name: "Runnu",
        username: "rr212",
        email: "rr@gmail.com"
    })
    console.table(new_data);
    for(let i=0; i<new_data[i].id; i++) 
    {
        console.log(`number of time: ${i}`);
        tableRows += `
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].username}</td>
                <td>${data[i].email}</td>
                <td>${JSON.stringify(data[i].address)}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].website}</td>
                <td>${JSON.stringify(data[i].company)}</td>
            </tr>
        `
    }
    console.log(tableRows);
    document.getElementById("table_body").innerHTML=tableRows;
}

//https://jsonplaceholder.typicode.com/users