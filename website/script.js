// Login Logic
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        // Simple mock login
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    });
}

// Grocery Logic
const list = document.getElementById('groceryList');
function addItem() {
    const input = document.getElementById('itemInput');
    if (!input.value) return;
    
    const li = document.createElement('li');
    li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()" style="width: auto; padding: 2px 5px;">X</button>`;
    list.appendChild(li);
    input.value = '';
}

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}

// Protection
if (window.location.pathname.includes('dashboard.html') && !localStorage.getItem('loggedIn')) {
    window.location.href = 'index.html';
}