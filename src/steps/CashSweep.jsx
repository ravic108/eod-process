import data from './CashSweep.json'

function CashSweep() {
  const renderTable = (title, rows) => (
    <div className="table-container">
      <h3 style={{ color: 'black' }}>{title}</h3>
      <table className="plug-trade-table">
        <thead>
          <tr>
            <th style={{ color: 'black' }}>Category</th>
            <th style={{ color: 'black' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td style={{ color: 'black' }}>{row.category}</td>
              <td style={{ color: 'black', fontWeight: 'bold' }}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="step-details">
      <p>Execute cash sweep to Stamford</p>
      <div className="transactions-table-container">
        {renderTable('Transactions', data.transactions)}
      </div>
      <div className="status-table-container">
        {renderTable('Status', data.status)}
      </div>
    </div>
  ) 
}

export default CashSweep
