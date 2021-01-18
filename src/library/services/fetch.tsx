import axios from './axios';

export const post = (endopoint: string, dto: object): Promise< any | null> => {
  return axios.post(endopoint, dto);
};
