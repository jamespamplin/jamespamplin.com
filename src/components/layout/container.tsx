import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

export const Container = (props: { children: React.ReactNode }) =>
  <div className={css(styles.container)}>
    {props.children}
  </div>

const styles = StyleSheet.create({
  container: {
    maxWidth: '100rem',
    margin: '0 auto',
    padding: '2rem',
    position: 'relative'
  }
})
