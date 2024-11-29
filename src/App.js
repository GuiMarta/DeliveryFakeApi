import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import Restaurants from './Components/restaurantes';
import RestauranteById from './Components/restaurantesByID';
import Comidas from './Components/comidas';
import ComidasById from './Components/comidaById';
import Login from './Components/login';


function App() {
  return (
    <Router>
      <div>
        <Routes>


          <Route path="/login" element={<Login />} />

          
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurantes" element={<Restaurants />} />
          <Route path="/restaurante/a" element={<RestauranteById />} />
          <Route path="/comidas" element={<Comidas />} />
          <Route path="/comida/a" element={<ComidasById />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;