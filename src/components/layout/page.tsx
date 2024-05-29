import {
  SelectorHandler,
  StyleSheet as Aphrodite,
} from 'aphrodite/no-important'
import React from 'react'

export const Page = ({
  children,
  pageTitle,
}: {
  children: React.ReactNode
  pageTitle: string
}) => (
  <>
    <h1 className={css(styles.pageTitle)} itemProp="headline">
      {pageTitle}
    </h1>
    <article className={css(styles.content)} itemProp="text">
      {children}
    </article>
  </>
)

const nestedStylesHandler: SelectorHandler = (
  selector,
  baseSelector,
  generateSubtreeStyles
) => {
  if (selector.startsWith('&')) {
    const tag = selector.slice(2)
    const nestedTag = generateSubtreeStyles(`${baseSelector} ${tag}`)
    return nestedTag
  }
  return null
}

/* eslint-disable */
const { StyleSheet, css } = Aphrodite.extend([
  {
    selectorHandler: nestedStylesHandler,
  },
])

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: '4rem',
    fontWeight: 'normal',
    letterSpacing: '-0.1rem',
    lineHeight: '1em',
    margin: '2.4rem 0 1.5rem',
  },

  content: {
    '& a': {
      color: '#6e55a9',
    },

    '& p': {
      margin: '0 8rem 2.4rem 0',

      '@media screen and (max-width: 550px)': {
        marginRight: '1rem',
      },
    },

    '& h2': {
      fontSize: '4rem',
      fontWeight: 'normal',
      letterSpacing: '-0.1rem',
      lineHeight: '1em',
      margin: '2.4rem 0 1.5rem',
    },

    '& li': {
      margin: '0 8rem 1.2rem 0',

      '@media screen and (max-width: 550px)': {
        marginRight: '1rem',
      },
    },
  },
})
