import { Route, Routes} from "react-router-dom"
import axios from "axios";
import Home from "./views/home/home";
import './StyleSheets/App.css';

axios.defaults.baseURL= "http://localhost:3001/gaming"

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
