import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmpListing from "./Components/EmpListing";

function App() {
  return (
    <div className="App">
      <h1>CRUD-JSON Operations</h1>

      <Router>
        <Routes>
          <Route path='/' element={<EmpListing/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
