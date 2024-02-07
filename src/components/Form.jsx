import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	changeTransaction,
	createTransaction,
} from "../features/transaction/transactionSlice";

export default function Form() {
	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const [amount, setAmount] = useState("");
	const [editMode, setEditMode] = useState(false);

	const { isLoading, isError, error } = useSelector(
		(state) => state.transaction
	);
	const { editing } = useSelector((state) => state.transaction);

	const dispatch = useDispatch();

	const reset = () => {
		setName("");
		setType("");
		setAmount("");
	};
	const handleCreate = (e) => {
		e.preventDefault();
		dispatch(createTransaction({ name, type, amount: Number(amount) }));
		reset();
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		dispatch(
			changeTransaction({
				id: editing.id,
				data: { name, type, amount: Number(amount) },
			})
		);
		reset();
	};

	const handleCancle = () => {
		setEditMode(false);
		reset();
	};
	// listen for edit mode active
	useEffect(() => {
		const { id, name, type, amount } = editing || {};
		if (id) {
			setEditMode(true);
			setName(name);
			setType(type);
			setAmount(amount);
		} else {
			setEditMode(false);
			reset();
		}
	}, [editing]);
	return (
		<div className="form">
			<h3>Add new transaction</h3>

			<form onSubmit={editMode ? handleUpdate : handleCreate}>
				<div className="form-group">
					<label>Name</label>
					<input
						required
						type="text"
						name="name"
						value={name}
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
						value={amount}
						placeholder="enter amount"
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button className="btn" type="submit" disabled={isLoading}>
					{editMode ? "Edit Transaction" : "Add Transaction"}
				</button>

				{!isLoading && isError && (
					<p className="error">Something went wrong {error} </p>
				)}
			</form>
			{editMode && (
				<button className="btn cancel_edit" onClick={handleCancle}>
					Cancel Edit
				</button>
			)}
		</div>
	);
}
