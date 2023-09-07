import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmpListing from "./Components/EmpListing";
import EmpDetail from "./Components/EmpDetail";
import EmpEdit from "./Components/EmpEdit";
import EmpCreate from "./Components/EmpCreate";

function App() {
  return (
    <div className="App">
      <h1>CRUD-JSON Operations</h1>

      <Router>
        <Routes>
          <Route path='/' element={<EmpListing/>} />
          <Route path='/employee/create' element={<EmpCreate/>} />
          <Route path='/employee/detail/:empid' element={<EmpDetail/>} />
          <Route path='/employee/edit/:id' element={<EmpEdit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
