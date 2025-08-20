
# Contact Form with Validation and Modal

This project is a **Contact Form** built using **HTML, CSS, and JavaScript**.  
It demonstrates **real-time validation**, **error handling**, and a **modal window**.

---

## What the Form Does
- Provides input fields for:
  - **Name**
  - **Email**
  - **Message**
- Prevents submission until all fields are valid.
- Shows **instant error messages** as the user types.

---

## How It Works
1. The user enters details in the form fields.
2. JavaScript validates inputs and displays error messages.
3. On form submission:
   - If any field is invalid submission is stopped. 
   - If all fields are valid modal pops up with confirmation and what was submitted.

---

## JavaScript Validation Used
- **Name Validation**
  - Must contain **only letters**.
- **Email Validation**
  - Must follow a valid format (e.g., `example@test.com`).
- **Message Validation**
  - Must be at least **10 characters long**.

Each validation is triggered on **input** (as the user types) and on **form submission**.

---

## Modal Interaction
- After successful validation:
  - The modal shows the submitted Name, Email, and Message.
- Closing the modal:
  - Click the X button OR
  - Click anywhere outside the modal.

This gives users a clear confirmation of what they submitted without reloading the page.

---

## Decisions & Challenges Faced

- **Error placement**:  
<small class="error"></small> is a placeholder for error messages under each field.

- **Modal closing behavior:** 
Besides the close button (closeModal.addEventListener), this part makes sure that clicking outside the modal also closes it.
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})

- **Modal window:**  
  I also found learning what a modal is and how it works quite tough.  

**Learning JavaScript:**  
  This was the toughest assignment yet because I am still new to JavaScript.  
  Understanding how event listeners, functions, and validation all connect together took the most time.  
  I followed the tutorial closely but still had to experiment and re-read sections to fully understand how it worked.  

- **Validation:** 
For validation, I used the JS provided in the tutorial. These are basically pattern rules that check whether the input follows the correct format.(Email and Name)
---

## Summary:
- Built a user-friendly contact form with real-time error feedback.  
- Implemented JS for name, email, and message.  
- Added a modal confirmation window.

*Created: August 2025*  
*Monique Lotriet*

