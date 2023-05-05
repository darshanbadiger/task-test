import "./App.css";
import Nav from "./Components/Nav";
import PersonalDetails from "./Components/PersonalDetails";
import DisplayDetails from "./Components/DisplayDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnterData from "./Components/EnterData";
import TableDisplay from "./Components/TableDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<EnterData />}></Route>
          <Route path="/data-table" element={<TableDisplay />}></Route>
          <Route path="/personal-details" element={<PersonalDetails />}></Route>
          <Route path="/display-details" element={<DisplayDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
