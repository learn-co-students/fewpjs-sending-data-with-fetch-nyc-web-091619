// Add your code here
fetch('http://localhost:3000/dogs').then(response => response.json()).then(json => console.log(json));
fetch('http://localhost:3000/cats').then(response => response.json()).then(json => console.log(json));
fetch('http://localhost:3000/users').then(response => response.json()).then(json => console.log(json));
fetch('http://localhost:3000/robots').then(response => response.json()).then(json => console.log(json));

let formData = {
    dogName: "Patrick",
    dogBreed: "Black Lab"
}

// fetch('http://localhost:3000/dogs', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "Accepts": "application/json"
//     },
//     body: JSON.stringify(formData)
// }).then(response => response.json()).then(json => console.log(json));

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(json => {
        let id = document.createElement('h1');
        id.textContent = `${json.id}`
        document.body.appendChild(id);
    })
    .catch((err) => {
        alert('Spotted an error!');
        document.body.innerHTML = err.message;
    })
}

submitData('liam', 'lh@gmail.com');