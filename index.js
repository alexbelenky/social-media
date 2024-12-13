async function fetchUserData() {
    const users = [];


    for (let i = 1; i < 9; i++) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + i);
        const user = await response.json();
        users.push(user);
    }


    displayUsers(users);
}


function displayUsers(users) {
    const userList = document.getElementById('user-list');
   
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
       
        userCard.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        `;
       
        userList.appendChild(userCard);
    });
}


fetchUserData();
