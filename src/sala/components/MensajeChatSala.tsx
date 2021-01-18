import { FunctionComponent } from 'react';

import { Col, Row } from 'antd';

interface MensajeChatSalaProps {
  texto: string;
};

const MensajeChatSala: FunctionComponent<MensajeChatSalaProps> = ({ texto }) => {
  return (
    <Row>
      <Col span={ 12 }>
        <p>De: Fulanito</p>
        
        <div className="MensajeChatSala">
          <p>
            { texto }
          </p>

          <span className="MensajeChatSala__tiempo">10:00 p.m 10/12/2010</span>
        </div> 
      </Col>
    </Row>
  );
};

export default MensajeChatSala;
