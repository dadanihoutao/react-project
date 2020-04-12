const NODE_ENV = process.env.NODE_ENV
const APP_ENV = process.env.APP_ENV
let CONFIG = {}
// 开发环境
if (NODE_ENV === 'development') {
    CONFIG = {
        text: '开发',
        baseURL: 'http://www.lokiblog.com/api/'
    }
// 测试
} else if (NODE_ENV === 'production' && APP_ENV === 'test') {
    CONFIG = {
        text: '测试',
        baseURL: 'http://www.lokiblog.com/api/',
    }
// 生产
} else if (NODE_ENV === 'production' && !APP_ENV) {
    CONFIG = {
        text: '生产',
        baseURL: 'http://www.lokiblog.com/api/'
    }
}
export {CONFIG}