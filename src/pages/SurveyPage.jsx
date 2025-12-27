import { useState } from 'react';
import { Link } from 'react-router-dom';
import { surveyPages, TOTAL_QUESTION_PAGES } from '../data/surveyQuestions';
import { useSurveyStorage } from '../hooks/useSurveyStorage';
import SurveyProgress from '../components/survey/SurveyProgress';
import './SurveyPage.css';

function SurveyPage() {
  const { answers, updateAnswer, clearSurvey } = useSurveyStorage();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentPage = surveyPages[currentPageIndex];
  const isIntroPage = currentPage?.isIntro;
  const isLastPage = currentPageIndex === surveyPages.length - 1;

  const handleNext = () => {
    if (isLastPage) {
      setIsComplete(true);
    } else {
      setCurrentPageIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleRadioChange = (questionId, value) => {
    updateAnswer(questionId, value);
  };

  const handleCheckboxChange = (questionId, value, checked) => {
    const current = answers[questionId] || [];
    if (checked) {
      updateAnswer(questionId, [...current, value]);
    } else {
      updateAnswer(questionId, current.filter((v) => v !== value));
    }
  };

  const handleTextChange = (questionId, value) => {
    updateAnswer(questionId, value);
  };

  const handleStartOver = () => {
    clearSurvey();
    setCurrentPageIndex(0);
    setIsComplete(false);
    window.scrollTo(0, 0);
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'radio':
        return (
          <div className="question-options">
            {question.options.map((option) => (
              <label key={option} className="radio-option">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleRadioChange(question.id, option)}
                />
                <span className="radio-label">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="question-options">
            {question.options.map((option) => (
              <label key={option} className="checkbox-option">
                <input
                  type="checkbox"
                  value={option}
                  checked={(answers[question.id] || []).includes(option)}
                  onChange={(e) => handleCheckboxChange(question.id, option, e.target.checked)}
                />
                <span className="checkbox-label">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'text':
        return (
          <input
            type="text"
            className="text-input"
            placeholder={question.placeholder}
            value={answers[question.id] || ''}
            onChange={(e) => handleTextChange(question.id, e.target.value)}
          />
        );

      case 'textarea':
        return (
          <textarea
            className="textarea-input"
            placeholder={question.placeholder}
            rows={4}
            value={answers[question.id] || ''}
            onChange={(e) => handleTextChange(question.id, e.target.value)}
          />
        );

      default:
        return null;
    }
  };

  if (isComplete) {
    return (
      <div className="survey-page">
        <div className="container">
          <div className="survey-card completion-card">
            <div className="completion-icon">✓</div>
            <h1>Thank You!</h1>
            <p>Your responses have been recorded. Thank you for taking the time to complete the BIC Needs Assessment Survey.</p>
            <p>Your input helps us better understand and serve the brain injury community.</p>
            <div className="completion-actions">
              <Link to="/" className="primary-btn">Return Home</Link>
              <button className="secondary-btn" onClick={handleStartOver}>Take Survey Again</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="survey-page">
      <div className="container">
        <div className="survey-header">
          {/* <h1>Needs Assessment Survey</h1> */}
          {!isIntroPage && (
            <SurveyProgress
              currentPage={currentPage.pageNumber}
              totalPages={TOTAL_QUESTION_PAGES}
            />
          )}
        </div>

        <div className="survey-card">
          <h2 className="page-title">{currentPage.title}</h2>
          
          {isIntroPage ? (
            <div className="intro-content">
              <div className="intro-logo">
                <img src="/src/assets/images/BIC-logo.png" alt="Brain Injury Connection" />
              </div>
              <div className="intro-text">
                {currentPage.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="intro-note">
                <p>If you are unable to participate in the online version, you can download the printable version.</p>
                <p>
                  <strong>Brain Injury Connection</strong><br />
                  Attention: Survey Committee<br />
                  PO Box 2452<br />
                  Alameda, CA 94501
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="page-description">{currentPage.description}</p>
              <div className="questions-list">
                {currentPage.questions?.map((question) => (
                  <div key={question.id} className="question-block">
                    <label className="question-label">
                      {question.question}
                      {question.required && <span className="required">*</span>}
                    </label>
                    {renderQuestion(question)}
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="survey-navigation">
            {currentPageIndex > 0 && (
              <button className="nav-btn back-btn" onClick={handleBack}>
                ← Back
              </button>
            )}
            <button className="nav-btn next-btn" onClick={handleNext}>
              {isLastPage ? 'Submit Survey' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyPage;

