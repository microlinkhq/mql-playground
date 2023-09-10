/* global Worker */

const workerTemplate = `
self.onmessage = async function (event) {
  const code = event.data;

  const log = console.log;
  const debug = console.debug;
  const info = console.info;
  const warn = console.warn;
  const error = console.error;

  const logs = Object.create(null)

  for (const method of ['log', 'debug', 'info', 'warn', 'error']) {
    console[method] = function(...args) {
      const input = args.join(' ')
      logs[method] = Array.isArray(logs[method]) 
        ? logs[method].push(input) 
        : [input]
    }  
  }

  let status = undefined
  let value = undefined

  try {
    const userCode = new Function(code);
    value = await userCode();
    status = 'success'
  } catch (error) {
    value = error
    status = 'error'
  } finally {
    self.postMessage({ status, logs, value })
  }
};
`

export const withWorker = code =>
  new Promise(resolve => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([workerTemplate], { type: 'module' }))
    )
    worker.onmessage = event => resolve(event.data)
    worker.postMessage(code)
  })
