/**
 * getTimeDesc
 * @param {Number} time
 */
export const getTimeDesc = (time = +new Date()) => {
  let now = +new Date()
  if (!time || typeof time !== 'number' || time < 0 || time > now) {
    return false
  }
  let minute = 1000 * 60
  let hour = minute * 60
  let day = hour * 24
  let week = day * 7
  let month = day * 30
  let diffVal = now - time
  let months = diffVal / month
  let weeks = diffVal / week
  let days = diffVal / day
  let hours = diffVal / hour
  let mins = diffVal / minute
  let desc = '刚刚'
  if (months >= 1) {
    desc = `${parseInt(months)}月前`
  } else if (weeks >= 1) {
    desc = `${parseInt(weeks)}周前`
  } else if (days >= 1) {
    desc = `${parseInt(days)}天前`
  } else if (hours >= 1) {
    desc = `${parseInt(hours)}小时前`
  } else if (mins >= 1) {
    desc = `${parseInt(mins)}分钟前`
  }
  return desc
}
