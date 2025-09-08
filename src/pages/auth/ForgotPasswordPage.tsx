import React from 'react';
import { Link } from 'react-router';

// Import shadcn/ui components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

/**
 * ForgotPasswordPage Component
 *
 * This component renders a form for users to request a password reset link.
 * It takes an email address and provides a submission button,
 * along with a link to return to the login page.
 *
 * It uses shadcn/ui components for a consistent look and feel with the LoginPage.
 */
const ForgotPasswordPage: React.FC = () => {
  // State for the email input field
  const [email, setEmail] = React.useState('');
  // State for messages to the user (e.g., success/error)
  const [message, setMessage] = React.useState('');
  // State to manage loading during API call
  const [loading, setLoading] = React.useState(false);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state
    setMessage(''); // Clear any previous messages

    // TODO: Implement your password reset logic here
    // This typically involves an API call to your backend
    try {
      console.log('Password reset requested for:', email);
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      // Example success message
      setMessage(
        'If an account with that email exists, a password reset link has been sent.'
      );
      setEmail(''); // Clear email field on success
    } catch (error) {
      // Example error handling
      console.error('Password reset error:', error);
      setMessage('Failed to send password reset link. Please try again later.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="forgot-password-page">
      {/* Page Title */}
      <h2 className="mb-6 text-center text-2xl font-bold">
        Reset Your Password
      </h2>

      {/* Forgot Password Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <div className="w-full space-y-2">
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

        {/* Message Area */}
        {message && (
          <p
            className={`text-center text-sm ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}
          >
            {message}
          </p>
        )}

        {/* Submit Button */}
        <div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </div>
      </form>

      {/* Link to Login Page */}
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Remembered your password?{' '}
        <Link
          to="/login" // Assuming your login page is at /login
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
