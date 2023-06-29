import Balance from "./Balance"
import IncomeExpenses from "./IncomeExpenses"

const BalanceMoth = () => {
    return(
        <div className="d-flex flex-column rounded" style={{background: "white", width: "90%", marginTop: 10, padding: 10, marginBottom: 10}}>
            <Balance />
            <IncomeExpenses />
        </div>
    )
}

export default BalanceMoth