'use client'

import { MonacoEditor } from '@/components/monaco-editor'
import { Paragraph, Box, Flex } from 'theme-ui'
import { Choose } from '@/components/choose'
import { If } from '@/components/if'
import Tabs from '@/components/tabs'
import { useState } from 'react'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// const initialCode = `import mql from 'https://esm.sh/@microlink/mql'
// console.log('ola')
// export default mql('https://example.com')`

const initialCode = `import mql from 'https://esm.sh/@microlink/mql'

console.log('ola')

export default mql('https://example.com')`

export default function Home () {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('idle')

  async function onEvaluate (code) {
    setStatus('running')

    const script = document.createElement('script')

    const dataUri = `data:text/javascript;base64,${btoa(code)}`
    script.type = 'module'

    window.__result = null

    const log = console.log.bind(console)
    const debug = console.debug.bind(console)
    const info = console.info.bind(console)
    const warn = console.warn.bind(console)
    const error = console.error.bind(console)

    const logs = Object.create(null)

    for (const method of ['log', 'debug', 'info', 'warn', 'error']) {
      console[method] = function (...args) {
        const input = args.join(' ')
        logs[method] = Array.isArray(logs[method])
          ? logs[method].push(input)
          : [input]
      }
    }

    const string = `import('${dataUri}').then(async mod => {
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
        window.__result = { status, value }
      }
    })`

    script.textContent = string
    document.body.appendChild(script)

    const getResult = async () => {
      if (window.__result !== null) return Promise.resolve(window.__result)
      await delay(50)
      return getResult()
    }

    const { status, value } = await getResult()
    document.body.removeChild(script)

    console.log = log
    console.debug = debug
    console.info = info
    console.warn = warn
    console.error = error

    console.log(value)
    setData({ value, logs })
    setStatus(status)
  }

  const resHeaders = data
    ? Object.fromEntries(data.value.response.headers.entries())
    : {}

  return (
    <Flex
      as='main'
      sx={{
        height: '100vh',
        flexDirection: 'row'
      }}
    >
      <MonacoEditor onEvaluate={onEvaluate} initialCode={initialCode} />
      <Flex
        data-name='render'
        sx={{
          flex: 1,
          height: '100vh',
          bg: 'white',
          borderLeft: '1px solid',
          borderColor: 'gray2',
          color: 'black',
          flexDirection: 'column'
        }}
      >
        <Box data-name='render-output' sx={{ flex: 1, overflow: 'auto' }}>
          <Choose>
            <Choose.When
              condition={status === 'running'}
              render={() => 'PLEASE WAIT...'}
            />
            <Choose.When
              condition={status === 'success'}
              render={() => (
                <pre>
                  <code>{JSON.stringify(data.value, null, 2)}</code>
                </pre>
              )}
            />
          </Choose>
        </Box>
        <Box
          data-name='render-console'
          sx={{
            flex: 1,
            borderTop: '1px solid',
            borderColor: 'gray2',
            verflow: 'auto'
          }}
        >
          <Tabs>
            <Tabs.TabList>
              <Tabs.Tab key='info'>info</Tabs.Tab>
              <Tabs.Tab key='logs'>logs</Tabs.Tab>
            </Tabs.TabList>
            <Tabs.TabPanel key='info'>
              <div>{data?.value.status}</div>
              <div>{data?.value.statusCode}</div>
              <pre>
                <code>{JSON.stringify(resHeaders, null, 2)}</code>
              </pre>
            </Tabs.TabPanel>
            <Tabs.TabPanel key='logs'>
              <If
                condition={
                  data && data.logs && Object.keys(data.logs).length > 0
                }
                render={() =>
                  Object.keys(data?.logs ?? {}).map(method => {
                    const color = 'blue'
                    return data.logs[method].map(log => (
                      <Paragraph
                        sx={{
                          color,
                          py: 2,
                          px: 3,
                          borderBottom: '1px solid',
                          borderColor: 'gray1'
                        }}
                        key={`${method}_${log}`}
                      >
                        {method}: {log}
                      </Paragraph>
                    ))
                  })
                }
              />
            </Tabs.TabPanel>
          </Tabs>
        </Box>
      </Flex>
    </Flex>
  )
}
