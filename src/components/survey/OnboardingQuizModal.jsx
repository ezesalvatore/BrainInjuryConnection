import { useState } from 'react';
import { Link } from 'react-router-dom';
import { onboardingQuestions, getRecommendations } from '../../data/onboardingQuestions';
import { useSurveyStorage } from '../../hooks/useSurveyStorage';
import './OnboardingQuizModal.css';

function OnboardingQuizModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const { completeOnboarding } = useSurveyStorage();

  if (!isOpen) return null;

  const currentQuestion = onboardingQuestions[currentStep];
  const isLastQuestion = currentStep === onboardingQuestions.length - 1;

  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      completeOnboarding(answers);
      setShowResults(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleClose = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    onClose();
  };

  const recommendations = getRecommendations(answers);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="onboarding-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          ×
        </button>

        {!showResults ? (
          <>
            <div className="modal-progress">
              {onboardingQuestions.map((_, idx) => (
                <div
                  key={idx}
                  className={`progress-dot ${idx <= currentStep ? 'active' : ''}`}
                />
              ))}
            </div>

            <h2 className="modal-question">{currentQuestion.question}</h2>

            <div className="modal-options">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  className={`option-btn ${answers[currentQuestion.id] === option.value ? 'selected' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="modal-actions">
              {currentStep > 0 && (
                <button className="back-btn" onClick={handleBack}>
                  ← Back
                </button>
              )}
              <button
                className="next-btn"
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
              >
                {isLastQuestion ? 'See Recommendations' : 'Next →'}
              </button>
            </div>
          </>
        ) : (
          <div className="results-view">
            <h2>Here's where to start!</h2>
            <p>Based on your answers, we recommend:</p>
            <div className="recommendations">
              {recommendations.map((rec, idx) => (
                <Link key={idx} to={rec.link} className="rec-card" onClick={handleClose}>
                  <h4>{rec.title}</h4>
                  <p>{rec.description}</p>
                  <span className="rec-arrow">→</span>
                </Link>
              ))}
            </div>
            <button className="close-btn" onClick={handleClose}>
              Got it, thanks!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OnboardingQuizModal;

