import axios from './axios';
import ls from 'local-storage';
import {RespuestaLogin} from '../interfaces/Login';

export const post = (endopoint: string, dto: object): Promise< any | null> => {
  console.log("post serrion storage");
  return axios.post(endopoint, dto,getConfigToken());
};

export const get = (endopoint: string, parameters: any): Promise<any | null> => {
  const params = Object.entries(parameters).map((param: any) => `${param[0]}=${param[1]}`);
  return axios.get(`${endopoint}?${params.join('&')}`,getConfigToken());
};

export const getConfigToken = () => {
  let sessionStr,config;
  if((sessionStr = localStorage.getItem("sesion"))){
    let rsL:RespuestaLogin = JSON.parse(sessionStr);
    console.log("TOKENNNNNNNNNnn",rsL.access_token);
    config = {
      headers: { Authorization: `Bearer ${rsL.access_token}` }
    }
  }
  return config;
} 


export const getIdStorage =():string => {
  let sessionStr;
  if((sessionStr = localStorage.getItem("sesion"))){
    let rsL:RespuestaLogin = JSON.parse(sessionStr);
    return rsL.id;
  }
  return "";
}
