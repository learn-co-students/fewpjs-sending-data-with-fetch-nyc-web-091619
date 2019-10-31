// Add your code here
let url = "http://localhost:3000/users"

function appendData(obj){
    let id = obj.id
    // console.log("id: ", id)
    // let p = document.createElement("p")
    // p.innerText = id
    // console.log("p: ", p)
    // document.body.appendChild(p)
    document.body.innerHTML += id;

}

function appendError(error){
 
    document.body.innerHTML = error.message;

}



function submitData(name, email){
    let obj = {
        name: name,
        email: email 
    }
    
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(obj)

    })
        .then(resp => resp.json())
        .then(resp => appendData(resp))
        .catch(err => appendError(err))
}