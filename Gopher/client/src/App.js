import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { FoxProvider } from "./providers/FoxProvider";
import ApplicationViews from "./components/ApplicationViews";

function App() {
  return (
    <Router>
      <FoxProvider>
        <ApplicationViews />
      </FoxProvider>
    </Router>
  );
}

export default App;
