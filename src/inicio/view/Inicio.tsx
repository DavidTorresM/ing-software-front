import {
  Col,
  Row,
} from 'antd';

import BarraNavegacionInicio from '../components/BarraNavegacionInicio';
import ContenidoMaterias from '../components/ContenidoMaterias';

const Inicio = () => {
  return (
    <>
      <BarraNavegacionInicio />
      <ContenidoMaterias />
    </>
  );
};

export default Inicio;
