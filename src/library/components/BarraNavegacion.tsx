import { FunctionComponent } from 'react';
import {
  Button,
  Col,
  Row,
} from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clear, get } from 'local-storage';

import ModalPublicacion from './ModalPublicacion';
import '../assets/styles/style.css';

interface BarraNavegacionProps { 
 titulo: string;
 sala?: boolean;
};

const BarraNavegacion: FunctionComponent<BarraNavegacionProps> = ({ titulo, sala }) => {

  const [visible, setVisible] = useState(true);  
  const navegacion = useNavigate();
  const [rol, setRol] = useState('');

  useEffect(() => {
    const { privilegio } = get('sesion');

    setRol(privilegio);
  }, []);

  const cerrarSesion = () => {
    clear();
    navegacion('/');
  };

  return (
    <Row className='BarraNavegacion' justify='center'>
      <Col xs={ 24 }>
        <Row align='middle' className='BarraNavegacion__opciones'>
          <Col span={ 6 }>
            <span>{ titulo }</span>
          </Col>

          <Col span={ 6 }>
            <Button type="primary" shape="round" size='large' onClick={ () => navegacion('/inicio') }>
              Ver horario
            </Button>
          </Col>
          
          {rol !== 'ALUMNO' && sala &&
          (<Col span={ 6 }>
            <Button type="primary" shape="round" size='large' onClick={ () => setVisible(true) }>
              Crear Publicacion
            </Button>
            <ModalPublicacion visible={ visible } setVisible={ setVisible } />
          </Col>)}

          <Col span={ 6 }>
            <Button type="primary" shape="round" size='large'onClick={ cerrarSesion } >
              Cerrar sesion
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default BarraNavegacion;
