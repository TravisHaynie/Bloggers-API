//created variables
const blogForm = document.getElementById('form');
const defaultM = document.getElementById('message');

// adding and event to the sumbit button
blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

// Display a generic error message using defaultM
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

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
        
        //  const formDataString = JSON.stringify(formData);
        // localStorage.setItem("formData", formDataString);

        //      // stored form data in local storage
        //      localStorage.setItem('username', username);
        //      localStorage.setItem('title', title);
        //      localStorage.setItem('content', content);

        alert("Form data saved to local storage!");

        // Redirect to the blog.html
        window.location.href = 'blog.html';
        }
});
 

    
   





