import "../assest/main.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";
const Main = ({ authedUser, questions, users }) => {
  const [active, setActive] = useState(true);
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);
  const toogleShow = () => {
    setActive((prev) => setActive(!prev));
  };
  return (
    <div className="main">
      <div className="switch">
        <button
          className={`switch-button ${active ? "active" : null}`}
          onClick={toogleShow}
          disabled={active}
        >
          New questions
        </button>
        <button
          className={`switch-button ${!active ? "active" : null}`}
          onClick={toogleShow}
          disabled={!active}
        >
          Answered questions
        </button>
      </div>
      {active ? (
        <div className="new-question">
          <div className="new-question-title">New Questions</div>
          <div className="done-body">
            {questions.filter(unanswered).map((question) => (
              <div key={question.id} className="done-back">
                <Card question={question} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="new-question">
          <div className="new-question-title">Done</div>
          <div className="done-body">
            {questions.filter(answered).map((question) => (
              <div key={question.id} className="done-back">
                <Card question={question} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Main);
