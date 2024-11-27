import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo Container */}
      <div className="w-full max-w-full flex justify-center px-4 pt-[50px]">
        <div className="w-full max-w-[1200px] flex justify-start">
          <img
            src="super-logo.png"
            className="w-auto h-[70px] object-contain"
            alt="Logo"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 pt-[80px] max-h-[600px]">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[120px]">
          {/* Left Column */}
          <div className="w-full md:w-[624px] md:h-[500px] bg-pink-50/50 rounded-3xl p-10 md:p-[90px] md:pt-[120px] md:pl-[100ppx] text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold">
              Convert your
              <div className="flex justify-center md:justify-start mt-2">
                <img
                  src='Instagram-logo.png'
                  className="w-[283px] h-[80px] object-contain"
                  alt="Instagram Logo"
                />
              </div>
              into a sales <br/> channel!
            </h1>
            <p className="mt-2 text-sm md:text-xl text-black-600 font-normal md:font-bold">
              Connect your account to continue
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 max-w-md space-y-4">
            <p className="text-base md:text-lg text-center text-black-600">
              SuperReply requires certain permissions to build automations with Instagram. Click the button to grant them.
            </p>

            <button className="w-full bg-[#1877F2] text-white rounded-md py-2.5 px-4 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              Continue with Facebook
            </button>

            <p className="text-base text-center text-black-500">
              By signing up, you agree to SuperReply's{" "}
              <br />
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
    </div>
  );
};

export default LoginPage;