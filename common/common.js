import ENV from "../sdk/common.js";

/**
 * dev:开发环境
 * uat:测试环境
 * prd:生产环境
*/
export const apis = {
    prd:"http://47.105.42.195:8081/",
    uat:"http://47.105.42.195:8081/",
    dev:"http://47.105.42.195:8081/",
    //dev:"http://localhost:8081/"
}

export const configUrl = apis[ENV.env];
export {Ajax} from "../assets/ajax";