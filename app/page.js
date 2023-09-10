'use client'

import { SyntaxHighlight } from '@/components/syntax-highlight'
import { MonacoEditor } from '@/components/monaco-editor'
import { Text, Paragraph, Box, Flex } from 'theme-ui'
import { Spinner } from '@/components/spinner'
import { Choose } from '@/components/choose'
import { Dot } from '@/components/dot'
import { If } from '@/components/if'
import Tabs from '@/components/tabs'
import { colors } from '@/theme'
import { useState } from 'react'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const Kbd = props => (
  <Text
    as='kbd'
    sx={{
      font: 'monospace',
      borderRadius: 3,
      border: 1,
      borderColor: 'gray8',
      display: 'inline-block',
      py: 1,
      px: 2,
      mx: 1,
      boxShadow: `inset 0 -1px 0 ${colors.gray8}`
    }}
    {...props}
  />
)

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

    setData({ value, logs })
    setStatus(status)
  }

  const { response, ...payload } = data?.value ?? {}

  return (
    <Flex
      as='main'
      sx={{
        height: '100vh',
        color: 'black'
      }}
    >
      <MonacoEditor onEvaluate={onEvaluate} initialCode={initialCode} />
      <Flex
        data-name='render'
        sx={{
          flex: 1,
          bg: 'white',
          borderLeft: '1px solid',
          borderColor: 'gray2',
          flexDirection: 'column'
        }}
      >
        <Box
          data-name='render-output'
          sx={{ flex: 1, overflow: 'auto', py: 2, px: 3 }}
        >
          <Choose>
            <Choose.When
              condition={status === 'idle'}
              render={() => (
                <Flex
                  sx={{
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Press <Kbd>Command</Kbd> + <Kbd>Enter</Kbd> to run
                </Flex>
              )}
            />
            <Choose.When
              condition={status === 'running'}
              render={() => (
                <Flex
                  sx={{
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Spinner sx={{ zoom: 2 }} />
                </Flex>
              )}
            />
            <Choose.When
              condition={status === 'success'}
              render={() => (
                <SyntaxHighlight>
                  {JSON.stringify(payload, null, 2)}
                </SyntaxHighlight>
              )}
            />
          </Choose>
        </Box>
        <Box
          data-name='render-console'
          sx={{
            flex: 1,
            overflow: 'auto',
            borderTop: '1px solid',
            borderColor: 'gray2'
          }}
        >
          <Tabs>
            <Tabs.TabList>
              <Tabs.Tab key='http'>http</Tabs.Tab>
              <Tabs.Tab key='log'>logs</Tabs.Tab>
            </Tabs.TabList>
            <Tabs.TabPanel key='http'>
              <If
                condition={!!data}
                render={() => (
                  <Box sx={{ py: 2, px: 3 }}>
                    <Box sx={{ pt: 2 }}>
                      <Dot status={data.value.status} sx={{ mr: 2 }} />
                      <Text
                        sx={{
                          fontSize: 1,
                          textTransform: 'uppercase'
                        }}
                      >
                        {data.value.statusCode === 200 ? 'OK' : 'OH NO'}
                      </Text>
                      <Text sx={{ fontSize: 1, pl: 1 }}>
                        ({data.value.statusCode})
                      </Text>
                    </Box>
                    <SyntaxHighlight sx={{ pt: 2 }}>
                      {JSON.stringify(
                        Object.fromEntries(
                          data.value.response.headers.entries()
                        ),
                        null,
                        2
                      )}
                    </SyntaxHighlight>
                  </Box>
                )}
              />
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
                  })}
              />
            </Tabs.TabPanel>
          </Tabs>
        </Box>
      </Flex>
    </Flex>
  )
}
