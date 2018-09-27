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

/**
 * 根据时间戳输出输出特定时间格式，new Date().getTime() > 0
 * @param {Time} time 时间戳 new Date()
 * @param {String} fmt 输出格式 'YYYY-MM-dd hh:mm:ss'或'MM-dd hh:mm'等
 */
export const dateFormat = (time, fmt) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let obj = {
    'M+': time.getMonth() + 1,
    'd+': time.getDate(),
    'h+': time.getHours(),
    'm+': time.getMinutes(),
    's+': time.getSeconds()
  }
  for (let key in obj) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = obj[key] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
    }
  }
  return fmt
}

/**
 * 获取当天是星期几
 * @param {Date} time
 */
export const getDayDesc = (time = new Date()) => {
  let desc = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
  return desc[time.getDay()]
}
