import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import TransactionDetail from "../TransactionDetail/TransactionDetail"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"

export default function App() {
  // state variables
const [isLoading, setIsLoading] = React.useState(false); //a boolean representing whether or not the app is currently requesting data from the API
const [transactions, setTransactions] = React.useState([]); //the list of bank transaction items fetched from the API
const [transfers, setTransfers] = React.useState([]); // the list of bank transfer items fetched from the API
const [error, setError] = React.useState(null);  //any errors associated with fetching data from the API
const [filterInputValue, setFilterInputValue] = React.useState(""); // a string value used to create a controlled input in the FilterInput.jsx component
const [newTransactionForm, setNewTransactionForm] = React.useState({category: "", description:"", amount: -1});
const [isCreating, setIsCreating] = React.useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue}/>
        <main>
          <Routes>
            <Route path ='/' element={
              <Home 
                transactions={transactions}
                setTransactions={setTransactions}
                transfers={transfers}
                setTransfers={setTransfers}
                error={error}
                setError={setError}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                filterInputValue={filterInputValue}
                newTransactionForm={newTransactionForm}
                setNewTransactionForm={setNewTransactionForm}
                isCreating={isCreating}
                setIsCreating={setIsCreating}
              />
            }>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
    
  )
}
