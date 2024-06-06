
const themeSwitcher = document.querySelector('#darkmode');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

 /*Listen for a click event on the toggle switch*/
 themeSwitcher.addEventListener('click', function () {
   // Toggle between dark and light modes
   if (mode === 'dark') {
     mode = 'light';
     container.classList.remove('dark');
     container.classList.add('light');
   } else {
     mode = 'dark';
     container.classList.remove('light');
     container.classList.add('dark');
   }
 });
