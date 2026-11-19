import "../styles/Expenseform.css";

export default function Expenseform() {
  return (
    <div className="Expenseform">
        <form>
            <h1>Expense Form </h1>
            <input type="number"
            name="amount"
            placeholder="Enter Amount..."/>

            <input 
            type="text"
            name="description"
            placeholder="Enter Description..."/>

            <input 
            type="date"
            name="date"
            placeholder="Enter Date..."/>

            <lable htmlFor="category">Category:</lable>
            <select id="category" name="category" defaultValue="">
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="Transportation">Transportation</option>
                <option value="education">Education</option>
                <option value="phonebill">Phonebill </option>
                <option value="entertaiment">Entertaiment</option>
            </select>

            <div className="btn">
                <button type="button">Add Expense</button>
            </div>
        </form>
    </div>

  );


}