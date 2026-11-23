import { useEffect, useState } from "react";
import "../styles/Expenselist.css";
import ConfirmationModel from "./ConfirmationModel";
import EditModel from "./EditModel";

function Expenselist() {
  const [expense, setExpenses] = useState([]);
  const [deleteexpense, setDeleteExpense] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [editId, setEditId] = useState(null);

  const loadExpenses = () => {
    const savedExpenses = JSON.parse(localStorage.getItem("expense") || "[]");
    setExpenses(savedExpenses);
  };

  useEffect(() => {
    //safe: we only read localstorage on mount
    //eslint-disable-next-line react-hooks/set-state-in-effect
    loadExpenses();
  }, []);
  const totalAmount = expense.reduce(
    (sum, item) => sum + Number(item.amount),
    0,
  );

  // Delete expense
  const handleDelete = (id) => {
    const updateExpense = expense.filter((item) => item.id !== id);

    localStorage.setItem("expense", JSON.stringify(updateExpense));

    setExpenses(updateExpense);
    setDeleteExpense(null);
  };

  const editHandler = (id) => {
    setEditId(id);
    setOpenModel(true);
  };

  return (
    <>
      <div className="Expenselist">
        <div className="list-search">
          <div>
            <h1> your exponse</h1>
            <p className="list-help">
              Search, edit, or remove an expense below.
            </p>
          </div>

          <div>
            <select>
              <option>All categories</option>
              <option>food</option>
              <option>travel</option>
              <option>shopping</option>
              <option>entertaiment</option>
            </select>

            <input type="search" placeholder="search expense..." />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {expense.length > 0 ? (
              expense.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.amount}</td>
                  <td>{expense.description}</td>
                  <td>{expense.date}</td>
                  <td>{expense.category}</td>
                  <td className="table-actions">
                    <button
                      className="btn-delete"
                      onClick={() => setDeleteExpense(expense)}
                    >
                      Delete
                    </button>
                    <button onClick={() => editHandler(expense.id)}
                     className="btn-edit">Edit</button>
                    <button className="btn-readmore">view</button>
                  </td>
                </tr>
              ))
            ) : (
              <>
                <tr>
                  <td colSpan="7" className="no-data">
                    No Expenses Found
                  </td>
                </tr>
              </>
            )}
            <tr className="expense-total">
              <td colSpan="7">Total Amount: {totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {deleteexpense !== null && (
        <ConfirmationModel
          title="Delete Expense"
          message={"Are you sure you want to delete this expense"}
          confirmText="Delete"
          cancelText="Cancel"
          oncancel={() => setDeleteExpense(null)}
          onConfirm={() => handleDelete(deleteexpense.id)}
        />
      )}
      {openModel && editId !== null && (
      <EditModel/>
      )}
    </>
  );
}

export default Expenselist;
