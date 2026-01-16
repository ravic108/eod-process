import data from './PlugTrade.json'

function PlugTrade() {

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
      <p>Verify the Assets match the sum of Liabilities and Plug Trade</p>
      <div className="assets-table-container">
        {renderTable('Assets', data.assets)}
      </div>
      <div className="liabilities-table-container">
        {renderTable('Liabilities', data.liabilities)}
      </div>
    </div>
  ) 
}

export default PlugTrade
