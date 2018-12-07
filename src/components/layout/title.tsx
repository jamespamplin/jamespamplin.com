import React from 'react'
import { StyleSheet, css, StyleDeclarationValue } from 'aphrodite/no-important'

import {readFileSync} from 'fs'

type TitleProps = {
  styles?: StyleDeclarationValue,
  firstNameStyles?: StyleDeclarationValue,
  lastNameStyles?: StyleDeclarationValue,
}

export const Title = ({ styles: overrides, firstNameStyles, lastNameStyles }: TitleProps) =>
  <div className={css(styles.title, overrides)} itemProp="name">
    <a className={css(styles.titleLink)} href="/" title="jamespamplin.com">
      <span className={css(styles.titleText, styles.titleFirstName, firstNameStyles)}>James</span>
      {' '}
      <span className={css(styles.titleText, styles.titleLastName, lastNameStyles)}>Pamplin</span>
    </a>
  </div>

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
  title: {
    fontFamily: [titleFont, 'sans-serif'],
    fontWeight: 600,
    lineHeight: '1em',
    height: '1.6em',
    overflow: 'hidden',
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
    top: '-0.3em',
  },
  titleLastName: {
    top: '-0.5em',
    left: '0.2em',
  }
})
