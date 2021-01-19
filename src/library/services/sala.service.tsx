import { post, get } from './fetch';
import type { MateriaInformacion } from '../../inicio/interfaces/MateriaInformacion';
import type { SalaDTO } from '../interfaces/Sala';
import { Mensaje } from '../../sala/interfaces/Mensajes';

export const publicar = async (dto: any): Promise< boolean | null > => {
  const response = await post('/publicacion/crear', dto);

  if (!response || !response.data) {
    return null;
  } 

  return response.data;
};

export const obtenerSalas = async (id: string): Promise<MateriaInformacion[]> => {
  const response = await get(`usuario/buscar/salas/${id}`, {});
  
  return response.data;
};


export const obtenerMensajesSala = async (idSala: number): Promise<Mensaje[]> => {
  
  const response = await get(`/mensaje/listar/${idSala}`, {});
  console.log(response.data);
  return response.data;
};




