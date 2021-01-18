import { FunctionComponent } from 'react';
import {
  Button,
  Col,
  Row,
} from 'antd';
import { useState } from 'react';

import ModalPublicacion from './ModalPublicacion';
import '../assets/styles/style.css';

interface BarraNavegacionProps { 
 titulo: string;
};

const BarraNavegacion: FunctionComponent<BarraNavegacionProps> = ({ titulo }) => {
  const [visible, setVisible] = useState(true);  
  
  return (
    <Row className='BarraNavegacion' justify='center'>
      <Col xs={ 24 }>
        <Row align='middle' className='BarraNavegacion__opciones'>
          <Col span={ 8 }>
            <span>{ titulo }</span>
          </Col>

          <Col span={ 6 }>
            <Button type="primary" shape="round" size='large'>
              Ver horario
            </Button>
            <ModalPublicacion visible={ visible } setVisible={ setVisible } />
          </Col>

          <Col span={ 6 }>
            <Button type="primary" shape="round" size='large'>
              Cerrar sesion
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default BarraNavegacion;
