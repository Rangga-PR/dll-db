import axios from "axios";

export const API_HOST = "https://dummyjson.com";

type Arg = {
  [key: string | symbol]: any;
};

export async function fetcher(url: string, { arg }: Arg) {
  return axios({ url: `${API_HOST}${url}`, ...arg })
    .then((res) => res.data)
    .catch(() => {
      throw new Error("Failed to fetch data");
    });
}
