import { useParams } from 'react-router-dom';
import { Col, Row } from 'antd';

import BarraNavegacionSala from '../components/BarraNavegacionSala'; 
import ChatSala from '../components/ChatSala';
import InformacionSala from '../components/InformacionSala';
import PublicacionesSala from '../components/PublicacionesSala';

const Sala = () => {
  const { id } = useParams();

  return (
    <>
      <Row justify="center">
        <Col span={ 24 }> 
          <BarraNavegacionSala materia='Computacion' />
        </Col>
      </Row>
      
      <Row justify='center'>
        <Col sm={ 5 }>
          <InformacionSala />
        </Col>

        <Col sm={ 9 } style={ { overflowY: 'auto', maxHeight: 'calc(100vh - 70px)' } }>
          <PublicacionesSala id={Number(id)} />  
        </Col>

        <Col sm={ 10 }>
          <ChatSala id={Number(id)} /> 
        </Col>
      </Row>
    </>
  );
}

export default Sala;
