function StepperStep({ step, index, isActive, isCompleted, totalSteps, onClick }) {
  return (
    <div className="step-wrapper">
      <div
        className={`step-circle ${isCompleted ? 'active' : ''} ${
          isActive ? 'current' : ''
        }`}
        onClick={onClick}
        title={step}
      >
        {isCompleted ? (
          <span className="checkmark">{step}<br/> ✓</span>
        ) : (
          <span>{step}</span>
        )}
      </div>
      <div className="step-label">{step}</div>
      {index < totalSteps - 1 && (
        <div className={`step-line ${isCompleted ? 'active' : ''}`}></div>
      )}
    </div>
  )
}

export default StepperStep
