interface InformacionCurso {
  grupo: string;
  profesor: string;
  horaInicio: string;
  horaFin: string;
} 

interface MateriaInformacion {
    nombre: string; 
    informacionCurso: InformacionCurso;
}

export type { MateriaInformacion };

export type { InformacionCurso }; 