import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            placeholder="enter title"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              type="radio"
              required
              value="income"
              name="type"
              checked={type === "income"}
              onChange={(e) => setType(e.target.value)}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              required
              name="type"
              placeholder="Expense"
              checked={type === "expense"}
              onChange={(e) => setType(e.target.value)}
            />
            <label>Expense</label>
          </div>
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            required
            name="amount"
            placeholder="enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
      <button className="btn cancel_edit">Cancel Edit</button>
    </div>
  );
}
