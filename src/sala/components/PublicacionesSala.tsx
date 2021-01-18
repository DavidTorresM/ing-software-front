import { Collapse } from 'antd';

const { Panel } = Collapse;

const informacionPublicaciones = [
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
  {
    titulo: 'Publicacion de libro',
    descripcion: 'Este libro les servira para estudiar',
    urlArchivo: 'archivo',
  },
]

const PublicacionesSala = () => {
  const publicaciones = informacionPublicaciones.map((publicacion, index) => {
    return (
      <Collapse className='PublicacionesSala__publicacion' key={ index }>
        <Panel header={ publicacion.titulo } key={ index }>
          <p>{ publicacion.descripcion }</p>   
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
