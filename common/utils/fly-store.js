export function setStorageItem(id, key, value) {
  let appData = window.localStorage.__myApp__
  if (!appData) {
    appData = {}
    appData[id] = {}
  } else {
    appData = JSON.parse(appData)
    if (!appData[id]) {
      appData[id] = {}
    }
  }
  appData[id][key] = value
  window.localStorage.__myApp__ = JSON.stringify(appData)
}

export function getStorageItem(id, key, def) {
  let appData = window.localStorage.__myApp__
  if (!appData) {
    return def
  }
  appData = JSON.parse(appData)[id]
  if (!appData) {
    return def
  }
  let val = appData[key]
  if (typeof val === 'boolean') {
    return val
  } else if (val === 0 || val === null) {
    return val
  } else {
    return val || def
  }
}

export function deleteStorageItem(id, key) {
  let appData = window.localStorage.__myApp__
  if (!appData) {
    return
  } else {
    appData = JSON.parse(appData)
    if (appData[id]) {
      delete(appData[id][key])
    }
    window.localStorage.__myApp__ = JSON.stringify(appData)
  }
}

export function setSessionStorageItem(name, key, value) {
  let page = window.sessionStorage.__myPage__
  if (!page) {
    page = {}
    page[name] = {}
  } else {
    page = JSON.parse(page)
    if (!page[name]) {
      page[name] = {}
    }
  }
  page[name][key] = value
  window.sessionStorage.__myPage__ = JSON.stringify(page)
}

export function getSessionStorageItem(name, key, def) {
  let page = window.sessionStorage.__myPage__
  if (!page) {
    return def
  }
  page = JSON.parse(page)[name]
  if (!page) {
    return def
  }
  let val = page[key]
  if (typeof val === 'boolean') {
    return val
  } else if (val === 0 || val === null) {
    return val
  } else {
    return val || def
  }
}

export function deleteSessionStorageItem(name, key) {
  let page = window.sessionStorage.__myPage__
  if (!page) {
    return
  }
  page = JSON.parse(page)[name]
  if (page) {
    delete(page[key])
  }
  window.sessionStorage.__myPage__ = JSON.stringify(page)
}