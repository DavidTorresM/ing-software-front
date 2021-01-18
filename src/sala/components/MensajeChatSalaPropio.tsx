import { FunctionComponent } from 'react';

import { Col, Row } from 'antd';

interface MensajeChatSalaPropioProps {
  texto: string;
};

const MensajeChatSalaPropio: FunctionComponent<MensajeChatSalaPropioProps> = ({ texto }) => {
  return (
    <Row style={{ marginTop: '1rem' }}>
      <Col offset={ 12 } span={ 12 }>
        <div className="MensajeChatSalaPropio">
          <p>
            { texto }
          </p>

          <span className="MensajeChatSalaPropio__tiempo">10:00 p.m 10/12/2010</span>
        </div> 
      </Col>
    </Row>
  );
};

export default MensajeChatSalaPropio;
