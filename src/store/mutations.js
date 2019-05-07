import {
  CHANGE_PAGE,
  JUMP
} from './mutation-types.js'

export default {
  [CHANGE_PAGE] (state, movePage) {
    state.page_num = movePage
  },
  [JUMP] (state, navName) {
    let navList = state.nav_list
    for (let index in navList) {
      if (navList.hasOwnProperty(index)) {
        navList[index].isActive = false
      }
    }
    for (let index in navList) {
      if (navList.hasOwnProperty(index)) {
        if (navList[index].name === navName) {
          navList[index].isActive = true
          state.now_page = index
          state.title = state.titles[index]
          state.description = state.descriptions[index]
          break
        }
      }
    }
  }
}
