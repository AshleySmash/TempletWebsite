import "bootstrap/dist/js/bootstrap.bundle.min.js"

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault()

  if (validatePasswordInput() && validateDOBInput()) {
    alert("Form submitted successfully!")
  }
})

// Function to reset the form
function resetForm() {
  const confirmation = confirm("Are you sure you want to reset the form?")
  if (confirmation) {
    document.getElementById("registrationForm").reset()
  }
}

// Additional form submission logic
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault()
  if (validateForm()) {
    alert("Form submitted successfully!")
  }
})

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("validationDefaultPassword")
  const togglePasswordButton = document.getElementById("togglePassword")

  togglePasswordButton.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
  })
})

// Validation functions...

// Function to validate password input
function validatePasswordInput() {
  const passwordInput = document.getElementById("validationDefaultPassword")
  const password = passwordInput.value

  // Password validation regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be 8-20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character. Please correct the password."
    )
    return false
  }

  return true
}

// Function to validate date of birth input
function validateDOBInput() {
  const dobInput = document.getElementById("validationDefaultDOB")
  const dob = dobInput.value

  // Validate age (at least 18 years old)
  const minAge = 18
  if (calculateAge(dob) < minAge) {
    alert(`You must be at least ${minAge} years old to register.`)
    return false
  }

  return true
}

// Function to validate the entire form
function validateForm() {
  // Get references to form elements
  const firstNameInput = document.getElementById("firstName")
  const lastNameInput = document.getElementById("lastName")
  const emailInput = document.getElementById("email")
  // Add more fields as needed

  // Validate individual form fields
  const isFirstNameValid = validateFirstName(firstNameInput.value)
  const isLastNameValid = validateLastName(lastNameInput.value)
  const isEmailValid = validateEmail(emailInput.value)
  // Add more validations as needed

  // Check if all validations passed
  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    // Form is valid
    return true
  } else {
    // Form is invalid
    alert("Please correct the highlighted errors in the form.")
    return false
  }
}

// Example field-specific validation functions

function validateFirstName(firstName) {
  // Add your validation logic for the first name
  // For example, check if it's not empty
  return firstName.trim() !== ""
}

function validateLastName(lastName) {
  // Add your validation logic for the last name
  // For example, check if it's not empty
  return lastName.trim() !== ""
}

function validateEmail(email) {
  // Add your validation logic for the email
  // For example, check if it's a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Additional form submission logic
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault()
  if (validateForm()) {
    alert("Form submitted successfully!")
  }
})

function calculateAge(dob) {
  // Parse the date of birth
  const birthDate = new Date(dob)

  // Get the current date
  const currentDate = new Date()

  // Calculate the difference in milliseconds
  const timeDiff = currentDate - birthDate

  // Convert the difference to years
  const age = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000))

  return age
}

// Function to open the terms alert
function openTermsAlert() {
  const termsText = `
    Terms of Use Agreement ("Agreement") is entered into between you ("User" or "You") and [Your Company/Organization Name] ("Company," "We," or "Us"). By accessing or using [Your Website or Platform], you agree to comply with and be bound by the terms and conditions of this Agreement.

    1. Acceptance of Terms
    By accessing or using the [Your Website or Platform], you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. If you do not agree to these terms, please refrain from using our services.

    2. User Conduct
    You agree to use [Your Website or Platform] only for lawful purposes and in a manner consistent with all applicable laws and regulations. You are prohibited from engaging in any conduct that may disrupt or interfere with the functionality or security of the platform.

    3. Privacy Policy
    Your use of Tortuga Lobby is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.

    4. Intellectual Property
    All content and materials available on [Your Website or Platform], including but not limited to text, graphics, logos, button icons, images, audio clips, and software, are the property of Tortuga Lobby or its licensors and are protected by intellectual property laws.

    5. Modifications
    Tortuga Lobby reserves the right to modify, suspend, or discontinue Tortuga Lobby at any time without notice. We also reserve the right to update or modify this Agreement. Your continued use of the platform after any changes indicates your acceptance of the modified Agreement.

    6. Termination
    Tortuga Lobby reserves the right to terminate or suspend your access to Tortuga Lobby at any time and for any reason, without notice.

    7. Governing Law
    This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
    By using Tortuga Lobby, you agree to abide by the terms outlined in this Agreement. If you have any questions or concerns, please contact us at 111-111-1111.
    `

  alert(termsText)
}

document.getElementById("cancelButton").addEventListener("click", resetForm)
document.getElementById("termsLink").addEventListener("click", openTermsAlert)
