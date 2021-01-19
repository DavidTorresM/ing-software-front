import { post, get } from './fetch';
import type { MateriaInformacion } from '../../inicio/interfaces/MateriaInformacion'

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
