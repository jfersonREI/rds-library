import React from 'react';
import { Link } from 'react-router';

// Import shadcn/ui components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const LoginPage: React.FC = () => {
  // State for form fields
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false); // State for remember me checkbox

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement your authentication logic here (e.g., API call to log in)
    console.log('Login attempted with:', { email, password, rememberMe });
    // Example: call an authentication service
    // authenticateUser(email, password)
    //   .then(response => { /* handle success, e.g., redirect */ })
    //   .catch(error => { /* handle error, e.g., show message */ });
  };

  return (
    <div className="login-page">
      {/* Page Title */}
      <h2 className="mb-6 text-center text-2xl font-bold">
        Sign In to Your Account
      </h2>

      {/* Login Form */}
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
          />
        </div>

        {/* Password Input */}
        <div className="w-full space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              id="remember-me"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
            >
              Remember me
            </Label>
          </div>
          <div className="text-sm">
            <Link
              to="/forgot-password" // Change to a proper route if you have one for forgot password
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>

      {/* Link to Registration Page */}
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Not a member?{' '}
        <Link
          to="/register"
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Register now
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
