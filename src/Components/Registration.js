import React, { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validateConfirmPassword(newConfirmPassword);
  };

  const validateEmail = (value) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    // Password should be at least 8 characters long
    setPasswordValid(value.length >= 8);
  };

  const validateConfirmPassword = (value) => {
    // Confirm password should match the password
    setConfirmPasswordValid(value === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert(`can't submit the form. Please check your inputs.`);
    }
  };

  return (
    <div>
      <label>
        Email:
        <br/>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: emailValid ? 'green' : 'red' }}
        />
        {!emailValid && <p>Error: Please enter a valid email address</p>}
      </label>

      <br />

      <label>
        Password:<br/>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: passwordValid ? 'green' : 'red' }}
        />
        {!passwordValid && (
          <p>Error: Password must be at least 8 characters long</p>
        )}
      </label>

      <br />

      <label>
        Confirm Password:<br/>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: confirmPasswordValid ? 'green' : 'red' }}
        />
        {!confirmPasswordValid && (
          <p>Error: Passwords do not match</p>
        )}
      </label>

      <br />

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default RegistrationForm;
