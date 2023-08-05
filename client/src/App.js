import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './StyleSheets/App.css';
import Home from './Views/Home/Home';
import Detail from './Views/Detail/Detail'

function App() {
  return (
    <div className={`${App} App`}>
      
           <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
