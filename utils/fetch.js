import axios from 'axios'
import qs from 'qs'

//发起请求时，执行该方法
axios.interceptors.request.use(config => {
  //可以在这里开始加载动画，查询token等
  return config;
}, err => {
  return Promise.reject(err);
});

//接受到后台数据时，执行该方法
axios.interceptors.response.use(res => res, err => {
  Promise.resolve(err.response)
});

//检查状态码
function checkStatus(res) {
  if(res.status === 200 || res.status === 304){ //当状态正常时返回原样数据
    return res.data;
  }
  return { //状态不正常时返回自定义的一些格式
    "errorCode": 12306,
    "msg": "something went wrong!"
  }
}

export default {
  get(url, params) {
    if(!url) {
      return;
    }
    return axios({
      method: 'get',
      url,
      params,
      timeout: 1000
    }).then(checkStatus);
  },
  post(url, data) {
    if(!url) {
      return;
    }
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 10000
    }).then(checkStatus);
  }
}
