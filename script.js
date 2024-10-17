const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

saveBtn.addEventListener('click', () => {
    const name = usernameInput.value;
    if (name) {
        localStorage.setItem('name', name);
        displayName.textContent = `Grettings, ${name}!`;
        usernameInput.value = ''; 
    } else {
        alert('You must enter a name.');
    }
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('name');
    displayName.textContent = '';
});


