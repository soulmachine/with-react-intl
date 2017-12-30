import React from 'react'
import {defineMessages, injectIntl} from 'react-intl'
import Head from 'next/head'
import Nav from './Nav'


const Layout: React.SFC<{ title: string; children?: React.ReactNode; }> = ({title, children}) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    
    <header>
      <Nav />
    </header>

    {children}
    
  </div>
)

export default Layout
