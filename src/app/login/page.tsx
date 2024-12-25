export default function Home() {
    return (
        
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
        
          <div className="flex justify-center mb-6">
            <img
              src="/logo.webp"
                           alt="Nike Logo"
              className="h-5 mr-2"
            />
            {/* <img
              src="/jordan-logo.png" 
              alt="Jordan Logo"
              className="h-8"
            /> */}
          </div>
      
          <h1 className="text-center text-lg font-semibold mb-4">
            Enter your email to join us or sign in.
          </h1>
          
          <div className="text-center text-sm text-gray-600 mb-6">
            Pakistan <a href="#" className="text-blue-500 underline">Change</a>
          </div>
        
          <form>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
            />
          
            <p className="mt-4 text-xs text-gray-500">
              By continuing, I agree to Nike's{' '}
              <a href="#" className="text-blue-500 underline">Privacy Policy</a> and{' '}
              <a href="#" className="text-blue-500 underline">Terms of Use</a>.
            </p>
        
            <button
              type="submit"
              className="mt-6 w-full py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }
  