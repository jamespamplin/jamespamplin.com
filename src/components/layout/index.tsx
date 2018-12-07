import React from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'

import { Container } from './container';
import { Header } from './header';
import { Footer } from './footer';

const cssPlaceholder = '/**data-aphrodite**/'

export const injectCss = (cssContent: string, html: string) =>
  html.replace(cssPlaceholder, cssContent)


export const withLayout = (pageTitle: string, Page: React.ReactElement<any>) =>
  <html className={css(styles.html)} lang="en">
    <head>
      <title>{pageTitle} - jamespamplin.com</title>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="data:;base64,iVBORw0KGgo="/>
      <style data-aphrodite>{cssPlaceholder}</style>
    </head>
    <body className={css(styles.body)} itemScope itemType="http://schema.org/WebPage">
      <Container>
        <Header/>
        <h1 className={css(styles.pageTitle)} itemProp="name">{pageTitle}</h1>
        <article itemProp="mainContentOfPage" itemScope itemType="http://schema.org/Article" itemRef="author">
          {Page}
        </article>
      </Container>
      <Footer/>
    </body>
  </html>

const styles = StyleSheet.create({
  html: {
    fontSize: '62.5%', // reset to 10px for rems
    backgroundColor: '#111f36'
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

  pageTitle: {
    fontSize: '4rem',
    letterSpacing: '-0.1rem',
    margin: '1.5rem 0 3rem',
    fontWeight: 'normal',
    lineHeight: '1em'
  }
})
