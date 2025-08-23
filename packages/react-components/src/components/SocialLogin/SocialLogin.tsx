import React, { useState } from 'react';

export interface SocialLoginProps {
  title?: string;
  description?: string;
  placeholder?: string;
  profileImages?: string[];
  onSubmit?: (email: string) => void;
  className?: string;
}

const SocialLogin: React.FC<SocialLoginProps> = ({
  title = "Already working together?",
  description = "Login to your account and connect with your teammates!",
  placeholder = "Enter your email address",
  profileImages = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/32.jpg",
    "https://randomuser.me/api/portraits/men/65.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/68.jpg"
  ],
  onSubmit,
  className = ""
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <div className={`flex justify-center items-center min-h-screen bg-gray-100 ${className}`}>
      <div className="flex justify-center items-center shadow-xl bg-slate-300 rounded-[22px] w-[930px] h-[330px]">
        <div className="relative flex flex-col justify-center items-center w-[900px] h-[300px] rounded-[15px] bg-gradient-to-br from-blue-400 to-blue-800">
          {/* Login Text */}
          <div className="text-center">
            <h1 className="text-white text-3xl font-bold mb-2">
              {title}
            </h1>
            <p className="text-white text-base max-w-[300px] mx-auto">
              {description}
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex items-center bg-blue-600 border border-white rounded-full px-4 py-3 w-[400px]">
              <input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-none bg-transparent text-white text-base w-full outline-none pl-3 placeholder-white placeholder-opacity-70"
                required
              />
              <button
                type="submit"
                className="bg-white border-none w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer flex-shrink-0 -mr-1 hover:bg-gray-100 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-700"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Profile Images */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-12">
            {profileImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Profile ${index + 1}`}
                className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                onError={(e) => {
                  // Fallback for broken images
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=User+${index + 1}&background=6366f1&color=white&size=64`;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;