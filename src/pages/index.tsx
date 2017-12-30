import React from 'react'
import {FormattedMessage, FormattedNumber, defineMessages, InjectedIntl} from 'react-intl'
import Head from 'next/head'
import pageWithIntl from '../components/PageWithIntl'
import Layout from '../components/Layout'
import {Page, Context} from '../../@types/next'

const {description} = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'An example app integrating React Intl with Next.js'
  }
})

class Index extends Page {
  render() {
    return (<Layout title="React Intl Example">
    <Head>
      <meta name='description' content={this.props.intl.formatMessage(description)} />
    </Head>
    <p>
      <FormattedMessage id='greeting' defaultMessage='Hello, World!' />
    </p>
    <p>
      <FormattedNumber value={1000} />
    </p>
  </Layout>)
  }
}

export default pageWithIntl(Index)
