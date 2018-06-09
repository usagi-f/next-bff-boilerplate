// @flow

const nativeReload = (path: string) => {
  if (window) window.location.href = path
}

export default nativeReload
