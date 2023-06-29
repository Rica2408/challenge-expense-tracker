import { useContext } from "react";
import { Context } from "../context";
import { moneyFormatter } from "../utils";

const IncomeExpenses = () => {
  const { transactions, filterMonth } = useContext(Context);
  const transactionsByMonth = transactions.filter(transaction => transaction.date.getMonth() === filterMonth)

  const amounts = transactionsByMonth.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="d-flex" style={{width: "100%"}}>
      <div className="p-2" style={{color:"#73E117", borderRight: "solid grey", width: "50%", textAlign: "center"}}>
        <h6>Ingresos</h6>
        <p className="fw-bold">{moneyFormatter(income)}</p>
      </div>
      <div className="p-2" style={{color:"red", width: "50%", textAlign: "center"}}>
        <h6>Gastos</h6>
        <p className="fw-bold">{moneyFormatter(expense)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses