import apis from './apis'
import user from './user'
import assets from './assets'
import stats from './stats'

export default function install (store) {
  store.registerModule('apis', apis)
  store.registerModule('user', user)
  store.registerModule('assets', assets)
  store.registerModule('stats', stats)
}