import http from '@/utils/httpIndex'

const state = {
  tag: "",
  classify: "",
  banners: ""
}

// 获取state的数据
const getters = {
  tag: state => state.tag,
  classify: state => state.classify,
  banners: state=> state.banners
}

// 更新state的数据
const mutations = {
  WEBINFO(state, data) {
    state.webinfo = data
  },
  TAG(state, data) {
    state.tag = data
    state.classify = ''
  },
  CLASSIFY(state, data) {
    state.classify = data
    state.tag = ''
  },
  BANNERS(state, data) {
    state.banners = data
  }
}

// 更新state数据的动作
const actions = {
  Tag({ commit }, data) {
    commit('TAG', data)
  },
  Classify({ commit }, data) {
    commit('CLASSIFY', data)
  },
  async Banners({ commit }, data) {
    const res = await http.post('/apis/ad', {type: 'banner'})
    commit('BANNERS', res.data)
  }
}


export default {state, getters, mutations, actions}

