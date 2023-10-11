function login() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: loginUsername, password: loginPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            document.getElementById("message").textContent = data.message;
        } else {
            // Successful login, redirect or perform other actions
            document.getElementById("message").textContent = "Login successful";
        }
    });
}

function register() {
    const registerUsername = document.getElementById("registerUsername").value;
    const registerPassword = document.getElementById("registerPassword").value;

    fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: registerUsername, password: registerPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            document.getElementById("message").textContent = data.message;
        } else {
            // Successful registration, redirect or perform other actions
            document.getElementById("message").textContent = "Registration successful";
        }
    });
}
