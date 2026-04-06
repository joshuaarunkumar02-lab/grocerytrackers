function login() {
    localStorage.setItem('auth', 'true');
    window.location.href = '/dashboard';
}

function logout() {
    localStorage.removeItem('auth');
    window.location.href = '/';
}

function addItem() {
    const input = document.getElementById('itemInput');
    if (!input.value) return;
    const li = document.createElement('li');
    li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()" style="width:30px; padding:2px;">X</button>`;
    document.getElementById('list').appendChild(li);
    input.value = '';
}

// Auth Guard
if (window.location.pathname.includes('dashboard') && !localStorage.getItem('auth')) {
    window.location.href = '/';
}