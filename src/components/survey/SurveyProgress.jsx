import './SurveyProgress.css';

function SurveyProgress({ currentPage, totalPages }) {
  const percentage = totalPages > 0 ? (currentPage / totalPages) * 100 : 0;

  return (
    <div className="survey-progress">
      <div className="progress-info">
        <span>Page {currentPage} of {totalPages}</span>
        <span>{Math.round(percentage)}% Complete</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default SurveyProgress;

