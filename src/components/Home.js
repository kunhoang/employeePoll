import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "../assest/home.css";
import Navbar from "./Navbar"; // Import Navbar component here
import Main from "./Main";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import New from "./New";
import React, { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import DetailWrapper from "./DetailWrapper ";
import Private from "./Private";
import NotFound from "./NotFound";
const Home = ({ dispatch, loggedIn }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <div>
      {loggedIn && <Navbar />}
      <div className="main-body" data-testid="home">
        <Routes>
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route
            path="/"
            element={
              <Private>
                {" "}
                <Main />
              </Private>
            }
          />
          <Route
            path="/leaderboard"
            exact
            element={
              <Private>
                <LeaderBoard />
              </Private>
            }
          />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/add"
            exact
            element={
              <Private>
                <New />
              </Private>
            }
          />
          <Route
            path="/questions/:id"
            element={
              <Private>
                <DetailWrapper />
              </Private>
            }
          />
          <Route path="*" element={<NotFound />} />

          {/* <Route element={<Main />} /> */}
          {/* <Route element={<Navbar />} /> */}
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Home);
