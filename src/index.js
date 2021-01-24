const { useReducer } = require('react')

if (localStorage.getItem('state') == null) {
  localStorage.setItem('state', JSON.stringify({}))
}

const writeState = (element, value) => {
  let object = JSON.parse(localStorage.getItem('state'))
  if (value == '') value = ''
  object[element] = value
  localStorage.setItem('state', JSON.stringify(object))
  var event = new CustomEvent(element)
  window.dispatchEvent(event)
}
const freshState = (f) => {
  localStorage.setItem('state', JSON.stringify(f))
}
const readState = (element) => {
  let object = JSON.parse(localStorage.getItem('state'))
  return object[element] !== undefined ? object[element] : ''
}

const useSubscribe = (...fields) => {
  const func = useReducer((x) => x + 1, 0)[1]
  if (fields.length > 1) {
    let results = {}
    fields.map((e) => {
      window.addEventListener(e, func, false)
      results[e] = readState(e)
      return true
    })
    return results
  } else {
    window.addEventListener(fields[0], func, false)
    return readState(fields[0])
  }
}
const localState = { writeState, readState, useSubscribe, freshState }
export default localState
export { writeState, readState, useSubscribe, freshState }
