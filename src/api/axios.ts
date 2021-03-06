import axios from 'axios';

export const baseURL = import.meta.env.BASE_URL || '/';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export async function fetchData(url: string) {
  return axiosInstance.get(url).then((res) => res.data);
}
