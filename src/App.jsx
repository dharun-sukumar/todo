import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home.jsx"
// import Test from "./components/Test.jsx";
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        {/* <Route exact path="/test" Component={Test} /> */}
      </Routes>
    </Router>
  );
}

export default App;
