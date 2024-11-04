document.addEventListener("DOMContentLoaded", function() {
    // Show loading for 1 second
    setTimeout(function() {
        document.querySelector('.loading').style.opacity = 1;
    }, 1000);

    // Show main content after 1 second with transition
    setTimeout(function() {
        document.getElementById('splash-screen').style.opacity = 0;
        document.getElementById('main-content').classList.remove('hidden');
    }, 1000); // 3000 milliseconds = 3 seconds
});
     // JavaScript code to redirect to the home page after 4 seconds
     setTimeout(function() {
        window.location.href = "Home.html"; // Replace with the actual path to your home page
    }, 4000); // 4000 milliseconds = 4 seconds

