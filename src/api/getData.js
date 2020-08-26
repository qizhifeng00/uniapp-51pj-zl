import request from '../config/request'

//发送短信 :{mobile}
export const sendSms = data => request('/sms?method=send.member.verify', data, "POST");

//登录 :{mobile,code}
export const login = data => request('/token?method=member.sms', data, "POST");