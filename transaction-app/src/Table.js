Table.js
import React, { useState} from "react";

function Table ({arayOfAllTransactions}) {
    const [dataOfArray, setDataOfArray] = useState ("")

    function handleSubmit (e) {
        e.preventDefault ()
    }
    function handleChange (e) {
        setDataOfArray (e.target.value)
    }

    const oneTransaction = arayOfAllTransactions.filter ((item)=> {
        return dataOfArray.toLowerCase () === "" ? item : item.description.toLowerCase ().includes (dataOfArray)
    })
    .map ((transaction)=> {
        return (
            <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
            </tr>
        )
    })

    return (
        <>
            <div className="container-fluid mb-4">
                <form onSubmit={handleSubmit} className="d-flex" role="search">
                    <input onChange={handleChange} className="form-control me-2" type="search" placeholder="Enter description to search... (use lowcase)" aria-label="Search"/>
                </form>
            </div>

            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {oneTransaction}
                </tbody>
            </table>
          
            
            <style>
            <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
/>
                {`
                    .container-fluid {
                        max-width: 800px;
                    }
                    .table {
                        font-size: 14px;
                    }
                    .table td, .table th {
                        vertical-align: middle;
                        text-align: center;
                    }
                    .table th {
                        font-weight: bold;
                    }
                    .table tbody tr:hover {
                        background-color: #f5f5f5;
                    }
                `}
            </style>
        </>
    )
}

export default Table 
