

interface Archivo {
    url: string;
    nombre: string;
    tipo: string;
    tamanio: number;
}

interface Publicacion{
	titulo: string;
	descripcion: string;
	fechaPublicacion: Date;
	idSala: number;
	archivoUrl?: string;
	archivo?: Archivo;
}

export type { Publicacion, Archivo };
  