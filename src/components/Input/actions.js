export const receiveStuff = (stuff) => ({
  type: 'RECEIVE_STUFF',
  stuff
})

export const fetchStatus = (status) => ({
  type: 'FETCH_STATUS',
  status
})

export const sendToState = (text) => ({
  type: 'SEND_TO_STATE',
  text
})

export const postToApi = (text) => ({
  type: 'POST_API',
  text
})
