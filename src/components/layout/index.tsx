import React from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'

import {readFileSync} from 'fs'

const cssPlaceholder = '/**data-aphrodite**/'

export const injectCss = (cssContent: string, html: string) =>
  html.replace(cssPlaceholder, cssContent)

const Header = () =>
  <header>
    <div className={css(styles.title)} itemProp="name">
      <a className={css(styles.titleLink)} href="/" title="jamespamplin.com">
        <span className={css(styles.titleText, styles.titleFirstName)}>James</span>
        {' '}
        <span className={css(styles.titleText, styles.titleLastName)}>Pamplin</span>
      </a>
    </div>
  </header>

const Footer = () =>
  <footer>
    <div>Footer</div>
  </footer>

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
      <div className={css(styles.container)}>
        <Header/>
        <h1 className={css(styles.pageTitle)} itemProp="name">{pageTitle}</h1>
        <article itemProp="mainContentOfPage" itemScope itemType="http://schema.org/Article" itemRef="author">
          {Page}
        </article>
        <Footer/>
      </div>
    </body>
  </html>

const fontBase64 = readFileSync(`${__dirname}/Raleway-subset.woff2`).toString('base64')
const titleFontUrl = `data:application/font-woff2;base64,${fontBase64}`

const titleFont = {
  fontDisplay: 'swap',
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: 600,
  src: `url('${titleFontUrl}') format('woff2')`,
  unicodeRange: 'U+65,U+69-6a,U+6c-6e,U+70,U+73,U+20,U+61'
}

const styles = StyleSheet.create({
  html: {
    fontSize: '62.5%', // reset to 10px for rems
    backgroundColor: '#111f36'
  },

  body: {
    backgroundColor: '#fff',
    fontSize: '1.6rem',
    margin: 0,
    padding: 0
  },

  title: {
    fontFamily: [titleFont, 'sans-serif'],
    fontSize: '6.4rem',
    fontWeight: 600,
    lineHeight: '1em',
    height: '1.6em',
    overflow: 'hidden',
    margin: '0 0 4rem',
    padding: 0,
    textTransform: 'lowercase',
    letterSpacing: '-0.3rem'
  },
  titleLink: {
    textDecoration: 'none'
  },
  titleText: {
    display: 'block',
    position: 'relative'
  },
  titleFirstName: {
    color: '#927fbf',
    top: '-0.3em',
    textShadow: '0.025em 0.025em 0.025em #6e55a9'
  },
  titleLastName: {
    color: '#271C48',
    top: '-0.5em',
    left: '0.2em',
    textShadow: '0.025em 0.025em 0.025em #6448b8'
  },

  pageTitle: {
    fontSize: '4rem',
    letterSpacing: '-0.1rem',
    margin: '1.5rem 0 3rem',
    fontWeight: 'normal',
    lineHeight: '1em'
  },

  container: {
    maxWidth: '100rem',
    margin: '0 auto',
    padding: '2rem',
    position: 'relative'
  }
})
