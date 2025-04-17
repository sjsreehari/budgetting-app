const Summary = ({ transactions }) => {
    const totalIncome = transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = transactions
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    const balance = totalIncome - totalExpenses;
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Income</h3>
          <p className="text-2xl">₹{totalIncome.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-red-400 text-white p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Expenses</h3>
          <p className="text-2xl">₹{totalExpenses.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-violet-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Balance</h3>
          <p
            className={`text-2xl ${
              balance >= 0 ? 'text-green-200' : 'text-red-200'
            }`}
          >
            ₹{Math.abs(balance).toLocaleString('en-IN')}{' '}
            {balance >= 0 ? '' : '(Deficit)'}
          </p>
        </div>
      </div>
    );
  };
  
  export default Summary;