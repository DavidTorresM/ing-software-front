
import EntradaNuevoMensajeChatSala from '../components/EntradaNuevoMensajeChatSala';
import MensajesChatSala from '../components/MensajesChatSala';
import { FunctionComponent,useState, useEffect } from 'react';
import type { Mensaje } from '../interfaces/Mensajes';
import { obtenerMensajesSala } from '../../library/services/sala.service';

interface PublicacionesSalaProps {
  id: number;
};
const ChatSala: FunctionComponent<PublicacionesSalaProps> = ( {id} ) => {

  const [publicaciones2, setPublicaciones2] = useState<Mensaje[]>([]);
  useEffect(() => {
    const fetchData = async ()=>{
      console.log(id);
      const response = await obtenerMensajesSala(id);

      setPublicaciones2(response);
    }
    fetchData();
  }, []);
  return (
    <aside className='ChatSala'>
      <h2 className='ChatSala__titulo'>Chat</h2>
      <MensajesChatSala mensajes={ publicaciones2 }/>
      <EntradaNuevoMensajeChatSala />
    </aside>
  );
};

export default ChatSala;
