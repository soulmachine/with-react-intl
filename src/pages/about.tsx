import React, {Component} from 'react'
import {FormattedRelative} from 'react-intl'
import pageWithIntl from '../components/PageWithIntl'
import Layout from '../components/Layout'
import {Page, Context} from 'next'

class About extends Page {
  static async getInitialProps (context: Context) {
    return {someDate: Date.now()}
  }

  render () {
    return (
      <Layout title="About">
        <p>
          <FormattedRelative
            value={this.props.someDate}
            updateInterval={1000}
          />
        </p>
      </Layout>
    )
  }
}

export default pageWithIntl(About)
