/**
 * 获取一段长度为len的不含易混淆字母的随机字符串
 * @param {Number} len
 */
exports.randomString = function(len) {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let maxLen = chars.length
  let str = ''
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxLen))
  }
  return str
}

/**
 * 转移字符串中的['<', '>', '"', '\'']为安全字符
 * @param {String} str
 */
exports.filterString = function(str) {
  return str.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}