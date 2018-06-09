// @flow

import React, { Fragment } from 'react'
import Head from 'next/head'
import { Segment } from 'semantic-ui-react'

type Props = {
  title: string,
  children: any,
}

const HeadTemplate = props => (
  <Head>
    <title>{props.title || 'Unknown Page'}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    />
  </Head>
)

const Layouts = (props: Props) => (
  <Fragment>
    <HeadTemplate title={props.title} />
    <Segment basic>{props.children}</Segment>
  </Fragment>
)

export default Layouts
