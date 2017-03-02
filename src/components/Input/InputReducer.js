export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_STUFF':
      return {
        ...state,
        data: action.stuff
      }
    case 'FETCH_STATUS':
      return {
        ...state,
        fetchStatus: action.status
      }
    case 'SEND_TO_STATE':
      return {
        ...state,
        input: action.text
      }
    default:
      return state
  }
}
