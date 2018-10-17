/**
 * 优雅的使用async await而不使用try{ }catch() { }
 * @param {Promise} promise
 */
export default function to(promise) {
  return promise.then((data) => {
    return [null, data];
  }).catch((err) => [err]);
}
