import { BASE_FILE } from "../constants"

export function getData() {
  const data = window.localStorage.getItem('zipboard')
  
  if (data) {
    const parsed = JSON.parse(data)
    console.log('has data', parsed)
    return parsed
  } else {
    console.log('has NO data')
    const zp = JSON.stringify(BASE_FILE)
    window.localStorage.setItem('zipboard', zp)
    return BASE_FILE
  }
}

export function saveData(data) {
  const zp = JSON.stringify(data)
  window.localStorage.setItem('zipboard', zp)
}