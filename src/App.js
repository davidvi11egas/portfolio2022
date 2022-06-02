import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// component imports
import Navbar from './components/Navbar';

// page imports
import Home from './pages/Home';
import Experience from './pages/Experience';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/experience" element={<Experience/>} />

      </Routes>
    </BrowserRouter>
  );
}



export default App;