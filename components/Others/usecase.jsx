import React, { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

const ExampleForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    // Submit logic here
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        label="Email Address"
        placeholder="your@email.com"
      />
      
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        label="Password"
        placeholder="••••••••"
      />
      
      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="large"
          className="w-full"
        >
          Sign In
        </Button>
      </div>
      
      <div className="mt-4 flex justify-between">
        <Button variant="outline" size="small">
          Forgot Password?
        </Button>
        <Button variant="secondary" size="small">
          Create Account
        </Button>
      </div>
    </form>
  );
};

export default ExampleForm;