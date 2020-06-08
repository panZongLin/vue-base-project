import Vue from 'vue'
import Popup from './popup.vue'

const PopupBox = Vue.extend(Popup)

const PopupRender = function (data) {
  let instance = new PopupBox({
    data
  }).$mount()

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
    // visible 和弹窗组件里的visible对应，用于控制显隐
  })
}

export default PopupRender