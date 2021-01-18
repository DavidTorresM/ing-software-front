import {
  Col,
  Row
}
from 'antd';

import type { MateriaInformacion } from '../interfaces/MateriaInformacion';

import TarjetaMateria from './TarjetaMateria';

const materiasInformacion: MateriaInformacion[] = [
  {
    nombre: 'Materia 1',
    informacionCurso: {
      grupo: '3cv2',
      profesor: 'Isaac Sanchez',
      horaInicio: '12:00',
      horaFin: '1:30',
    },
  },
  {
    nombre: 'Materia 1',
    informacionCurso: {
      grupo: '3cv2',
      profesor: 'Isaac Sanchez',
      horaInicio: '12:00',
      horaFin: '1:30',
    },
  },
  {
    nombre: 'Materia 1',
    informacionCurso: {
      grupo: '3cv2',
      profesor: 'Isaac Sanchez',
      horaInicio: '12:00',
      horaFin: '1:30',
    },
  },
  {
    nombre: 'Materia 1',
    informacionCurso: {
      grupo: '3cv2',
      profesor: 'Isaac Sanchez',
      horaInicio: '12:00',
      horaFin: '1:30',
    },
  },
  {
    nombre: 'Materia 1',
    informacionCurso: {
      grupo: '3cv2',
      profesor: 'Isaac Sanchez',
      horaInicio: '12:00',
      horaFin: '1:30',
    },
  },
  {
    nombre: 'Materia 1',
    informacionCurso: {
      grupo: '3cv2',
      profesor: 'Isaac Sanchez',
      horaInicio: '12:00',
      horaFin: '1:30',
    },
  },
  {
    nombre: 'Materia 1',
    informacionCurso: {
      grupo: '3cv2',
      profesor: 'Isaac Sanchez',
      horaInicio: '12:00',
      horaFin: '1:30',
    },
  },
];

const ContenidoMaterias = () => {
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
