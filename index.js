// // API endpoints
// Resources
const dogs = 'http://localhost:3000/dogs';
const cats = 'http://localhost:3000/cats';
const users = 'http://localhost:3000/users';
const robots = 'http://localhost:3000/robots';

const postConfigObject = obj => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(obj),
  };
};

const appendError = message => {
  // let p = document.createElement('p');
  // p.innerText = message;

  document.body.innerHTML += message;
};

const appendUser = obj => {
  let div = document.createElement('div');
  let h4 = document.createElement('h4');
  let p = document.createElement('p');

  div.dataset.id = obj.id;
  div.className = 'user';
  h4.innerText = obj.name;
  p.innerText = obj.email;

  div.appendChild(h4);
  div.appendChild(p);
  document.body.appendChild(div);
};

// const woof = { name: 'Falaf-boy', breed: 'labchi' };

// fetch(dogs, postConfigObject(woof))
//   .then(resp => resp.json())
//   .then(data => console.log(data))
//   .catch(error => {
//     alert('Something went wrong; check console logs');
//     console.log(error.message);
//   });

const submitData = (uname, uemail) => {
  const userObject = {
    name: uname,
    email: uemail,
  };
  return fetch(users, postConfigObject(userObject))
    .then(resp => resp.json())
    .then(data => appendUser(data))
    .catch(error => appendError(error.message));
};
