
import './App.scss';
import { Route,Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Prediction from './components/Windowpredic';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='Prediction' element={<Prediction />}></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
