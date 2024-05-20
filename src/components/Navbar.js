import {  Link  } from 'react-router-dom';
import '../assest/navbar.css'
import {connect} from "react-redux";
import {handleLogout} from "../actions/authedUser";
const Navbar = ({dispatch, authedUserId}) => {
    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    };

    return(
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">Home</Link>
                <Link to="/leaderboard">LeaderBoard</Link>
                <Link to="/new">New</Link>
            </div>
            <div className='space'></div>
            <div className="navbar-rigth">
                <Link to="#">{authedUserId}</Link>
                <Link to="/login" onClick={logout}>Logout</Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
});


export default connect(mapStateToProps)(Navbar);