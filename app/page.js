'use client'

import { SyntaxHighlight } from '@/components/syntax-highlight'
import { MonacoEditor } from '@/components/monaco-editor'
import { Console } from '@/components/console'
import { Spinner } from '@/components/spinner'
import { withScript } from '@/lib/with-script'
import { Choose } from '@/components/choose'
import { Text, Box, Flex } from 'theme-ui'
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

const initialCode = `/**
*
* Welcome to MQL Playground!
*
* - Write interactive code.
* - See result on the right panel
* - Copy and paste the unique URL generated
*
* Learn more at https://microlink.io/mql
*/

import mql from 'https://esm.sh/@microlink/mql'

console.log('ola')
console.warn('ola')
console.warn('ola2')
console.error('ola')

export default mql('https://example.com')`

export default function Home () {
  const [value, setValue] = useState(null)
  const [logs, setLogs] = useState(null)
  const [status, setStatus] = useState('idle')

  async function onEvaluate (code) {
    setStatus('running')
    const { status, value, logs } = await withScript(code)
    setValue(value)
    setLogs(logs)
    setStatus(status)
  }

  const { response, ...payload } = value ?? {}

  const countLogs = Object.keys(logs ?? {}).reduce((acc, method) => acc + logs[method].length, 0)

  return (
    <Flex
      as='main'
      sx={{
        height: '100vh',
        color: 'black'
      }}
    >
      <Flex data-name='editor' sx={{ flex: 1, p: 3 }}>
        <MonacoEditor onEvaluate={onEvaluate} initialCode={initialCode} />
      </Flex>
      <Flex
        data-name='render'
        sx={{
          flex: 1,
          background: 'white',
          borderLeft: '1px solid',
          borderColor: 'gray2',
          flexDirection: 'column'
        }}
      >
        <Box data-name='render-output' sx={{ flex: 1, overflow: 'auto' }}>
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
                  Press <Kbd>⌘</Kbd> + <Kbd>↩</Kbd> to run
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
                  <Spinner sx={{ zoom: 2.5 }} />
                </Flex>
              )}
            />
            <Choose.When
              condition={status === 'success'}
              render={() => (
                <SyntaxHighlight sx={{ p: 3 }}>
                  {JSON.stringify(payload, null, 2)}
                </SyntaxHighlight>
              )}
            />
          </Choose>
        </Box>

        <If
          condition={status === 'success'}
          render={() => (
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
                  <Tabs.Tab>http <Dot status={value.status} sx={{ ml: 2 }} /></Tabs.Tab>
                  <Tabs.Tab>logs ({countLogs})</Tabs.Tab>
                </Tabs.TabList>
                <Tabs.TabPanel>
                  <If
                    condition={!!value}
                    render={() => (
                      <SyntaxHighlight sx={{ p: 3 }}>
                        {JSON.stringify(
                          Object.fromEntries(
                            Array.from(value.response.headers).sort(([a], [b]) => a.localeCompare(b))
                          ),
                          null,
                          2
                        )}
                      </SyntaxHighlight>
                    )}
                  />
                </Tabs.TabPanel>
                <Tabs.TabPanel>
                  <If
                    condition={logs && Object.keys(logs).length > 0}
                    render={() => Object.keys(logs ?? {}).map(method => logs[method].map(log => (
                      <Console key={`${method}_${log}`} type={method}>{log}</Console>
                    )))}
                  />
                </Tabs.TabPanel>
              </Tabs>
            </Box>
          )}
        />
      </Flex>
    </Flex>
  )
}
