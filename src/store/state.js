/*
* @Author: Sexy Phoenix
* @Date:   2019-01-22 09:48:24
* @Last Modified by:   Sexy Phoenix
* @Last Modified time: 2019-01-22 10:35:42
*/
let defaultCity = '南京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
