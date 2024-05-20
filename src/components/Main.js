import "../assest/main.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
const Main = ({ authedUser, questions, users }) => {
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  return (
    <div className="main" >
      <div className="new-question">
        <div className="new-question-title">New Questions</div>
        <div className="new-question-body">
          {questions.filter(unanswered).map((question) => (
            <div className="new-question-item" key={question.id}>
              <span className="user">{question.author}</span>
              <span className="time">{new Date(question.timestamp).toDateString()}</span>
              <Link className="show" to={'/questions/' + question.id}>Show</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="done">
        <div className="done-title">Done</div>
        <div className="done-body">
        {questions.filter(answered).map((question) => (
            <div className="done-item" key={question.id}>
              <span className="user">{question.author}</span>
              <span className="time">{new Date(question.timestamp).toDateString()}</span>
              <Link className="show" to={'/questions/' + question.id}>Show</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Main);
