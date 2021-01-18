import EntradaNuevoMensajeChatSala from '../components/EntradaNuevoMensajeChatSala';
import MensajesChatSala from '../components/MensajesChatSala';

import type { Mensaje } from '../interfaces/Mensajes';


const mensajes: Mensaje[] = [ 
  {
    autor: {
      nombre: 'Isaac',
      id: '1',
    },
    horaEnviado: '10:00 p.m.',
    texto: 'loremipsum dolor sit amet, consecteturjadlskfjkalsfklasjflkdjfklajlkfjdslkfjdlsjfldkasjfkljasklfdjakldfjalkfjakljdfklaj',
 },
  {
    autor: {
      nombre: 'Isaac',
      id: '1',
    },
    horaEnviado: '10:00 p.m.',
    texto: 'loremipsum dolor sit amet, consecteturjadlskfjkalsfklasjflkdjfklajlkfjdslkfjdlsjfldkasjfkljasklfdjakldfjalkfjakljdfklaj',
 },
  {
    autor: {
      nombre: 'Isaac',
      id: '1',
    },
    horaEnviado: '10:00 p.m.',
    texto: 'loremipsum dolor sit amet, consecteturjadlskfjkalsfklasjflkdjfklajlkfjdslkfjdlsjfldkasjfkljasklfdjakldfjalkfjakljdfklaj',
 },
  {
    autor: {
      nombre: 'Isaac',
      id: '1',
    },
    horaEnviado: '10:00 p.m.',
    texto: 'loremipsum dolor sit amet, consecteturjadlskfjkalsfklasjflkdjfklajlkfjdslkfjdlsjfldkasjfkljasklfdjakldfjalkfjakljdfklaj',
 },  
];

const ChatSala = () => {
  return (
    <aside className='ChatSala'>
      <h2 className='ChatSala__titulo'>Chat</h2>
      <MensajesChatSala mensajes={ mensajes }/>
      <EntradaNuevoMensajeChatSala />
    </aside>
  );
};

export default ChatSala;
