import { message } from 'antd';
import axios, { isCancel, AxiosError } from 'axios';
import store from "@/state";


const instance = axios.create({
  baseURL: '/yapi',
  timeout: 1000 * 60 * 5,
  // headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.response.use(function (response) {
  return response?.data || { success: false };
}, function (error) {
  console.log(error)
  const { response } = error;
  if (!response) {
    message.error("连接超时")
    return { success: false }
  }
  const status = response.status
  if (status !== 200) {
    message.error(response.data.message)
  }
  if (status === 401) {
    store.userState.user = {}
    return
  }
  return { success: false }
});

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

const Api = {
  get uid() {
    return Math.random().toString(36).slice(2)
  },
  get(path, params) {
    return instance.get(path, { params })
  },
  post(path, data) {
    return instance.post(path, { ...data })
  },
  upload(url, data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    })
    return instance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: ({ loaded, total }) => {
        if (loaded === total) {
          message.success("上传成功")
        }
      }
    })
  }
}

export default Api;