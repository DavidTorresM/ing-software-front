 import { HashRouter, Route, Routes} from 'react-router-dom';

import Inicio from './inicio/view/Inicio';
import Login from './login/view/Login';
import Sala from './sala/view/Sala';

import 'antd/dist/antd.css';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={ <Login /> } path='/' />
        <Route element={ <Inicio /> } path='inicio' />
        <Route element={ <Sala /> } path='sala/:id' />
      </Routes>
    </HashRouter>
  );
}

export default App;
