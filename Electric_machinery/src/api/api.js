import http from '../utils/request'

export default {
    // 设备监测数据
    getSindex(id) {
        return http.get(`http://1.92.106.62:8001/api/latest`)
    },
    // 设备数据查询
    switchFindData( start, end) {
        return http.get(`http://1.92.106.62:8001/api/data?start=${start}&end=${end}`);
    },
}