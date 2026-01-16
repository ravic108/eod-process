import { useState } from 'react'
import data from './SweepWire.json'
import generatedData from './SweepWireGenerated.json'

function SweepWire({ stepName = 'Sweep Wire', onGenerationComplete }) {
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
        <p>Execute sweep wire transfer</p>
      </div>
      <div className="generate-button-container">
        <button className="generate-btn" onClick={handleGenerateClick} disabled={showGenerated}>Generate Sweep Wire</button>
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
      <div className="transfers-table-container">
        {renderTable('Transfers', currentData.transfers)}
      </div>
      <div className="details-table-container">
        {renderTable('Details', currentData.details)}
      </div>
    </div>
  ) 
}

export default SweepWire
