interface AutorMensaje {
  nombre: string;
  id: string;
}

interface Mensaje {
  autor: AutorMensaje;
  horaEnviado: string;
  texto: string;
};

export type { Mensaje };
