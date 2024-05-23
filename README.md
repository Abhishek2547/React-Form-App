# React Form Application

This is a React application that includes a form for user details and navigates to a success page upon successful form submission.

## Features

- Form fields include: First Name, Last Name, Username, Email, Password, Country, City, PAN No, Aadhar No, Country Code, and Phone Number.
- Form validation for required fields and specific patterns (PAN No, Aadhar No, Phone Number).
- Conditional rendering of city options based on selected country.
- Navigation to a success page displaying submitted form data upon successful submission.

## Setup

1. Clone the repository:
        git clone <repository-url>
    cd <repository-directory>
    

2. Install dependencies:
        npm install
    

3. Start the development server:
        npm start
    

## File Structure

- src/
  - components/
    - Form.js - Contains the form component with validation logic and state management.
    - Success.js - Displays submitted form data upon successful form submission.
  - App.js - Main application component that sets up routing.
  - index.js - Entry point for the React application.

## Form Component (Form.js)

### Form Submission

Ensure the handleSubmit function navigates to the Success page upon successful form submission:
;
