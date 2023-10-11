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
            window.location = '/index.html'
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


// Fetch all news articles
async function fetchNews() {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      console.log('All News Articles:', data);
      return data
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
  
  // Fetch a specific news article by ID
  async function fetchNewsById(id) {
    try {
      const response = await fetch(`/api/news/${id}`);
      const data = await response.json();
      console.log('News Article by ID:', data);
      return data
    } catch (error) {
      console.error('Error fetching news by ID:', error);
    }
  }
  
  // Add a new news article
  async function addNews(article) {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const tags = document.getElementById("tags").value;

    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: title,content: content, tags: tags}),
      });
      const data = await response.json();
      console.log('New News Article added:', data);
      return data
    } catch (error) {
      console.error('Error adding news:', error);
    }
  }
  
  // Example usage:
  // fetchNews();
  // fetchNewsById('your_article_id');
  // addNews({ title: 'New Article', content: 'This is the content.' });
  
