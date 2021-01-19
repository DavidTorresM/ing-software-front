interface InformacionMateria {
  nombre: string;
};

interface UsuarioInformacion {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
}

interface DocenteInformacion {
  usuario: UsuarioInformacion;
}

interface InformacionCurso {
  id: string;
  docente: DocenteInformacion;
  horaInicio: string;
  horaFin: string;
  materia: InformacionMateria;
} 

interface MateriaInformacion {
  id: number;
  curso: InformacionCurso;
}

export type { MateriaInformacion };

export type { InformacionCurso }; 