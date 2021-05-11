/**
 * @Author: Caven
 * @Date: 2020-12-24 20:50:42
 */

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

class UiLoader {
  install(app) {
    app.use(ElementPlus)
  }
}

const uiLoader = new UiLoader()

export default uiLoader
