
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormState from './context/FormState';
import ModeChoice from './components/ModeChoice/ModeChoice';


function App() {
  return (
    <div className="App">
      <FormState>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/*' element={<Home />}></Route>
            <Route path='/modechoice' element={<ModeChoice />}>

            </Route>
          </Routes>

        </Router>
      </FormState>


    </div>
  );
}

export default App;
