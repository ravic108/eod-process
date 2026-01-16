import data from './SignOff.json'

function SignOff() {
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
      <p>Sign off on end of day process</p>
      <div className="verifications-table-container">
        {renderTable('Verifications', data.verifications)}
      </div>
      <div className="approvals-table-container">
        {renderTable('Approvals', data.approvals)}
      </div>
    </div>
  ) 
}

export default SignOff
