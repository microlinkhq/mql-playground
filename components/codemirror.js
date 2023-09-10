import { githubLightInit } from '@uiw/codemirror-theme-github'
import { javascript } from '@codemirror/lang-javascript'
import { useCallback, useRef, useEffect } from 'react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { EditorView } from '@codemirror/view'
import { css } from '@emotion/react'
import { Flex } from 'theme-ui'

export const CodeMirror = ({ initialCode }) => {
  const editor = useRef()

  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions: [javascript(), EditorView.lineWrapping],
    width: '100%',
    basicSetup: {
      foldGutter: false,
      dropCursor: false,
      allowMultipleSelections: false,
      indentOnInput: false
    },
    theme: githubLightInit({
      settings: {
        caret: '#c6c6c6',
        fontFamily: 'monospace'
      }
    }),
    value: initialCode
  })

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current)
    }
  }, [editor.current])

  const onChange = useCallback((value, viewUpdate) => {
    console.log('value:', value)
  }, [])

  return (
    <Flex
      data-name='editor'
      ref={editor}
      sx={{ flex: 1 }}
      css={css`
        .cm-editor {
          /* our container wrapper for Codemirror instance */
          flex: 1; /* expand to the maximum */
          height: 100%;
          position: relative; /* needed for child component .cm-scroller */
        }

        .cm-scroller {
          position: absolute !important;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          overflow-y: auto;
        }

        .cm-content {
          font-size: 18px;
          white-space: pre-wrap;
          word-break: normal;
          word-wrap: break-word;
        }
      `}
    ></Flex>
  )
}
