import { useState } from 'react'
import data from './Penalties.json'
import generatedData from './PenaltiesGenerated.json'

function Penalties({ stepName = 'Penalties', onGenerationComplete }) {
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
        <p>Review and apply penalties</p>
      </div>
      <div className="generate-button-container">
        <button className="generate-btn" onClick={handleGenerateClick} disabled={showGenerated}>Calculate Penalties</button>
      </div>
      <div className="status-message">
        {isLoading && (
          <>
            <span className="spinner"></span>
            Generating...
          </>
        )}
        {showGenerated && !isLoading && `${stepName} Successful!`}
      </div>
      <div className="penalties-table-container">
        {renderTable('Penalties', currentData.penalties)}
      </div>
      <div className="adjustments-table-container">
        {renderTable('Adjustments', currentData.adjustments)}
      </div>
    </div>
  ) 
}

export default Penalties
