import data from './Participation.json'

function Participation() {
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
      <div className="step-details-header">
        <p>Review participation data</p>
      </div>
      <div className="generate-button-container">
        <button className="generate-btn">Apply Participation</button>
      </div>
      <div className="accounts-table-container">
        {renderTable('Accounts', data.accounts)}
      </div>
      <div className="metrics-table-container">
        {renderTable('Metrics', data.metrics)}
      </div>
    </div>
  ) 
}

export default Participation
