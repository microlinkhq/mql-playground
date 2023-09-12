import Monaco from '@monaco-editor/react'
import { fontSizes } from '@/theme'
import { useRef } from 'react'

import theme from './theme'

import mqlTypes from '../../node_modules/@microlink/mql/lightweight/index.d.ts'

// https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html
const editorOptions = {
  fontSize: fontSizes[1],
  minimap: { enabled: false },
  // Enable that scrolling can go one screen size after the last line. Defaults to true.
  scrollBeyondLastLine: false,
  wordWrapColumn: 'on',
  hideCursorInOverviewRuler: true,
  lineNumbersMinChars: 0,
  scrollbar: { useShadows: false },
  overviewRulerLanes: 0
}

const monacoSetup = monaco => {
  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    // diagnosticCodesToIgnore: [80001],
    noSemanticValidation: true,
    noSyntaxValidation: false
  })

  monaco.editor.defineTheme('custom', theme)

  /**
   * Add extra types
   * https://github.com/suren-atoyan/monaco-react/issues/426
   */

  // https://microsoft.github.io/monaco-editor/typedoc/interfaces/languages.typescript.CompilerOptions.html
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES6,
    allowNonTsExtensions: true,
    esModuleInterop: true
  })

  const sanetizedTypes = `declare module "@microlink/mql" {
    ${mqlTypes.replaceAll('export ', '').replace('default mql', 'export = mql')}
  }`

  const libUri = 'ts:filename/mql.d.ts'

  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    sanetizedTypes,
    libUri
  )

  monaco.editor.createModel(
    sanetizedTypes,
    'typescript',
    monaco.Uri.parse(libUri)
  )
}

export const MonacoEditor = ({ initialCode, onEvaluate }) => {
  const editorRef = useRef(null)

  return (
    <Monaco
      defaultLanguage='javascript'
      defaultValue={initialCode}
      // onChange={value => {
      //   const searchParams = new URLSearchParams(window.location.search)
      //   searchParams.set('code', marshall(value))
      //   replaceUrl({ searchParams })
      // }}
      theme='custom'
      // key={activePath}
      options={editorOptions}
      onMount={(editor, monaco) => {
        editorRef.current = editor

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
          // editor.setValue(prettier.js(editor.getValue()))
          // toast.success('code formatted')
        })
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
          const userCode = editorRef.current.getValue()
          onEvaluate(userCode)
          // toast.success('running the code...')
        })
      }}
      beforeMount={monacoSetup}
    />
  )
}
