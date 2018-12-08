import React from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'

import { Container } from './container'
import { Header } from './header'
import { Footer } from './footer'
import { Page } from './page'

const cssPlaceholder = '/**data-aphrodite**/'

export const injectCss = (cssContent: string, html: string) =>
  html.replace(cssPlaceholder, cssContent)

export const withLayout = (
  pageTitle: string,
  PageContent: React.ReactElement<any>
) => (
  <html className={css(styles.html)} lang="en">
    <head>
      <title>{pageTitle} - jamespamplin.com</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
      <style data-aphrodite>{cssPlaceholder}</style>
    </head>
    <body
      id="about_page"
      className={css(styles.body)}
      itemScope
      itemType="http://schema.org/AboutPage"
    >
      <Container>
        <Header />
        <Page pageTitle={pageTitle}>{PageContent}</Page>
      </Container>
      <Footer />
    </body>
  </html>
)

const styles = StyleSheet.create({
  html: {
    fontSize: '62.5%', // reset to 10px for rems
    backgroundColor: '#111f36',
  },

  body: {
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: 'Georgia, serif',
    fontSize: '1.6rem',
    lineHeight: '1.5em',
    margin: 0,
    padding: 0,
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
  },
})
