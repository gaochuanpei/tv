import { request } from "./request";
export function getData() {
  return request({
    url: "http://ranranbaobao.cn/tv/tv.php"
  });
}
export function getNum() {
  return request({
    url: "http://ranranbaobao.cn/tv/get_num.php"
  });
}
export function getNum2() {
  return request({
    url: "http://ranranbaobao.cn/tv/tv2.php"
  });
}
