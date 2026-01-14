import Stepper from './Stepper'
import './App.css'

function App() {
  const steps = ['Plug-trade', 'Rate Reset', 'Participation', 'Cash Sweep to Stamford', 'Reverse Sweep', 'Sweep Wire', 'Sign-off'];

  return (
    <>
      <h1>End of the Day</h1>
      <Stepper steps={steps} initialStep={0} />
    </>
  )
}

export default App
