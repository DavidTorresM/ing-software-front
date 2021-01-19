import { FunctionComponent } from 'react';

import MensajeChatSala from './MensajeChatSala';
import MensajeChatSalaPropio from './MensajeChatSalaPropio';

import type { Mensaje } from '../interfaces/Mensajes';

import React, { useState, useCallback, useMemo, useRef,useEffect } from 'react';
import { obtenerMensajesSala } from '../../library/services/sala.service';
import { getIdStorage } from '../../library/services/fetch';
import io from'socket.io-client';

interface MensajesChatSalaProps {
  mensajes?: Mensaje[];
  id:number;
};


const socketUrl = 'ws://localhost:8080/';

const MensajesChatSala: FunctionComponent<MensajesChatSalaProps> = ({id}) => {

  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  useEffect(() => {
    const fetchData = async ()=>{
      let response = await obtenerMensajesSala(id);
      response = response.sort((a:any,b:any)=> a.id-b.id );
      setMensajes(response);
    }
    setInterval(() => {
      fetchData();
    }, 3000);
  }, []);


  const conversacion = mensajes.map((mensaje, index) => {
    if (getIdStorage() === mensaje.autor.id) { 
      return (
        <MensajeChatSalaPropio key={ index } texto={ mensaje.texto } />
      );
    }
    return (
      <MensajeChatSala key={ index } texto={ mensaje.texto } 
      fechaEnviado={mensaje.fechaEnviado} 
        nombre={mensaje.autor.nombre} 
        primerApellido={mensaje.autor.primerApellido} segundoApellido={mensaje.autor.segudoApellido}
       />
    );
  });
  
  return (
    <div className="MensajesChatSala">
      {  conversacion }
    </div>
  );
  
};

export default MensajesChatSala;
