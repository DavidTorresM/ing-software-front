import { FunctionComponent,useState,useEffect, ChangeEvent, useRef} from 'react';
import { Button, Col, Input, Row, Tooltip } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import type { Mensaje } from '../interfaces/Mensajes';
import { publicar,enviarMensajeSala } from '../../library/services/sala.service';
import { getIdStorage  } from '../../library/services/fetch';

interface MensajesChatSalaProps {
  mensajes?: Mensaje[];
  id:number;
};
const EntradaNuevoMensajeChatSala: FunctionComponent<MensajesChatSalaProps> = ({id}) => {
  const [msn, setmsn] = useState<any>("")
  const txtRef = useRef<any>();

  const onChange = () => {
    if (txtRef.current) {
      setmsn(txtRef.current.value);
    }
  };

  const onSend = () => {
    if (txtRef.current) {
      console.log("Mensaje enviar:",msn);
      enviarMensajeSala({
        "fechaEnviado":Date(),
        "texto":msn,
        "idSala":id,
        "idAutor":getIdStorage()
      });
      setmsn("");
    }
  };
  return (
    <Row align='middle' justify='center'>
      <Col span={ 22 }>
        <input type="text" ref={txtRef} value={msn} 
        onChange={onChange} 
        style={{resize: 'none'}}/>
      </Col>
      
      <Col span={ 1 }>
        <Tooltip title='Enviar mensaje'>
          <Button type='primary' shape='circle' icon={<SendOutlined />} onClick={onSend} />
        </Tooltip>
      </Col>
    </Row>
  );
};

export default EntradaNuevoMensajeChatSala;
