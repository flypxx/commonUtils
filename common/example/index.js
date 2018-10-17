import to from '../utils/fly-to';

async function task() {
  let err;
  let data;
  let tasks;

  [err, data] = await to(myPromise())
  if (!data) {
    console.error('data is not found')
  }

  if (err) {
    console.error(err)
  }
}
