import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import { Container } from './container';
import { Title } from './title';

const gravatarUrl = 'https://www.gravatar.com/avatar/eda794898bf1c746b1784bbb8870eb93.png?s=160'

const footerLinks: Array<{ title: string, url: string}> = [
  { title: 'Twitter', url: 'https://twitter.com/pampo' },
  { title: 'Github', url: 'https://github.com/jamespamplin' },
  { title: 'Linkedin', url: 'https://www.linkedin.com/in/jamespamplin' }
]

export const Footer = () =>
  <footer className={css(styles.footer)}>
    <Container>
      <FooterTitle />
      <FooterList>
        <FooterItem>
          <FooterItemLink href="/">
            <img className={css(styles.footerAuthorImage)} src={gravatarUrl} />
          </FooterItemLink>
        </FooterItem>
        {footerLinks.map(({ url, title }, index) =>
          <FooterItem key={index}>
            <FooterItemLink href={url}>{title}</FooterItemLink>
          </FooterItem>
        )}
      </FooterList>
    </Container>
  </footer>

const FooterTitle = () =>
  <Title styles={styles.title} firstNameStyles={styles.titleFirstName} lastNameStyles={styles.titleLastName} />

const FooterList = (props: { children: React.ReactNode }) =>
  <ul className={css(styles.footerList)}>
    {props.children}
  </ul>

const FooterItem = (props: { children: React.ReactNode }) =>
  <li className={css(styles.footerItem)}>
    {props.children}
  </li>

const FooterItemLink = (props: { children: React.ReactNode, href: string }) =>
  <a className={css(styles.footerItemLink)} href={props.href}>
    {props.children}
  </a>

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1D365D',
    marginTop: '2rem'
  },

  title: {
    fontSize: '4.8rem',
    float: 'left',
    width: '18rem'
  },
  titleFirstName: {
    color: '#ecefe2',
  },
  titleLastName: {
    color: '#ecefe2',
  },

  footerList: {
    margin: 0,
    padding: '8rem 0 0',
    minHeight: '5rem',
    textAlign: 'right',

    '@media screen and (min-width: 550px)': {
      padding: '2rem 10rem 0',
    }
  },

  footerItem: {
    display: 'inline',
    margin: 0
  },

  footerItemLink: {
    color: '#ecefe2',
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    marginLeft: '1em',
  },

  footerAuthorImage: {
    borderRadius: '50%',
    width: '8rem',
    position: 'absolute',
    top: '1.5rem',
    right: '2rem'
  },
})
