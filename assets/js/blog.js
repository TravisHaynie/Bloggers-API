// creates and event where locally sotred information is applied to the a new div tag and stored on the page in new divs every time new information is submitted on the submitforms page
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
// For loop
    for (let i = 0; i < storedPosts.length; i++) {
        const postData = storedPosts[i];
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>${postData.title}</h3>
            <p>Username: ${postData.username}</p>
            <p>Content: ${postData.content}</p>
        `;
        postsContainer.appendChild(postElement);
    }
});



// creates a click event on the back button 
const blogButton = document.querySelector('.back');

  blogButton.addEventListener('click', function(event) {

      if (blogButton) {
// redirects back to to the index.html page
          window.location.href = 'index.html';
      }
  });

  

