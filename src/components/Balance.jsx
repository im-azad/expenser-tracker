import { useSelector } from "react-redux";

export default function Balance() {
    const { transactions } = useSelector((state) => state.transaction);

    const calculateIncome = () => {
        let income = 0;
        transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                income += transaction.amount;
            } else {
                income -= transaction.amount;
            }
        });
        return income;
    };

    return (
		<div className="top_card">
			<p>Your Current Balance</p>
			<h3>
				<span>৳</span>{" "}
				{transactions.length > 0 ? <span>{calculateIncome()}</span> : 0}
			</h3>
		</div>
	);
}
