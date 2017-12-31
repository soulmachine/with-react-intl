import React, {Component} from 'react'
import {FormattedRelative} from 'react-intl'
import pageWithIntl from '../components/PageWithIntl'
import Layout from '../components/Layout'
import {Context} from 'next'
import {InjectedIntlProps} from 'react-intl'

interface AboutProps extends InjectedIntlProps {
  someDate: Date;
}

class About extends React.PureComponent<AboutProps> {
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
