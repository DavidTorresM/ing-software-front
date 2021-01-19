interface AutorMensaje {
  id: string;
  email: string;
  nombre: string;
  primerApellido: string;
  segudoApellido: string;
}

interface Mensaje {
  autor: AutorMensaje;
  fechaEnviado: string;
  texto: string;
};

export type { Mensaje };
