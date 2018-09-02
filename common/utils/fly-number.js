/**
 * 获取以base为基础大小，range为范围的随机数
 * @param {Number} base
 * @param {Number} range
 */
exports.getBaseRandom = function(base, range) {
  return  base + Math.floor(Math.random() * range)
}