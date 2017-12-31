import React from 'react'
import {FormattedMessage, FormattedNumber, defineMessages, InjectedIntlProps} from 'react-intl'
import Head from 'next/head'
import pageWithIntl from '../components/PageWithIntl'
import Layout from '../components/Layout'
import {Context} from 'next'


const {description} = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'An example app integrating React Intl with Next.js'
  }
})

const Index: React.SFC<InjectedIntlProps> = (props) => (
  <Layout title="React Intl Example">
    <Head>
      <meta name='description' content={props.intl.formatMessage(description)} />
    </Head>
    <p>
      <FormattedMessage id='greeting' defaultMessage='Hello, World!' />
    </p>
    <p>
      <FormattedNumber value={1000} />
    </p>
  </Layout>
)

export default pageWithIntl(Index)
