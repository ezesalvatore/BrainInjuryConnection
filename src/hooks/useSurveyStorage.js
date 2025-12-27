import { useState, useEffect } from 'react';

const SURVEY_ANSWERS_KEY = 'bic_survey_answers';
const SURVEY_PAGE_KEY = 'bic_survey_current_page';
const ONBOARDING_COMPLETE_KEY = 'bic_onboarding_complete';
const ONBOARDING_ANSWERS_KEY = 'bic_onboarding_answers';

export function useSurveyStorage() {
  const [answers, setAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem(SURVEY_ANSWERS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [currentPage, setCurrentPage] = useState(() => {
    try {
      const saved = localStorage.getItem(SURVEY_PAGE_KEY);
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [onboardingComplete, setOnboardingComplete] = useState(() => {
    return localStorage.getItem(ONBOARDING_COMPLETE_KEY) === 'true';
  });

  const [onboardingAnswers, setOnboardingAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem(ONBOARDING_ANSWERS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(SURVEY_ANSWERS_KEY, JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    localStorage.setItem(SURVEY_PAGE_KEY, currentPage.toString());
  }, [currentPage]);

  const updateAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const updateAnswers = (newAnswers) => {
    setAnswers((prev) => ({ ...prev, ...newAnswers }));
  };

  const completeOnboarding = (answers) => {
    localStorage.setItem(ONBOARDING_COMPLETE_KEY, 'true');
    localStorage.setItem(ONBOARDING_ANSWERS_KEY, JSON.stringify(answers));
    setOnboardingComplete(true);
    setOnboardingAnswers(answers);
  };

  const resetOnboarding = () => {
    localStorage.removeItem(ONBOARDING_COMPLETE_KEY);
    localStorage.removeItem(ONBOARDING_ANSWERS_KEY);
    setOnboardingComplete(false);
    setOnboardingAnswers({});
  };

  const clearSurvey = () => {
    localStorage.removeItem(SURVEY_ANSWERS_KEY);
    localStorage.removeItem(SURVEY_PAGE_KEY);
    setAnswers({});
    setCurrentPage(0);
  };

  const isSurveyComplete = () => {
    return currentPage >= 8;
  };

  return {
    answers,
    currentPage,
    setCurrentPage,
    updateAnswer,
    updateAnswers,
    clearSurvey,
    isSurveyComplete,
    onboardingComplete,
    onboardingAnswers,
    completeOnboarding,
    resetOnboarding,
  };
}

export default useSurveyStorage;
