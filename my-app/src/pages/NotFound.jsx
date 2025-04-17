const NotFound = () => {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="text-lg mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Back to Home
        </a>
      </div>
    );
  };
  
  export default NotFound;