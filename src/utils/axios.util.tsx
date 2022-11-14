import apiUrl from "@constants/api";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const client = axios.create({
  baseURL: apiUrl,
});

export default async function Request(options: AxiosRequestConfig) {
  const onSuccess = (response: AxiosResponse) => response.data;
  const onError = (error: AxiosError) => {
    //place error handling logic here
    throw error;
  };
  return client(options).then(onSuccess).catch(onError);
}
