import Vue from 'vue'
import Recommend from './Recommend'

import {createElement} from '@/common/utils'

class ektRecommend {
  constructor() {
    this._vm = undefined
  }

  show(option) {
    createElement('von-action-sheet')

    this._vm = new Vue(Recommend)
    this._vm.$mount('[von-action-sheet]')

    setTimeout(() => {
      this._vm.show(option)
    })
  }

  hide(buttonIndex) {
    this._vm.hide(buttonIndex)
  }

  getState() {
    return this._vm ? this._vm.getState() : 0
  }
}

export default new ektRecommend()
