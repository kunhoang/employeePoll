import "../assest/leaderboard.css";
import { connect } from "react-redux";
const LeaderBoard = ({ users, authedUser }) => {
  return (
    <div className="leaderBoard">
      <table>
        <tr>
          <th className="user">User</th>
          <th className="answer">Answers</th>
          <th className="created">Created</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="first">
              <div className="left">
                <img src={user.avatarURL} className="img"/>
              </div>
              <div className="right">
                <span className="name">{user.name}</span>
                <span className="">{user.id}</span>
              </div>
            </td>
            <td>{Object.keys(user.answers).length}</td>
            <td>{user.questions.length}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  ),
});

export default connect(mapStateToProps)(LeaderBoard);
