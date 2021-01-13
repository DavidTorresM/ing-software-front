import { FunctionComponent } from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Login from './login/view/Login';

import 'antd/dist/antd.css';
import './App.css';

const LoginVista: FunctionComponent<RouteComponentProps> = () => <Login />;

const App = () => {
  return (
    <Router>
      <LoginVista path='/' />
    </Router>
  );
}

export default App;
