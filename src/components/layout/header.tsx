import { StyleSheet, css } from 'aphrodite/no-important'
import React from 'react'
import { Title } from './title'

export const Header = () => (
  <header>
    <Title
      styles={styles.title}
      firstNameStyles={styles.titleFirstName}
      lastNameStyles={styles.titleLastName}
    />
    <div className={css(styles.subtitle)}>
      Founder | CTO | Software Engineer
    </div>
  </header>
)

const styles = StyleSheet.create({
  subtitle: {
    fontSize: '2rem',
    fontStyle: 'italic',
  },
  title: {
    fontSize: '6.4rem',
    margin: '0 0 2rem',
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
