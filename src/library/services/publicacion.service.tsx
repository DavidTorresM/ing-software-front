import { post, get } from './fetch';
import type { RespuestaLogin } from '../interfaces/Login';
import type {  Publicacion, Archivo } from '../interfaces/Publicacion';

export const getPublicaciones = async (sala:number): 
Promise< Publicacion[] > => {

  const response = await get(`/publicacion/buscar/sala/${sala}`,["a","b"]);

  if (!response || !response.data) {
    return [];
  } 

  return response.data;
};


export const getPublicaciones2 = async (sala:number): 
Promise< [] > => {

  const response = await get(`/publicacion/buscar/sala/${sala}`,["a","b"]);

  if (!response || !response.data) {
    return [];
  } 

  return response.data;
};

