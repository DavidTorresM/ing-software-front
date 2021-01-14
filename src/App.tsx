import { HashRouter, Route, Routes} from 'react-router-dom';

import Inicio from './inicio/view/Inicio';
import Login from './login/view/Login';

import 'antd/dist/antd.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={ <Login /> } path='/' />
        <Route element={ <Inicio /> } path='inicio' />
      </Routes>
    </HashRouter>
  );
}

export default App;
