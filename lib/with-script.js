export const withScript = async (code) => {
  const nativeLog = Object.assign({}, console)

  const logs = Object.create(null)
  for (const method of ['log', 'warn', 'error']) {
    console[method] = function (...args) {
      const input = args.join(' ')
      logs[method] === undefined ? logs[method] = [input] : logs[method].push(input)
    }
  }

  const promise = new Promise(resolve => { window.scriptCallback = resolve })
  const uniqueCode = `// ${Date.now()}\n${code}`
  const dataUri = `data:text/javascript;base64,${btoa(uniqueCode)}`
  const script = document.createElement('script')
  script.type = 'module'
  script.textContent = `import('${dataUri}').then(async mod => {
    let status = undefined
    let value = undefined
    try {
      const promise = typeof mod.default === 'function' ? mod.default() : Promise.resolve(mod.default)
      value = await promise
      status = 'success'
    } catch (error) {
      value = error
      status = 'error'
    } finally {
      window.scriptCallback({ status, value })
    }
  })`

  document.body.appendChild(script)
  const { status, value } = await promise

  // eslint-disable-next-line
  console = nativeLog
  document.body.removeChild(script)

  return { status, value, logs }
}
