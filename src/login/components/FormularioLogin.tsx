import {
  Button,
  Form,
  Input,
  Tooltip
} from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const FormularioLogin = () => {
  const iniciarSesion = (values: any) => {
    console.log(values); 
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
