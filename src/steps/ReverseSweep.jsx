import data from './ReverseSweep.json'

function ReverseSweep() {
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
        <p>Perform reverse sweep operations</p>
      </div>
      <div className="generate-button-container">
        <button className="generate-btn">Reverse Sweep Cash</button>
      </div>
      <div className="sweeps-table-container">
        {renderTable('Sweeps', data.sweeps)}
      </div>
      <div className="status-table-container">
        {renderTable('Status', data.status)}
      </div>
    </div>
  ) 
}

export default ReverseSweep
