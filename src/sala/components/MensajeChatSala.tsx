import { FunctionComponent } from 'react';

import { Col, Row } from 'antd';

interface MensajeChatSalaProps {
  texto: string;
  fechaEnviado: string;
  nombre:string;
  primerApellido:string;
  segundoApellido:string;
};

const MensajeChatSala: FunctionComponent<MensajeChatSalaProps> = ( props ) => {
  let date: Date = new Date(props.fechaEnviado);  
  return (
    <Row>
      <Col span={ 12 }>
        <p>De: {props.nombre} {props.primerApellido} {props.segundoApellido}</p>
        
        <div className="MensajeChatSala">
          <p>
            { props.texto }
          </p>

          <span className="MensajeChatSala__tiempo">{date.toDateString()}</span>
        </div> 
      </Col>
    </Row>
  );
};

export default MensajeChatSala;
