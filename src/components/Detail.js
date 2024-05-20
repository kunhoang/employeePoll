import "../assest/detail.css";
import image from "../image/image.jpg";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { useNavigate, useParams } from "react-router-dom";
import React from 'react';

const Detail = ({ dispatch, question }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!question) {
    return <div>Question not found</div>;
  }

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
            <button className="click" onClick={answerOne}>
              Click
            </button>
          </div>
          <div className="one">
            <span className="content-anwser">{question.optionTwo.text}</span>
            <button className="click" onClick={answerTwo}>
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const question = state.questions[id];
  return { question };
};

export default connect(mapStateToProps)(Detail);