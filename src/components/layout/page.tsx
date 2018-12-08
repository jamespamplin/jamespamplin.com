import React from 'react'
import { StyleSheet as Aphrodite, SelectorHandler } from 'aphrodite/no-important'


export const Page = ({ children, pageTitle }: { children: React.ReactNode, pageTitle: string }) =>
  <>
    <h1 className={css(styles.pageTitle)} itemProp="name">{pageTitle}</h1>
    <article className={css(styles.content)} itemProp="mainContentOfPage" itemScope itemType="http://schema.org/Article" itemRef="author">
      {children}
    </article>
  </>

const nestedStylesHandler: SelectorHandler = (selector, baseSelector, generateSubtreeStyles) => {
  if (selector[0] === '&') {
    const tag = selector.slice(2);
    const nestedTag = generateSubtreeStyles(`${baseSelector} ${tag}`);
    return nestedTag;
  }
  return null;
}

const { StyleSheet, css } = Aphrodite.extend([{
  selectorHandler: nestedStylesHandler
}])

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: '4rem',
    letterSpacing: '-0.1rem',
    margin: '1.5rem 0 3rem',
    fontWeight: 'normal',
    lineHeight: '1em'
  },

  content: {
    '& a': {
      color: '#6e55a9'
    },

    '& p': {
      margin: '0 8rem 2.4rem 0',

      '@media screen and (max-width: 550px)': {
        marginRight: '1rem',
      }
    },

    '& h2': {
      fontSize: '4rem',
      letterSpacing: '-0.1rem',
      margin: '1.5rem 0',
      lineHeight: '1em',
      fontWeight: 'normal',
    }
  }
})
