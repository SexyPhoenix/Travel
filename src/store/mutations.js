/*
* @Author: Sexy Phoenix
* @Date:   2019-01-22 10:38:18
* @Last Modified by:   Sexy Phoenix
* @Last Modified time: 2019-01-22 10:43:03
*/
export default {
  changeCity (ctx, name) {
    this.state.city = name
    localStorage.city = name
  }
}
