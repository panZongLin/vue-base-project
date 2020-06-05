import axios from 'axios';
import { message } from 'ant-design-vue';


axios.defaults.timeout = 5000;
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;


export default function request(params) {
    return axios(params)
        .then(checkStatus)
        .then(checkCode)
        .catch(err => {
            // TODO: 报错
            handleError(err)
        })
}
//检查返回状态
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    //...
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
//对返回的data中的code处理
function checkCode(data) {
    console.log(data)
    // if (data.code === 403) {
    //     store.dispatch('user/FedLogOut').then(() => {
    //         router.push({ path: '/login' })
    //     })
    //     return
    // }
}
//处理请求中抛出的错误
function handleError(error) {
    console.log(error)
    message.error({
        content: '理请求中抛出的错误'
    })
}
// 请求拦截
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(res => {
    return res
}, error => {
    return error
})