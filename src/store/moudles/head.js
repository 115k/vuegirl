import * as types from '../mutation-types'

const state = {
  title: '',
  hideHeader: false,
  hideFoot: true,
  options: {
    title: {},
    left: {},
    right: {}
  }
}

// getters
const getters = {
  getTitle: state => state.title,
  getTitleShow: state => state.hideHeader,
  getTitleOptions: state => state.options,
  getFootShow: state => state.hideFoot
}

// actions
const actions = {
  setTitle ({ commit }, title) {
    commit(types.SET_HEAD_TITLE, { title })
  },
  setTitleShow({ commit }, hideHeader) {
    commit(types.SET_HIDE_HEAD, hideHeader)
  },
  /*
    ## setTitleOptions 函数接收 options 对象参数说明
    options = {
      title: {
        title: 点击标题时触发的函数
      },
      left: {
        overwriteTemplate: 重写左侧部分返回文字及图标模板,
        onClickBack: 点击左边返回时触发的函数
      },
      right: {
        overwriteTemplate: 重写右侧部分模板,
        onClickMore: 点击右侧更多时触发触发的函数,
      }
    }
    ```
    ### template 可接收 html 字符串 或 component 对象
    component 对象
    ```
    {
      template: '<router-link to="xxx" @click="click"></router-link>'
      methods: {
        click () {
          // click func
        }
      }
    }
  */
  resetTitleOptions ({ commit }) {
    commit(types.SET_TITLE_OPTIONS, {
      title: {},
      left: {},
      right: {},
    })
  },
  setHideFoot({ commit }, isHideFoot) {
    commit(types.SET_HIDEFOOT, isHideFoot)
  }
}

// mutations
const mutations = {
  [types.SET_HEAD_TITLE] (state, { title }) {
    state.title = title
  },
  [types.SET_HIDE_HEAD] (state, hideHeader) {
    state.hideHeader = hideHeader
  },
  [types.SET_TITLE_OPTIONS] (state, options) {
    state.options = options
  },
  [types.SET_HIDEFOOT] (state, hideFoot) {
    state.hideFoot = hideFoot
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
