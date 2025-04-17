import { useState, useEffect } from 'react';
import TransactionItem from '../components/TransactionItem';
import Summary from '../components/Summary';
import { incomeCategories, expenseCategories } from '../constants';

const Budget = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('Salary');

  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();
    if (!description || !amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid description and amount.');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toLocaleDateString('en-IN'),
    };

    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setAmount('');
    setType('income');
    setCategory('Salary');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-deep-teal text-center mb-8">Budget Management (₹)</h1>

      <Summary transactions={transactions} />

      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-deep-teal mb-6">Add New Transaction</h2>
        <form onSubmit={addTransaction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-deep-teal mb-2">
                Transaction Description
              </label>
              <input
                id="description"
                type="text"
                placeholder="e.g., Grocery Shopping"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent transition duration-200"
                aria-label="Transaction description"
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-deep-teal mb-2">
                Amount (₹)
              </label>
              <input
                id="amount"
                type="number"
                placeholder="e.g., 5000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent transition duration-200"
                aria-label="Transaction amount"
              />
            </div>
            <div className="dropdown-wrapper">
              <label htmlFor="type" className="block text-sm font-medium text-deep-teal mb-2">
                Transaction Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                  setCategory(e.target.value === 'income' ? 'Salary' : 'Food');
                }}
                className="animate-fade-in"
                aria-label="Transaction type"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="dropdown-wrapper">
              <label htmlFor="category" className="block text-sm font-medium text-deep-teal mb-2">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="animate-fade-in"
                aria-label="Transaction category"
              >
                {(type === 'income' ? incomeCategories : expenseCategories).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 bg-deep-teal text-warm-beige px-6 py-3 rounded-lg hover:bg-muted-coral transition duration-200 w-full md:w-auto"
          >
            Add Transaction
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-deep-teal mb-6">Transaction History</h2>
        {transactions.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No transactions recorded yet.</p>
        ) : (
          <ul>
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onDelete={deleteTransaction}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Budget;