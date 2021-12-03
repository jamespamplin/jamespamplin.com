import { css, StyleSheet } from 'aphrodite/no-important'
import React from 'react'

import { Container } from './container'
import { Title } from './title'

const gravatarUrl =
  'https://www.gravatar.com/avatar/eda794898bf1c746b1784bbb8870eb93.png?s=160'

const footerLinks: Array<{ title: string; url: string }> = [
  { title: 'Twitter', url: 'https://twitter.com/jamespamplin' },
  { title: 'Github', url: 'https://github.com/jamespamplin' },
  { title: 'Linkedin', url: 'https://www.linkedin.com/in/jamespamplin' },
]

export const Footer = () => (
  <footer
    className={css(styles.footer)}
    itemProp="author"
    itemScope
    itemType="http://schema.org/Person"
  >
    <Container>
      <FooterTitle />
      <FooterList>
        <FooterItem>
          <FooterAvatar />
        </FooterItem>
        {footerLinks.map(({ url, title }, index) => (
          <FooterItem key={index}>
            <FooterItemLink href={url}>{title}</FooterItemLink>
          </FooterItem>
        ))}
      </FooterList>
    </Container>
  </footer>
)

const FooterTitle = () => (
  <Title
    styles={styles.title}
    firstNameStyles={styles.titleFirstName}
    lastNameStyles={styles.titleLastName}
  />
)

const FooterList = (props: { children: React.ReactNode }) => (
  <ul className={css(styles.footerList)}>{props.children}</ul>
)

const FooterItem = (props: { children: React.ReactNode }) => (
  <li className={css(styles.footerItem)}>{props.children}</li>
)

const FooterItemLink = (props: { children: React.ReactNode; href: string }) => (
  <a className={css(styles.footerItemLink)} href={props.href} itemProp="sameAs">
    {props.children}
  </a>
)

const FooterAvatar = () => (
  <FooterItemLink href="/">
    <img
      className={css(styles.footerAuthorImage)}
      src={gravatarUrl}
      alt="Avatar for James Pamplin"
      itemProp="image"
    />
  </FooterItemLink>
)

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1D365D',
    marginTop: '2rem',
  },

  title: {
    float: 'left',
    fontSize: '4.8rem',
    width: '18rem',
  },
  titleFirstName: {
    color: '#ecefe2',
  },
  titleLastName: {
    color: '#ecefe2',
  },

  footerList: {
    margin: 0,
    minHeight: '5rem',
    padding: '8rem 0 0',
    textAlign: 'right',

    '@media screen and (min-width: 550px)': {
      padding: '2rem 10rem 0',
    },
  },

  footerItem: {
    display: 'inline',
    margin: 0,
  },

  footerItemLink: {
    color: '#ecefe2',
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    marginLeft: '1em',
  },

  footerAuthorImage: {
    borderRadius: '50%',
    position: 'absolute',
    right: '2rem',
    top: '1.5rem',
    width: '8rem',
  },
})
