import { FunctionComponent } from 'react';
import { Card, Col } from 'antd';

import TituloTarjetaMateria from './TituloTarjetaMateria'

import type { MateriaInformacion } from '../interfaces/MateriaInformacion';

interface MateriaProps {
  materia: MateriaInformacion;
}

const TarjetaMateria: FunctionComponent<MateriaProps> = ({ materia }) => {
  const { informacionCurso } = materia;

  return (
    <Col>
      <Card title={ <TituloTarjetaMateria nombreMateria={ materia.nombre } idSala={ 1 }/> } type='inner'>
        <p>
          <span className="texto-negrita">Profesor: </span>{ informacionCurso.profesor }
        </p>

        <p>
          <span className="texto-negrita">Grupo: </span>{ informacionCurso.grupo }
        </p>
      
        <p>
          <span className="texto-negrita">Horario: </span>{ `${informacionCurso.horaInicio} - ${informacionCurso.horaFin}` }
        </p>
      </Card>
    </Col>
  );
};

export default TarjetaMateria;
