// action creaters
export const showAlert = payload => ({
  type: 'SHOW_ALERT',
  payload,
})

export const hideAlert = () => ({
  type: 'HIDE_ALERT',
})

export const sagaGetPosts = payload => ({
  type: 'SAGA_GET_POSTS',
  payload,
})

export default {
  showAlert,
  hideAlert,
  sagaGetPosts,
}
