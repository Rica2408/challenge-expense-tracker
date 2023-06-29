import axios from "axios"
import { TransactionType } from "../context/reducer"

export const getTransactionsRequest = async () => {
    const result = await axios.get("http://localhost:3030/transactions")
    return result.data
}

export const addTransactionRequest = async (transaction: TransactionType) => {
    try {
        const result = await axios.post("http://localhost:3030/transactions", transaction)
        return result
    } catch (error) {
        return false
    }
}

export const deleteTransactionRequest = async (id: string) => {
    try {
        const result = await axios.delete( `http://localhost:3030/transactions/${id}`)
        return result
    } catch (error) {
        return false
    }
}