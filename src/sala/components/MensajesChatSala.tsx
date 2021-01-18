import { FunctionComponent } from 'react';

import MensajeChatSala from './MensajeChatSala';
import MensajeChatSalaPropio from './MensajeChatSalaPropio';

import type { Mensaje } from '../interfaces/Mensajes';

interface MensajesChatSalaProps {
  mensajes: Mensaje[];
};

const MensajesChatSala: FunctionComponent<MensajesChatSalaProps> = ({ mensajes }) => {
  const conversacion = mensajes.map((mensaje, index) => {
    if (Math.ceil(Math.random() * 100.0) % 2 === 0) { 
      return (
        <MensajeChatSalaPropio key={ index } texto={ mensaje.texto } />
      );
    }

    return (
      <MensajeChatSala key={ index } texto={ mensaje.texto } />
    );
  });

  return (
    <div className="MensajesChatSala">
      { conversacion }
    </div>
  );
};

export default MensajesChatSala;
