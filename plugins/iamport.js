import Vue from 'vue'
import IMP from 'vue-iamport'
// import { MERCHANT_CODE } from '../config/constants'

Vue.use(IMP, 'iamport')
Vue.IMP().load()

export default IMP