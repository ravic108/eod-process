import data from './SweepWire.json'

function SweepWire() {
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
      <p>Execute sweep wire transfer</p>
      <div className="transfers-table-container">
        {renderTable('Transfers', data.transfers)}
      </div>
      <div className="details-table-container">
        {renderTable('Details', data.details)}
      </div>
    </div>
  ) 
}

export default SweepWire
