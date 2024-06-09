//created variables
const blogForm = document.getElementById('form');
const defaultM = document.getElementById('message');

// adding and event to the sumbit button
blogForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //created variables
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    // Display a generic error message using defaultM
    defaultM.style.display = 'block';

    if (username === '' || title === '' || content === '') {

        event.preventDefault(); // Prevent form submission

    } else {
        const formData = {
            username: username,
            title: title,
            content: content
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(formData);
        // Store the updated posts array in localStorage
        localStorage.setItem('posts', JSON.stringify(posts));
        // alert message
        alert("Form data saved to local storage!");

        // Redirect to the blog.html
        window.location.href = 'blog.html';
    }
});









