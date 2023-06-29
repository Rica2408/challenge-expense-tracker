import { createContext, useReducer, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { ActionsEnum, TransactionType, reducer } from './reducer';

interface ContextType {
    transactions: TransactionType[],
    addTransaction: (transaction: TransactionType) => void,
    deleteTransaction: (transaction: TransactionType) => void,
    filterMonth: number,
    setFilterMonth: Dispatch<SetStateAction<number>>,
    isOnline: boolean
}

export const Context = createContext<ContextType>({
    transactions: [],
    addTransaction: () => {},
    deleteTransaction: () => {},
    filterMonth: new Date().getMonth(),
    setFilterMonth: () => {},
    isOnline: true
});

export const Provider = ({ children, initialData, isOnline }: any) => {
    const [state, dispatch] = useReducer(reducer, {transactions: []})
    const [filterMonth, setFilterMonth] = useState(new Date().getMonth())
    const deleteTransaction = (transaction: TransactionType) => {
        dispatch({
            type: ActionsEnum.DELETE_TRANSACTION,
            payload: transaction
        });
    }

    const addTransaction = (transaction: TransactionType) => {
        dispatch({
            type: ActionsEnum.ADD_TRANSACTION,
            payload: transaction
        });
    }

    useEffect(() => {
        if (initialData) {
            const parseData = initialData.map((transaction: TransactionType) => {
                transaction.date = new Date(transaction.date)
                return transaction
            })
            dispatch({
                type: ActionsEnum.UPDATE_TRANSACTION,
                payload: parseData
            });
        }
    },[initialData])

    return (<Context.Provider
        value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction,
            filterMonth,
            setFilterMonth,
            isOnline
        }}>
        {children}
    </Context.Provider>);
}