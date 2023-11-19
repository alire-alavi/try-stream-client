export default function Page() { 
     return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center">Enter your Email</h1>
        <form className="space-y-6">
          <div className="flex items-center border-b border-gray-300">
            <input
              type="tel"
              name="email"
              placeholder="Email"
              className="w-full p-2 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Next
          </button>
        </form>
        <div className="flex items-center justify-center">
          <div className="h-px bg-gray-300 flex-grow" />
          <span className="px-4 text-gray-400">or</span>
          <div className="h-px bg-gray-300 flex-grow" />
        </div>
        <button
          type="button"
          className="w-full px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
