import { useState } from 'react'
import data from './CashSweep.json'
import generatedData from './CashSweepGenerated.json'

function CashSweep({ stepName = 'Cash Sweep to Stamford', onGenerationComplete }) {
  const [showGenerated, setShowGenerated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowGenerated(true)
      onGenerationComplete && onGenerationComplete()
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
        <p>Execute cash sweep to Stamford</p>
      </div>
      <div className="generate-button-container">
        <button className="generate-btn" onClick={handleGenerateClick} disabled={showGenerated}>Sweep Cash</button>
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
      <div className="transactions-table-container">
        {renderTable('Transactions', currentData.transactions)}
      </div>
      <div className="status-table-container">
        {renderTable('Status', currentData.status)}
      </div>
    </div>
  ) 
}

export default CashSweep
