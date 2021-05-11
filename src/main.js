/**
 * @Author: Caven
 * @Date: 2021-02-02 11:00:42
 */

import axios from 'axios'
import { createApp } from 'vue'
;(async () => {
  await axios.get('config/config.json').then((res) => {
    global.Config = res.data
    Object.freeze(global.Config)
  })

  Promise.all([
    import('./App.vue'),
    import('./router'),
    import('./store'),
    import('./loader'),
  ]).then(
    ([
      { default: App },
      { default: router },
      { default: store },
      { default: appLoader },
    ]) => {
      const app = createApp(App)
      app.config.productionTip = false
      app.use(appLoader)
      app.use(router)
      app.use(store)
      app.use(appLoader)
      app.mount('#app')
    }
  )
})()
