import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/home" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
        {/* <Login></Login> */}
      </header>
    </div>
  );
}

export default App;
