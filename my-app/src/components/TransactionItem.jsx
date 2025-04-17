const TransactionItem = ({ transaction, onDelete }) => {
    const isIncome = transaction.type === 'income';
    return (
      <li
        className={`flex justify-between items-center p-3 mb-2 rounded ${
          isIncome ? 'bg-green-100' : 'bg-red-100'
        }`}
      >
        <div>
          <span className="font-medium">{transaction.description}</span>
          <span className="text-sm text-gray-600 ml-2">
            ({transaction.category})
          </span>
        </div>
        <div className="flex items-center">
          <span
            className={`${
              isIncome ? 'text-green-600' : 'text-red-600'
            } font-semibold`}
          >
            {isIncome ? '+' : '-'} ₹{transaction.amount.toLocaleString('en-IN')}
          </span>
          <button
            onClick={() => onDelete(transaction.id)}
            className="ml-4 text-red-500 hover:text-red-700"
          >
            ✕
          </button>
        </div>
      </li>
    );
  };
  
  export default TransactionItem;