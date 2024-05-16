function runTypingEffect() {
  const text = 'I am Adham.';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);


// Profile Section JS
function displayManagement(toDisplay) {
  // List of all section IDs
  var sections = ['profile-section', 'skills-section', 'experiences-section'];
  var links = ['profile_link', 'skills_link', 'experiences_link'];

  // Loop through all sections
  for (var section of sections) {
    var element = document.getElementById(section);
    if (element) {
      // Hide the section
      element.style.display = 'none';
    }
  }

  // Loop through all links
  for (var link of links) {
    var element = document.getElementById(link);
    if (element) {
      // Remove active class
      element.classList.remove('active');
    }
  }

  // Display the selected section
  document.getElementById(toDisplay).style.display = 'block';

  // Find the link that corresponds to the section and add 'active' class
  var activeLink = toDisplay.replace('-section', '_link'); // Mapping the section id to link id
  document.getElementById(activeLink).classList.add('active');
}



// Add hover effect to buttons in #suggestions div
document.querySelectorAll('#suggestions button').forEach(button => {
  button.addEventListener('mouseenter', function () {
    const icon = document.createElement('i');
    icon.className = 'fa-regular fa-upload text-dark ms-1';
    this.appendChild(icon);
  });

  button.addEventListener('mouseleave', function () {
    const icon = this.querySelector('.fa-upload');
    if (icon) {
      icon.remove();
    }
  });
});




function sendMessage(predefinedMessage = null) {
  const userInput = document.getElementById('newComment');
  const message = predefinedMessage || userInput.value.trim();

  if (message) {
    appendMessage('You', message, 'user-chat');
    appendMessage('Datadham GPT', `You asked: "${message}". Here is a simulated response.`, 'system-chat');
    userInput.value = '';


  }
}


function appendMessage(sender, message, className) {
  const chatBox = document.createElement('div');
  chatBox.className = `p-3 bg-light rounded-4 mb-3 ${className}`;
  const timeOptions = { hour: '2-digit', minute: '2-digit' };
  const currentTime = new Date().toLocaleTimeString([], timeOptions);

  if (className == 'system-chat') {
    chatBox.innerHTML = `
    <div class="title d-flex">
      <h5 class="mb-1 text-primary">${sender}</h5>
      <small class="ms-auto">${currentTime}</small>
    </div>
    <p class="text-start">${message}</p>
  `;
  }

  else {
    chatBox.innerHTML = `
    <div class="title d-flex">
      <h5 class="mb-1">${sender}</h5>
      <small class="ms-auto">${currentTime}</small>
    </div>
    <p class="text-start">${message}</p>
  `;
  }

  const discussionBox = document.getElementById('discussion-box');
  discussionBox.appendChild(chatBox);
  chatBox.scrollIntoView({ behavior: 'smooth' });
}

function clearChat() {
  const discussionBox = document.getElementById('discussion-box');
  discussionBox.innerHTML = '';
  document.getElementById('suggestions').scrollIntoView({ behavior: 'smooth' });
}


