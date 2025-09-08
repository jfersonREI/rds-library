// src/pages/auth/RegisterPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import shadcn/ui components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

/**
 * RegisterPage Component
 *
 * This component renders the registration form for the application.
 * It includes fields for full name, email, password, and confirm password,
 * a submit button, and a link back to the login page.
 *
 * It uses shadcn/ui components for a consistent look and feel.
 */
const RegisterPage: React.FC = () => {
  // State for form fields
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  // State for messages to the user (e.g., success/error)
  const [message, setMessage] = React.useState('');
  // State to manage loading during API call
  const [loading, setLoading] = React.useState(false);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    setLoading(true); // Set loading state

    // TODO: Implement your registration logic here (e.g., API call to register a new user)
    try {
      console.log('Registration attempted with:', {
        fullName,
        email,
        password,
      });

      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      // Example success message
      setMessage('Registration successful! You can now log in.');
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      // Example error handling
      console.error('Registration error:', error);
      setMessage('Registration failed. Please try again later.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="register-page">
      {/* Page Title */}
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
        Create Your Account
      </h2>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name Input */}
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            disabled={loading} // Disable input while loading
          />
        </div>

        {/* Email Input */}
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={loading} // Disable input while loading
          />
        </div>

        {/* Password Input */}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            disabled={loading} // Disable input while loading
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            disabled={loading} // Disable input while loading
          />
        </div>

        {/* Message Area */}
        {message && (
          <p
            className={`text-center text-sm ${message.includes('failed') ? 'text-red-500' : 'text-green-500'}`}
          >
            {message}
          </p>
        )}

        {/* Submit Button */}
        <div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </div>
      </form>

      {/* Link to Login Page */}
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
