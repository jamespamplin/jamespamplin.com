import { css, StyleSheet } from 'aphrodite/no-important'
import React from 'react'
import { Title } from './title'

export const Header = () => (
  <header>
    <Title
      styles={styles.title}
      firstNameStyles={styles.titleFirstName}
      lastNameStyles={styles.titleLastName}
    />
  </header>
)

const styles = StyleSheet.create({
  title: {
    fontSize: '6.4rem',
    margin: '0 0 4rem',
  },
  titleFirstName: {
    color: '#927fbf',
    textShadow: '0.025em 0.025em 0.025em #6e55a9',
  },
  titleLastName: {
    color: '#271C48',
    textShadow: '0.025em 0.025em 0.025em #6448b8',
  },
})
