import axios from './axios';

export const post = (endopoint: string, dto: object): Promise< any | null> => {
  return axios.post(endopoint, dto);
};

export const get = (endopoint: string, parameters: any): Promise<any | null> => {
  const params = Object.entries(parameters).map((param: any) => `${param[0]}=${param[1]}`);
  return axios.get(`${endopoint}?${params.join('&')}`);
};
