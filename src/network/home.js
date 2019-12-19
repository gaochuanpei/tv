import { request } from "./request";
export function getData() {
  return request({
    url: "http://ranranbaobao.cn/tv/tv.php"
  });
}
