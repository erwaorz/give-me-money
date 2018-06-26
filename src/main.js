import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import ElementUI from 'element-ui'
import 'element-theme-ink'
// import 'element-ui/lib/theme-chalk/index.css'

// dayjs filter
import dayjs from 'dayjs'
Vue.filter('dayjs', function (value, formatString='YYYY-MM-DD HH:mm:ss') {
  return dayjs(value).format(formatString) // 这是时间戳转时间
})

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
import VueAboutMe from 'vue-about-me'
Vue.use(VueAboutMe)

// leancloud
const appId = 'FAfX0KW7tIrVPwKjeiCay2IQ-gzGzoHsz'
const appKey = 'MbP9J5vK56e1J7RKmiX9DYlq'
AV.init({ appId, appKey })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
