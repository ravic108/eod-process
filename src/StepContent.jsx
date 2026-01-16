import PlugTrade from './steps/PlugTrade'
import RateReset from './steps/RateReset'
import Penalties from './steps/Penalties'
import Participation from './steps/Participation'
import NRCC from './steps/NRCC'
import CashSweep from './steps/CashSweep'
import ReverseSweep from './steps/ReverseSweep'
import SweepWire from './steps/SweepWire'
import SignOff from './steps/SignOff'

const stepComponents = {
  'Plug-trade': PlugTrade,
  'Rate Reset': RateReset,
  'Penalties': Penalties,
  'Participation': Participation,
  'NRCC': NRCC,
  'Cash Sweep to Stamford': CashSweep,
  'Reverse Sweep': ReverseSweep,
  'Sweep Wire': SweepWire,
  'Sign-off': SignOff,
}

function StepContent({ stepName, currentStep, totalSteps, onGenerationComplete }) {
  const StepComponent = stepComponents[stepName]

  return (
    <div className="step-content">
      <h2>{stepName}</h2>
      <p>Step {currentStep} of {totalSteps}</p>
      {StepComponent && <StepComponent stepName={stepName} onGenerationComplete={onGenerationComplete} />}
    </div>
  )
}

export default StepContent
