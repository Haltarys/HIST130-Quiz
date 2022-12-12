import axios from 'axios';

export const baseURL = import.meta.env.BASE_URL || '/';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchData(url: string) {
  const data = await axiosInstance.get(url).then((res) => res.data);

  // TODO: remove sleep
  // await sleep(3000);

  return data;
}
