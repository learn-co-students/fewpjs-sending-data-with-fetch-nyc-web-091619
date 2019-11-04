// Add your code here
const DOGPATH = "http://localhost:3000/dogs"

// fetch(DOGPATH, {
//     method: "POST"
//     headers: {
//         "Content-type":"application/json",
//         "Accept":"application/json"
//     }
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })

// }

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-type":"application/json",
//         "Accept":"application/json"
//     },
//     body: JSON.stringify(formData)
// };

const USERPATH = "http://localhost:3000/users"


function submitData(str1, str2) {
    return fetch(USERPATH, {
        method: "POST",
        headers: {
            "Content-type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name: str1,
            email: str2
        })
    }).then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.querySelector("body").innerHTML+=object.id
        console.log(object);
    })
    .catch(function(error) {
        alert("Bad things!!");
        document.querySelector("body").innerHTML+=error.message
        console.log(error.message);
    });
}
