import {
  Button,
  Form,
  Input,
  Tooltip
} from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

import { message } from 'antd';
import ls from 'local-storage';
import { useNavigate } from 'react-router-dom';

import { login } from '../../library/services/login.service';

const FormularioLogin = () => {
  const navegar = useNavigate();

  const iniciarSesion = async (valores: any) => {
    const sesion = await login(valores.correo, valores.contrasenia);
   
    if (sesion) {
      ls('sesion', sesion);
      navegar('inicio');
      return;
    }

    message.error('Inserta datos correctos para iniciar sesion');
    
    return;
  };

  return (
    <Form
      onFinish={ iniciarSesion } 
    >
      <Form.Item
        name="correo"
        rules={ [
          {
            type: 'email',
            message: 'Inserta un correo valido.',
          },
          {
            required: true,
            message: 'Por favor ingresa tu correo institucional.',
          },
        ] }
       >
        <Input
          placeholder="Ingresa tu correo"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Correo institucional">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
      </Form.Item> 

      <Form.Item
        name="contrasenia"
      >
        <Input.Password className="FormularioLogin__password" placeholder="Contraseña" />
      </Form.Item>

      <Form.Item className="FormularioLogin__boton">
        <Button type="primary" htmlType="submit">
          Iniciar Sesión
        </Button>
      </Form.Item> 
    </Form>
  );
};

export default FormularioLogin;
