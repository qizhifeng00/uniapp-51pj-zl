import request from '../config/request'

//发送短信 :{mobile}
export const sendSms = data => request('/sms?method=send.member.verify', data, "POST");

//登录 :{mobile,code}
export const login = data => request('/token?method=member.sms', data, "POST");

//获取招聘列表
export const getRecruitList = () => request('/data?method=d1.list')

//获取招聘详情
export const getRecruitDetail = detail_id => request('/data?method=d1.detail&id=' + detail_id)