import { useState } from 'react'
import StepperStep from './StepperStep'
import StepContent from './StepContent'
import './Stepper.css'

function Stepper({ steps = [], initialStep = 0 }) {
  const [activeStep, setActiveStep] = useState(initialStep)

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className="stepper-container">
      <div className="stepper">
        {steps.map((step, index) => (
          <StepperStep
            key={index}
            step={step}
            index={index}
            isActive={index === activeStep}
            isCompleted={index < activeStep}
            totalSteps={steps.length}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>

      <StepContent
        stepName={steps[activeStep]}
        currentStep={activeStep + 1}
        totalSteps={steps.length}
      />

      <div className="button-group">
        <button
          className="btn btn-prev"
          onClick={handlePrev}
          disabled={activeStep === 0}
        >
          Previous
        </button>
        <button
          className="btn btn-next"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Stepper
