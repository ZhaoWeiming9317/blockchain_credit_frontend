import {
  CHANGE_PAGE
} from './mutation-types.js'

export default {
  [CHANGE_PAGE] (state, movePage) {
    state.page_num = movePage
  }
}
