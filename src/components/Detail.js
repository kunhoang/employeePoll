import "../assest/detail.css";
import image from "../image/image.jpg";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import React from "react";

const Detail = ({ dispatch, question, authedUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(authedUser);
  console.log(question);
  if (!question) {
    return <Navigate to="/*" />;
  }

  const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;
  console.log(hasVotedForOptionOne);
  console.log(question.optionTwo.votes.includes("sarahedo"));

  const calcPercentage = (option, question) => {
    const numberVotesTotal =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
      case "optionOne":
        return (
          (question.optionOne.votes.length / numberVotesTotal) * 100 + " %"
        );
      case "optionTwo":
        return (
          (question.optionTwo.votes.length / numberVotesTotal) * 100 + " %"
        );
      default:
        return "";
    }
  };
  
  const answerOne = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
    navigate("/");
  };

  const answerTwo = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
    navigate("/");
  };

  return (
    <div className="main">
      <div className="title">Poll by {question.author}</div>
      <div className="logo">
        <img src={image} className="img" alt="Poll" />
      </div>
      <div className="form">
        <div className="form-title">Would you rather</div>
        <div className="anwser">
          <div className="one">
            <span className="content-anwser">{question.optionOne.text}</span>
            {!hasVoted ? (
              <button className="click" onClick={answerOne}>
                Click
              </button>
            ) : (
              <span>
                Votes: {question.optionOne.votes.length} (
                {calcPercentage("optionOne", question)})
              </span>
            )}
          </div>
          <div className="one">
            <span className="content-anwser">{question.optionTwo.text}</span>
            {!hasVoted ? (
              <button className="click" onClick={answerTwo}>
                Click
              </button>
            ) : (
              <span>
                Votes: {question.optionTwo.votes.length} (
                {calcPercentage("optionTwo", question)})
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  const author = question ? users[question.author] : null;
  return {
    authedUser,
    question,
    author
  };
};

export default connect(mapStateToProps)(Detail);
