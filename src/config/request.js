import { baseUrl } from './env'

export default async (url = '', data = {}, method = 'GET', token = false) => {
    //大写处理
    method = method.toUpperCase();

    url = baseUrl + url;

    let token_key = ""

    if (method == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        //格式化get参数
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }
    console.log(url)
    let requestConfig = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token_key
        },
    }
    console.log(requestConfig)
    if (token == true) {
        uni.getStorage({
            key: 'storage_key',
            success: function (res) {
                token_key = res.data
            }
        });

    }

    return await new Promise((resolve, reject) => {
        uni.request({
            url,
            method,
            data: JSON.stringify(data),
            requestConfig,
            success: (res) => {
                console.log(res)
                resolve(res)
                reject(res)
            },
            fail: (err) => {
                uni.showToast({
                    title: '网络加载失败',
                    duration: 1000
                });
            }
        });
    })
}