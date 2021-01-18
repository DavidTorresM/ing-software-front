import { post } from './fetch';

export const publicar = async (dto: any): Promise< boolean | null > => {
  const response = await post('/publicacion/crear', dto);

  if (!response || !response.data) {
    return null;
  } 

  return response.data;
};
