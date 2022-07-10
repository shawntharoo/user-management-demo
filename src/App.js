import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import ResponsiveAppBar from './Components/AppBar/Appbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRouteComponent from './Components/Common/Protectedroutes';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/home" element={ <ProtectedRouteComponent isAuthenticated={props.authentication}><Home /></ProtectedRouteComponent>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication,
  };
};

export default connect(
  mapStateToProps
)(App)
