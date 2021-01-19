import {
  Col,
  Row
}
from 'antd';
import { get } from 'local-storage';
import { useEffect, useState } from 'react';

import TarjetaMateria from './TarjetaMateria';
import { obtenerSalas } from '../../library/services/sala.service';
import type { MateriaInformacion } from '../interfaces/MateriaInformacion';


const ContenidoMaterias = () => {
  const [materiasInformacion, setMateriasInformacion] = useState<MateriaInformacion[]>([]);
  
  const [idUsuario, setIdUsuario] = useState();

  useEffect(() => {
    const { id } = get('sesion');
    setIdUsuario(id);

    const obtenerMaterias = async () => {
      const salas: MateriaInformacion[]  = await obtenerSalas(id);
      
      if (salas)
        setMateriasInformacion(salas)
    };

    obtenerMaterias();
  }, []);

  const materias = <Row align='middle' gutter={ [15, 15] } justify='center'>
    {materiasInformacion.map((materia, index) => {
      return (
        <Col key={ index }>
          <TarjetaMateria materia={ materia } />
        </Col>
      );
    })}
  </Row>
  
  
  return (
    <Row className='ContenidoMaterias' justify='center'>
      <Col span={ 22 }>
        { materias }
      </Col>
    </Row>
  );
};

export default ContenidoMaterias;
