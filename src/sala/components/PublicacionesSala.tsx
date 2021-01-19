import { Collapse } from 'antd';
import { useEffect,useState } from 'react';
import { getPublicaciones } from '../../library/services/publicacion.service'
import { Archivo,Publicacion } from '../../library/interfaces/Publicacion'
import { SalaDTO } from '../../library/interfaces/Sala'

const { Panel } = Collapse;


const PublicacionesSala = (  ): JSX.Element => {
  const [publicaciones2, setPublicaciones2] = useState<Publicacion[]>([]);
  useEffect(() => {
    const fetchData = async ()=>{
        const response = await getPublicaciones(3);

        setPublicaciones2(response);
    }
    fetchData();
}, []);

  const publicaciones = publicaciones2.map((publicacion, index) => {
    return (
      <Collapse className='PublicacionesSala__publicacion' key={ index }>
        <Panel header={ publicacion.titulo } key={ index }>
          <p>{ publicacion.descripcion }</p>   
          <a href={ publicacion.archivoUrl }> { publicacion.archivo?.nombre } </a>
        </Panel>
      </Collapse>
    )
  });
  
  return (
    <section className='PublicacionesSala'>
      <h2 className='PublicacionesSala__titulo'>Publicaciones</h2>
      { publicaciones } 
    </section>
  );
};

export default PublicacionesSala;
