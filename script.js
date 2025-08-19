//Function shows the welcome message once user clicks on button 

function Greeting() {
  alert("This popup is triggered when you click the button. It demonstrates how JavaScript can create interactive experiences on a webpage.");
}

const btn = document.getElementById('WelcomeBTN');
btn.addEventListener('click', Greeting);