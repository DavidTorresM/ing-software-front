import EntradaNuevoMensajeChatSala from '../components/EntradaNuevoMensajeChatSala';
import MensajesChatSala from '../components/MensajesChatSala';
import { FunctionComponent,useState, useEffect } from 'react';
import type { Mensaje } from '../interfaces/Mensajes';
import { obtenerMensajesSala } from '../../library/services/sala.service';
import { io , Socket} from'socket.io-client';
import { SalaDTO } from '../../library/interfaces/Sala';

interface PublicacionesSalaProps {
  id: number;
};
const uri:string = "ws://localhost:8080";
const ChatSala: FunctionComponent<PublicacionesSalaProps> = ( {id} ) => {



  return (
    <aside className='ChatSala'>
      <h2 className='ChatSala__titulo'>Chat</h2>
      <MensajesChatSala id={id}/>
      <EntradaNuevoMensajeChatSala id={id}/>
    </aside>
  );
  
};

export default ChatSala;
