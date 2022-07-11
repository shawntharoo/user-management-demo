import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRouteComponent from './Components/Common/Protectedroutes';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/home" element={ <ProtectedRouteComponent isAuthenticated={props.authReducer}><Home /></ProtectedRouteComponent>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authReducer: state.authReducer,
  };
};

export default connect(
  mapStateToProps
)(App)
