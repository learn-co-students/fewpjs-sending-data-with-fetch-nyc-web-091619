// Add your code here
function submitData(userName, userEmail) {
    let data = {
        name: userName,
        email: userEmail
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(response => {
        return response.json()
      })
      .then(object => {
        document.body.innerHTML = object[ "id" ]
        document.body.style.textAlign = "center"
      })
      .catch(error => {
        alert("Bad things! Ragnarők!");
        document.body.innerHTML = error.message
        document.body.style.textAlign = "center"
      })
}
// testing
document.addEventListener('DOMContentLoaded', function() {
    submitData("Slava", "not_areal_address@gmail.com")
})
// testing