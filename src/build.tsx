import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { StyleSheetServer } from 'aphrodite/no-important'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

import { injectCss } from './components/layout'
import { About } from './pages/about'

const distDir = 'dist'

const renderPage = (page: React.ReactElement<any>, filename: string) => {
  const path = `${distDir}/${filename}`
  const { css, html } = StyleSheetServer.renderStatic(() =>
    ReactDOMServer.renderToStaticMarkup(page)
  )

  const output = `<!DOCTYPE html>${injectCss(css.content, html)}`

  if (!existsSync(distDir)) mkdirSync(distDir)
  writeFileSync(path, output)

  // tslint:disable-next-line
  console.log(`Written ${output.length} bytes to ${path}`)
}

renderPage(<About />, 'index.html')
