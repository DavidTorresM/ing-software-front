import {
  Col,
  Row,
} from 'antd';

import FormularioLogin from '../components/FormularioLogin';
import ImagenLogin from '../components/ImagenLogin';

import '../assets/styles/style.css';

const Login = () => {
  return (
    <Row className='ContenidoPrincipal' justify='center'>
      <Col span={24} sm={12}>
        <ImagenLogin />
        <FormularioLogin />
      </Col>
    </Row>
  );
};

export default Login;
