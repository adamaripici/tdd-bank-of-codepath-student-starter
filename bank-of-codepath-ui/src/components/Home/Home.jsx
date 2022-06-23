import axios from "axios";
import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"

                
export default function Home({transactions,setTransactions,transfers,setTransfers,error,setError,isLoading,setIsLoading,filterInputValue,newTransactionForm,setNewTransactionForm,isCreating,setIsCreating}) {
  // runs whenever home component is mounted to the screen
  React.useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const responseTransactions = await axios.get("http://localhost:3001/bank/transactions");
        if (responseTransactions.data.transactions) {
          setTransactions(responseTransactions.data.transactions);
        }
        console.log(1,responseTransactions)
        const responseTransfers = await axios.get('http://localhost:3001/bank/transfers');
        if (responseTransactions.data.transactions) {
          responseTransfers(responseTransactions.data.transfers);
        }
      } catch (error) {
        setError(error)
      }
      setIsLoading(false);
    }
      loadData();
    }, []);

    const handleOnSubmitNewTransaction = (event) => {
      // update individial fiels in the form using change event
      
    }

    const filteredTransactions = (filterInputValue) ? 
    transactions.filter(transaction => transaction.description.toLowerCase().indexOf(filterInputValue.toLowerCase()) != -1)
    : transactions
  return (
    <div className="home">
      <AddTransaction isCreating={isCreating} setIsCreating={setIsCreating} form={newTransactionForm} setForm={setNewTransactionForm} handleOnSubmit={handleOnSubmitNewTransaction}/>
      {isLoading ? (<h1>Loading...</h1>) : (<BankActivity transactions={filteredTransactions}/>)}
      {/* {error ? <h2 className="error">{error}</h2> : null} */}
      {/* {error ? <h2 className="error">{error}</h2> : (null)} */}
      
    </div>
  )
}
