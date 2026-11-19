import '../styles/Expenselist.css';

function Expenselist({expense}) {
    
    return (
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

                <input type="search"
                placeholder="search expense..."/>
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
                 {expense.map((expense)=>(
                    <tr>
                        <td>{expense.amount}</td>
                        <td>{expense.shopping}</td>
                        <td>{expense.date}</td>
                        <td>{expense.category}</td>
                        <td className="table-actions">
                            <button className="btn-delete">Delete</button>
                            <button className="btn-edit">Edit</button>
                            <button className="btn-readmore">view</button>
                        </td>
                    </tr>
                    ))}
                    <tr className="expense-total">
                      <td colSpan={5}>Total: ₹7500</td> 
                      </tr> 
                </tbody>
            </table>
        </div>  
    );
}

export default Expenselist