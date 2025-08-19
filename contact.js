const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

function showError(input, message) {
    const errorElement = input.parentElement.querySelector('.error');
    errorElement.textContent = message;
}

function clearError(input) {
    const errorElement = input.parentElement.querySelector('.error');
    errorElement.textContent = '';
}

function validateName() {
    const nameValue = nameInput.value.trim();
    if (!nameValue) {
        showError(nameInput, 'Name is required');
        return false;
    } else if (!/^[A-Za-z\s]+$/.test(nameValue)) {
        showError(nameInput, 'Name must contain only letters');
        return false;
    } 
    clearError(nameInput);
    return true;
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        showError(emailInput, 'Email is required');
        return false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
        showError(emailInput, 'Please enter a valid email (e.g. test@test.com)');
        return false;
    } 
    clearError(emailInput);
    return true;
}

function validateMessage() {
    const messageValue = messageInput.value.trim();
    if (!messageValue || messageValue.length < 10) {
        showError(messageInput, 'Message must be at least 10 characters');
        return false;
    }
    clearError(messageInput);
    return true;
}

 nameInput.addEventListener('input', validateName);
 emailInput.addEventListener('input', validateEmail);
 messageInput.addEventListener('input',validateMessage);

 form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        // Show modal
        document.getElementById('modalName').textContent = nameInput.value;
        document.getElementById('modalEmail').textContent = emailInput.value;
        document.getElementById('modalMessage').textContent = messageInput.value;

        modal.style.display = 'block';
    }

    
})
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})