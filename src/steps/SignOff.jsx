import { useState } from 'react'
import data from './SignOff.json'
import generatedData from './SignOffGenerated.json'

function SignOff({ stepName = 'Sign-off' }) {
  const [showGenerated, setShowGenerated] = useState(false)

  const handleGenerateClick = () => {
    setShowGenerated(true)
  }

  const currentData = showGenerated ? generatedData : data

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
        <p>Sign off on end of day process</p>
      </div>
      <div className="generate-button-container">
        <button className="generate-btn" onClick={handleGenerateClick} disabled={showGenerated}>Approve</button>
      </div>
      <div className="status-message">
        {showGenerated && `${stepName} Successful!`}
      </div>
      <div className="verifications-table-container">
        {renderTable('Verifications', currentData.verifications)}
      </div>
      <div className="approvals-table-container">
        {renderTable('Approvals', currentData.approvals)}
      </div>
    </div>
  ) 
}

export default SignOff
