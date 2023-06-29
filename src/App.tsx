import Header from './components/Header';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { Provider } from './context';
import BalanceMoth from './components/BalanceMoth'
import { useEffect, useState } from 'react';
import { getTransactionsRequest } from './api/transctions';
import { TransactionType } from './context/reducer';
import { initialState } from './utils';

const App = () => {
  const [initialData, setInitialData] = useState<TransactionType[]>()
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    const getFakeTransactions = async () => {
      try {
        const transaction = await getTransactionsRequest()
        setInitialData(transaction)
      } catch (error) {
        setInitialData(initialState.transactions)
        setIsOnline(false)
      }
    }
    if (isOnline) {
      getFakeTransactions()
    }
  }, [isOnline])

  return (
    <div className='d-flex justify-content-center' style={{width: "100%"}}>
      <Provider initialData={initialData} isOnline={isOnline}>
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: 600, height:"600px", background: "#E3EDFD"}}>
            <Header />
            <BalanceMoth />
            <TransactionList />
            <AddTransaction />
        </div>
      </Provider>
    </div>
  );
}

export default App;
