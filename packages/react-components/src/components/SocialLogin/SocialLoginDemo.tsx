import React from 'react';
import SocialLogin from './SocialLogin';

// Demo component showing different usage examples
const SocialLoginDemo: React.FC = () => {
  const handleLogin = (email: string) => {
    console.log('Login attempt with email:', email);
    // In a real app, you would handle the login logic here
    alert(`Login attempted with: ${email}`);
  };

  const customProfileImages = [
    "https://randomuser.me/api/portraits/men/10.jpg",
    "https://randomuser.me/api/portraits/women/10.jpg",
    "https://randomuser.me/api/portraits/men/20.jpg",
    "https://randomuser.me/api/portraits/women/20.jpg",
    "https://randomuser.me/api/portraits/men/30.jpg"
  ];

  return (
    <div className="space-y-8">
      {/* Default Example */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-4">Default Social Login</h2>
        <SocialLogin onSubmit={handleLogin} />
      </div>

      {/* Custom Example */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-4">Custom Social Login</h2>
        <SocialLogin
          title="Join our community!"
          description="Enter your email to get started with your teammates"
          placeholder="Your work email"
          profileImages={customProfileImages}
          onSubmit={handleLogin}
          className="bg-gray-50"
        />
      </div>
    </div>
  );
};

export default SocialLoginDemo;