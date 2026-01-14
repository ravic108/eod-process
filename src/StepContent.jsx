import PlugTrade from './steps/PlugTrade'
import RateReset from './steps/RateReset'
import Participation from './steps/Participation'
import CashSweep from './steps/CashSweep'
import ReverseSweep from './steps/ReverseSweep'
import SweepWire from './steps/SweepWire'
import SignOff from './steps/SignOff'

const stepComponents = {
  'Plug-trade': PlugTrade,
  'Rate Reset': RateReset,
  'Participation': Participation,
  'Cash Sweep to Stamford': CashSweep,
  'Reverse Sweep': ReverseSweep,
  'Sweep Wire': SweepWire,
  'Sign-off': SignOff,
}

function StepContent({ stepName, currentStep, totalSteps }) {
  const StepComponent = stepComponents[stepName]

  return (
    <div className="step-content">
      <h2>{stepName}</h2>
      <p>Step {currentStep} of {totalSteps}</p>
      {StepComponent && <StepComponent />}
    </div>
  )
}

export default StepContent
