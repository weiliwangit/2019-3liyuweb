import { createStore } from 'redux'

import reducer from './reducer.js'

//创建store

const store = createStore(reducer)

export default store