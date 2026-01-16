import { useState } from 'react'
import data from './PlugTrade.json'
import generatedData from './PlugTradeGenerated.json'

function PlugTrade({ stepName = 'Plug-trade' }) {
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
        <p>Verify the Assets match the sum of Liabilities and Plug Trade</p>
      </div>
      <div className="generate-button-container">
        <button className="generate-btn" onClick={handleGenerateClick} disabled={showGenerated}>Generate Plug-trade</button>
      </div>
      <div className="status-message">
        {showGenerated && `${stepName} Successful!`}
      </div>
      <div className="assets-table-container">
        {renderTable('Assets', currentData.assets)}
      </div>
      <div className="liabilities-table-container">
        {renderTable('Liabilities', currentData.liabilities)}
      </div>
    </div>
  ) 
}

export default PlugTrade
