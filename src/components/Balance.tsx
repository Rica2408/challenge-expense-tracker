import { useContext } from "react";
import { Context } from "../context";
import { moneyFormatter } from "../utils";

const Balance = () => {
    const { transactions, filterMonth } = useContext(Context);
    const transactionsNyMonth = transactions.filter(transaction => transaction.date.getMonth() === filterMonth)
    const amounts = transactionsNyMonth.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h5 className="fw-bold">Balance del mes</h5>
          <h1 style={{color: "#199AE8"}}>{moneyFormatter(total)}</h1>
        </div>
      )
}

export default Balance