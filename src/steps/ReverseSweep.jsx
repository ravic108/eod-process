import { useState } from 'react'
import data from './ReverseSweep.json'
import generatedData from './ReverseSweepGenerated.json'

function ReverseSweep({ stepName = 'Reverse Sweep' }) {
  const [showGenerated, setShowGenerated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowGenerated(true)
    }, 1500)
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
        <p>Perform reverse sweep operations</p>
      </div>
      <div className="generate-button-container">
        <button className="generate-btn" onClick={handleGenerateClick} disabled={showGenerated}>Reverse Sweep Cash</button>
      </div>
      <div className={`status-message ${isLoading ? 'loading' : ''}`}>
        {isLoading && (
          <>
            <span className="spinner"></span>
            Generating...
          </>
        )}
        {showGenerated && !isLoading && `${stepName} Successful!`}
      </div>
      <div className="sweeps-table-container">
        {renderTable('Sweeps', currentData.sweeps)}
      </div>
      <div className="status-table-container">
        {renderTable('Status', currentData.status)}
      </div>
    </div>
  ) 
}

export default ReverseSweep
