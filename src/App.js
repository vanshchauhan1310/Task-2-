import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center p-4 md:p-6">
      <header className="w-full max-w-6xl">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          SuperReply
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl flex items-center justify-center py-12">
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <div className="w-full lg:w-1/2">
            <div className="bg-pink-50 rounded-3xl p-8 md:p-12 space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Convert your{" "}
                  <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Instagram
                  </span>{" "}
                  into a sales channel!
                </h1>
                <p className="text-xl md:text-2xl font-semibold">
                  Connect your account to continue
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center">
            <div className="w-full space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-gray-600">
                  SuperReply requires certain permissions to build automations with Instagram. Click the button to grant them.
                </p>
                <button
                  className="w-full max-w-md h-12 text-white bg-[#1877F2] hover:bg-[#1864F2] flex items-center justify-center gap-2 rounded"
                >
                  <FacebookIcon className="w-5 h-5" />
                  Continue with Facebook
                </button>
              </div>

              <p className="text-sm text-gray-600">
                By signing up, you agree to SuperReply's{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default App;

