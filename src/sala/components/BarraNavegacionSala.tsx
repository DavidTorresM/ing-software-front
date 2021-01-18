import { FunctionComponent } from 'react';
import BarraNavegacion from '../../library/components/BarraNavegacion';

interface BarraNavegacionSalaProps {
  materia: string;
};

const BarraNavegacionSala: FunctionComponent<BarraNavegacionSalaProps> = ({ materia }) => {
  return (
    <BarraNavegacion titulo={ `Sala de ${materia}` } />
  );
};

export default BarraNavegacionSala;
