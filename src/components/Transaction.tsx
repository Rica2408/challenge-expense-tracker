import { deleteTransactionRequest } from "../api/transctions";
import { Context } from "../context";
import { TransactionType } from "../context/reducer";
import { useContext } from "react";
import { moneyFormatter } from "../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faClone } from '@fortawesome/free-solid-svg-icons'


interface TransactionProps {
    transaction: TransactionType
}

export const Transaction = ({ transaction }: TransactionProps) => {
    const { deleteTransaction, isOnline } = useContext(Context);
    const sign = transaction.amount < 0 ? '' : '+';

    const handlerDeleteTransaction = async() => {
      if (isOnline) {
        const res = await deleteTransactionRequest(transaction.id)
        if(res) {
          deleteTransaction(transaction)
        }
      } else {
        deleteTransaction(transaction)
      }
    }
  
    return (
      <div className="d-flex justify-content-between">
        <div>
          <FontAwesomeIcon style={{marginRight: 10}} icon={faClone} />

          {transaction.label}
        </div>
        <div>
         <span style={{color: sign !== "+" ? 'red' : "green"}}>{moneyFormatter(transaction.amount)}</span>
         <FontAwesomeIcon style={{marginLeft: 10}} onClick={() => handlerDeleteTransaction()} icon={faClose} />
        </div>
      </div>
    )
  }