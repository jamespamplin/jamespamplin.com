import { css, StyleSheet } from 'aphrodite/no-important'
import React from 'react'

export const Container = (props: { children: React.ReactNode }) => (
  <div className={css(styles.container)}>{props.children}</div>
)

const styles = StyleSheet.create({
  container: {
    margin: '0 auto',
    maxWidth: '100rem',
    padding: '2rem',
    position: 'relative',
  },
})
