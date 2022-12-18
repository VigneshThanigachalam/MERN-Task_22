import logo from "./logo.svg";
import "./App.css";
import { Littlecard } from "./components/Littlecard";
import { Earningreview } from "./components/Earningreview";
import { PieChart } from "./components/PieChart";
import { Projects } from "./components/Projects";
function App() {

  return (
<>    <div className="container">
      <Littlecard />
      <div className="row">
        <Earningreview />
        <PieChart/>
      </div>
      <Projects />
    </div>
    </>
  );
}

export default App;
