import { FunctionComponent } from 'react';
import { Card, Col } from 'antd';

import TituloTarjetaMateria from './TituloTarjetaMateria'

import type { MateriaInformacion } from '../interfaces/MateriaInformacion';

interface MateriaProps {
  materia: MateriaInformacion;
}

const TarjetaMateria: FunctionComponent<MateriaProps> = ({ materia }) => {
  const { curso } = materia;

  console.log(curso);

  return (
    <Col>
      <Card title={ <TituloTarjetaMateria nombreMateria={ curso.materia.nombre } idSala={ materia.id }/> } type='inner'>
        <p>
          <span className="texto-negrita">Profesor: </span>{ `${curso.docente.usuario.nombre} ${curso.docente.usuario.primerApellido} ${curso.docente.usuario.segundoApellido}` }
        </p>

        <p>
          <span className="texto-negrita">Grupo: </span>{ curso.id }
        </p>
      
        <p>
          <span className="texto-negrita">Horario: </span>{ `${(new Date(curso.horaInicio)).toLocaleTimeString('en-US')} - ${(new Date(curso.horaFin)).toLocaleTimeString('en-US')}` }
        </p>
      </Card>
    </Col>
  );
};

export default TarjetaMateria;
