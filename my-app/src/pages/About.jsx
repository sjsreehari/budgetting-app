const About = () => {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">About RupeeWise</h1>
        <p className="text-lg mb-4">
          RupeeWise is a budgeting application built to help you manage your
          finances in Indian Rupees (₹). Our goal is to provide a simple, yet
          powerful tool to track your income, expenses, and overall financial health.
        </p>
        <p className="text-lg mb-4">
          Features include:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Add and categorize transactions (income and expenses)</li>
          <li>View real-time summaries of your financial status</li>
          <li>Track transaction history</li>
          <li>Persist data locally for easy access</li>
        </ul>
        <p className="text-lg">
          RupeeWise is designed with simplicity and usability in mind, making
          financial management accessible to everyone.
        </p>
      </div>
    );
  };
  
  export default About;