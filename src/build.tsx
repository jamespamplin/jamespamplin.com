import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { StyleSheetServer } from 'aphrodite/no-important'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

import { About } from './pages/about'
import { injectCss } from './components/layout'

const distDir = 'dist'

const renderPage = (page: React.ReactElement<any>, filename: string) => {
  const path = `${distDir}/${filename}`
  const { css, html } = StyleSheetServer.renderStatic(() =>
    ReactDOMServer.renderToStaticMarkup(page)
  )

  const output = `<!DOCTYPE html>${injectCss(css.content, html)}`

  if (!existsSync(distDir)) mkdirSync(distDir)
  writeFileSync(path, output)
  console.log(`Written ${output.length} bytes to ${path}`)
}

renderPage(<About />, 'index.html')
