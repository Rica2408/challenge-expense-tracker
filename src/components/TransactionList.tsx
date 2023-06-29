import { useContext } from "react";
import { Context } from "../context";
import { Transaction } from "./Transaction";
import { TransactionType } from "../context/reducer";
import { monthsEnum } from "../utils";

const TransactionList = () => {
  const { transactions, filterMonth } = useContext(Context);

  const monthTransactions = transactions.filter(transaction => transaction.date.getMonth() === filterMonth)

  const filterByDay = monthTransactions.reduce((acc: Record<string, TransactionType[]>, curr) => {
    if (acc[curr.date.getDate()]) {
      acc[curr.date.getDate()] = [curr, ...acc[curr.date.getDate()]]
    } else {
      acc[curr.date.getDate()] = [curr]
    }
    return acc
  }, {})

  return (
    <div style={{height:300, width: "90%"}} className="overflow-auto" >
      {Object.keys(filterByDay).map(day => (
        <div key={day}>
          <h6 className="fw-bold" style={{marginBottom: 15, marginTop: 15}}>{day} {monthsEnum[filterMonth]}</h6>
          <ul className="list-group">
            {filterByDay[day].map((transaction, index) => (
              <li key={index} className="list-group-item">
                <Transaction key={transaction.id} transaction={transaction} />
              </li>
            ))}
          </ul>
        </div>
      ))
      }
    </div>
  )
}

export default TransactionList