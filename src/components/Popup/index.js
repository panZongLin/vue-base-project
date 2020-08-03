import Vue from 'vue'
import Popup from './popup.vue'

const PopupBox = Vue.extend(Popup)

const PopupRender = function (data) {
    let instance = new PopupBox({
        data
    }).$mount()

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.visible = true //调用时，展示弹窗
    })
}

export default PopupRender