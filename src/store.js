// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
const storeKey = 'todothings'

export default {
  getThings: function () {
    return JSON.parse(window.localStorage.getItem(storeKey) || '[]')
  },
  saveTings: function (thing) {
    window.localStorage.setItem(storeKey, JSON.stringify(thing))
  }
}