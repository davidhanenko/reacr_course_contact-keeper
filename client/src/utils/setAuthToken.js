import axios from 'axios'

// set auth token globaly
const setAuthToken = token => {
  if(token) {
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    delete axios.defaults.headers.common['x-auth-token']
  }
}

export default setAuthToken