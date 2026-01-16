import data from './RateReset.json'

function RateReset() {
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
        <p>Perform rate reset operations</p>
      </div>
      <div className="generate-button-container">
        <button className="generate-btn">Apply today's Rate</button>
      </div>
      <div className="previous-rates-table-container">
        {renderTable('Previous Rates', data.previousRates)}
      </div>
      <div className="new-rates-table-container">
        {renderTable('New Rates', data.newRates)}
      </div>
    </div>
  ) 
}

export default RateReset
