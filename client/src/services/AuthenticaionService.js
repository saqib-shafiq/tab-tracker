/**
 * Created by saqib on 7/3/2018.
 */

import Api from '../services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
