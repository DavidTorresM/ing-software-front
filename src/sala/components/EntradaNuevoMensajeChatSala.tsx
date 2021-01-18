import { Button, Col, Input, Row, Tooltip } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const EntradaNuevoMensajeChatSala = () => {
  return (
    <Row align='middle' justify='center'>
      <Col span={ 22 }>
        <Input.TextArea style={{resize: 'none'}}/>
      </Col>
      
      <Col span={ 1 }>
        <Tooltip title='Enviar mensaje'>
          <Button type='primary' shape='circle' icon={<SendOutlined />} />
        </Tooltip>
      </Col>
    </Row>
  );
};

export default EntradaNuevoMensajeChatSala;
