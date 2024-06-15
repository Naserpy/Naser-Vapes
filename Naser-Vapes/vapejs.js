n
document.getElementById('info-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const vapeType = document.getElementById('vape-type').value;

    // Check if the user is an adult
    if (age >= 18) {
        // Hide error message 
        document.getElementById('error-message').style.display = 'none';

        // Show thank you message
        document.getElementById('thank-you-message').style.display = 'block';

        // Display user data in the list
        const userDataList = document.getElementById('user-data');
        userDataList.style.display = 'block';

        const listItem = document.createElement('li');
        listItem.textContent = `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, Email: ${email}, Vape Type: ${vapeType}`;
        userDataList.appendChild(listItem);

        // Store data in local storage
        const userData = { firstName, lastName, age, email, vapeType };
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        // Show error message if the user is under 18
        document.getElementById('error-message').style.display = 'block';
        // Hide thank you message if it's visible
        document.getElementById('thank-you-message').style.display = 'none';
    }
});

// Load stored user data on page load
window.addEventListener('load', function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length > 0) {
        const userDataList = document.getElementById('user-data');
        userDataList.style.display = 'block';
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `First Name: ${user.firstName}, Last Name: ${user.lastName}, Age: ${user.age}, Email: ${user.email}, Vape Type: ${user.vapeType}`;
            userDataList.appendChild(listItem);
        });
    }
});
