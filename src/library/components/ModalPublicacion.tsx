import { Button, Form, Input, Modal, Upload, message } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InboxOutlined } from '@ant-design/icons';

import { publicar } from '../services/sala.service';

interface ModalPublicacionProps {
  visible: boolean;
  setVisible: Function;
};

const { Dragger } = Upload;

const ModalPublicacion: FunctionComponent<ModalPublicacionProps> = ({ visible, setVisible }) => {
  const { id } = useParams();
  const [archivo, setArchivo] = useState({});
  const [botonHabilitado, setBotonHabilitado] = useState(true);

  const crearPublicacion = async (valores: any) => {
    if (botonHabilitado) {
      const dto = {
        idSala: id,
        titulo: valores.titulo,
        descripcion: valores.descripcion,
        fechaPublicacion: new Date(),
        archivo,
      };

      const response = await publicar(dto);
    }
  };

  const props = {
    name: 'archivo',
    multiple: false,
    maxCount: 1,
    action: 'http://localhost:3000/api/archivo/subir',
    onChange(info: any) {
      const { status } = info.file;
      
      if (status === 'done') {
        message.success(`${info.file.name} subido de forma exitosa.`);
        
        setArchivo({
          nombre: info.file.name,
          tamanio: info.file.size,
          tipo: info.file.type,
          url: info.file.response,
        });

        setBotonHabilitado(true);
      } else if (status === 'error') {
        message.error(`${info.file.name} hubo un error, intente de nuevo.`);
        setBotonHabilitado(true);
      }

    },
    beforeUpload(archivo: any) {
      setBotonHabilitado(false);
      return true;
    },
    onRemove() {
      setArchivo({});
    }
  };

  return (
    <Modal
      visible={ visible }
      title="Crear publicacion"
      onCancel={ () => setVisible( false ) } 
      maskClosable={ false }
      footer={null}
    >
      <Form onFinish={ crearPublicacion }>
        <Form.Item label='Titulo' name='titulo' rules={[{ required: true, message: 'Se necesita un titulo para la publicacion.'}]}>
          <Input/>
        </Form.Item>

        <Form.Item label='Descripcion' name='descripcion' rules={[{ required: true, message: 'Se necesita una descripcion para la publicacion.'}]}>
          <Input.TextArea style={{ resize: 'none' }} rows={ 5 }/>
        </Form.Item>

        <Form.Item>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Haz click o arrastra algun archivo</p>
            <p className="ant-upload-hint">
              Archivo para la publicacion
            </p>
          </Dragger>
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type='primary' htmlType='submit' disabled={ !botonHabilitado }>
            Publicar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalPublicacion;
