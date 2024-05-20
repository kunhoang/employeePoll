import "../assest/new.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import {_getQuestions} from '../util/_DATA.js'
const New = ({ dispatch }) => {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  const handleSecondOptionChange = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/")
};
  return (
    <div className="new">
      <div className="new-title">Would You Rather</div>
      <div className="description">
        <p>Create your own poll</p>
      </div>
      <div className="first-option">
        <span className="first-option-text">First Option</span>
        <input
          type="text"
          className="text-first-option"
          value={firstOption}
          onChange={handleFirstOptionChange}
        />
      </div>
      <div className="second-option">
        <span className="second-option-text">Second Option</span>
        <input
          type="text"
          className="text-second-option"
          value={secondOption}
          onChange={handleSecondOptionChange}
        />
      </div>
      <button className="btn-submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default connect()(New);
