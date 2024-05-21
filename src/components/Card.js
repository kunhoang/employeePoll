import React from "react";
import { Link } from "react-router-dom";

const Card = ({ question }) => {
  return (
    <div className="done-item">
      <span className="user">{question.author}</span>
      <span className="time">
        {new Date(question.timestamp).toDateString()}
      </span>
      <Link className="show" to={"/questions/" + question.id}>
        Show
      </Link>
    </div>
  );
};

export default Card;
