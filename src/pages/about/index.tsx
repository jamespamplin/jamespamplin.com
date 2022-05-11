import React from 'react'
import ReactMarkdown from 'react-markdown'

import { readFileSync } from 'fs'
import { withLayout } from '../../components/layout'

const pageMarkdown = readFileSync(`${__dirname}/about.md`).toString()

export const About = () =>
  withLayout('About', <ReactMarkdown>{pageMarkdown}</ReactMarkdown>)
