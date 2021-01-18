import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'antd';

interface TituloTarjetaMateriaProps {
  nombreMateria: string;
  idSala: number;
}; 

interface BotonAbrirCursoProps {
  idSala: number;
};

const BotonAbrirCurso: FunctionComponent<BotonAbrirCursoProps> = ({ idSala }) => {
  const navegacion = useNavigate();

  const abrirCurso = () => {
    navegacion(`/curso/${idSala}`);
  };
  
  return (
    <Button className='TitloTarjetaMateria__botonAbrirCurso' type="primary" onClick={ abrirCurso }shape="round" size='large'>
      Abrir curso
    </Button>
  );
}

const TituloTarjetaMateria: FunctionComponent<TituloTarjetaMateriaProps> = ({ nombreMateria, idSala }) => {
  return (
    <Row align='middle' className='TituloTarjetaMateria' gutter={ [16, 16] } justify='space-around'>
      <Col xs={ 24 } sm={ 10 }>
        <h4 className='TituloTarjetaMateria__nombre'>{ nombreMateria }</h4>
      </Col>
      
      <Col xs={ 24 } sm={ 14 }>
        <BotonAbrirCurso idSala={ idSala }/>
      </Col>
    </Row>
  );
};

export default TituloTarjetaMateria;