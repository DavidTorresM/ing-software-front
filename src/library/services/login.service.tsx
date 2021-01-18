import { post } from './fetch';
import type { RespuestaLogin } from '../interfaces/Login';

export const login = async (email: string, contrasenia: string): Promise< RespuestaLogin | null > => {
  const dto = {
    email,
    contrasenia,
  };

  const response = await post('/auth/login', dto);

  if (!response || !response.data) {
    return null;
  } 

  return response.data;
};
