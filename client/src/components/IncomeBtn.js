import React, { useState } from 'react';

export const IncomeBtn = (showIncomeForm) => {
    const [showPrompt, setShowPrompt] = useState(false);
    const [incomeType, setIncomeType] = useState('');
    const [payFrequency, setPayFrequency] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);
    const [amount, setAmount] = useState('');
    const [payer, setPayer] = useState('');

    const handleAddIncome = () => {
      setShowPrompt(true);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Do something with the collected data, such as save it to state or a database
      console.log({ incomeType, payFrequency, isRecurring, amount, payer });
      // Reset the state and close the prompt
      setIncomeType('');
      setPayFrequency('');
      setIsRecurring(false);
      setAmount('');
      setPayer('');
      setShowPrompt(false);
    };
    const handlePromptClose = () => {
        setShowPrompt(false);
      };
    return (
      <>
        {showIncomeForm && (
          <div style={{display:'flex', flexDirection:'column'}}>
            <h3>Add Income Details</h3>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
              <label>
                Income Type:
                <input
                  type="text"
                  value={incomeType}
                  onChange={(e) => setIncomeType(e.target.value)}
                />
              </label>
              <label>
                Pay Frequency:
                <select value={payFrequency} onChange={(e) => setPayFrequency(e.target.value)}>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Biweekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </label>
              <label>
                Recurring:
                <input
                  type="checkbox"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                />
              </label>
              <label>
                Amount:
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </label>
              <label>
                Payer:
                <input
                  type="text"
                  value={payer}
                  onChange={(e) => setPayer(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
              <button onClick={handlePromptClose}>Cancel</button>
            </form>
          </div>
        )}
      </>
    );
}