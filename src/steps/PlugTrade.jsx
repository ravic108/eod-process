function PlugTrade() {
  return (
    <div className="step-details">
      <p>Verify the Assets match the sum of Liabilities and Plug Trade</p>
      
      <div className="assets-table-container">
        <h3 style={{ color: 'black' }}>Assets</h3>
        <table className="plug-trade-table">
          <thead>
            <tr>
              <th style={{ color: 'black' }}>Category</th>
              <th style={{ color: 'black' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: 'black' }}>Total Assets</td>
              <td style={{ color: 'black', fontWeight: 'bold' }}>$0.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="liabilities-table-container">
        <h3 style={{ color: 'black' }}>Liabilities</h3>
        <table className="plug-trade-table">
          <thead>
            <tr>
              <th style={{ color: 'black' }}>Category</th>
              <th style={{ color: 'black' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: 'black' }}>Liability Trade</td>
              <td style={{ color: 'black', fontWeight: 'bold' }}>$0.00</td>
            </tr>
            <tr>
              <td style={{ color: 'black' }}>Plug Trade</td>
              <td style={{ color: 'black', fontWeight: 'bold' }}>$0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) 
}

export default PlugTrade
