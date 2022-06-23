import * as React from "react"
import "./AddTransaction.css"

export default function AddTransaction({isCreating,setIsCreating,form,setForm,handleOnSubmit}) {
  const handleOnFormFieldChange = (event) => {
    // updates individual fields in the form using the `name` and `value` properties on `event.target`. 
    const {name, value} = event.target
    setForm({...form, [name]: value}) 
    // spread operators
  }
  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm 
        handleOnFormFieldChange={handleOnFormFieldChange} 
        handleOnSubmit={handleOnSubmit} 
        form={form}
        isCreating={isCreating}
      />
    </div>
  )
}

export function AddTransactionForm({handleOnFormFieldChange,handleOnSubmit,form,isCreating}) {
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input />
        </div>
        <div className="field">
          <label>Category</label>
          <input />
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input />
        </div>

        <button className="btn add-transaction" type="submit">
          Add
        </button>
      </div>
    </div>
  )
}
