import React from 'react'
import ReactMarkdown from 'react-markdown'

import { css, StyleSheet } from 'aphrodite/no-important'
import { readFileSync } from 'fs'
import { withLayout } from '../../components/layout'

const pageMarkdown = readFileSync(`${__dirname}/about.md`).toString()

export const About = () =>
  withLayout('About', <ReactMarkdown source={pageMarkdown} />)

const styles = StyleSheet.create({})
