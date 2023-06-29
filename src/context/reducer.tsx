export type TransactionType = {
  id: string,
  amount: number,
  label: string,
  date: Date,
}

export type InitialState = {
  transactions: TransactionType[]
}

export enum ActionsEnum {
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  UPDATE_TRANSACTION = "UPDATE_TRANSACTION"
}

export type ActionType = {
  type: ActionsEnum,
  payload: TransactionType | TransactionType[]
}

export const reducer = (state: InitialState, action: ActionType): InitialState => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((transaction: TransactionType) => transaction.id !== (action.payload as TransactionType).id)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload as TransactionType, ...state.transactions]
      }
      case 'UPDATE_TRANSACTION':
        return {
          transactions: [...action.payload as TransactionType[]]
        }
    default:
      return state;
  }
}