// @flow

import React, { Fragment } from 'react'
import { compose, pure, withState } from 'recompose'
import { Link } from '../../routes'

type Props = {
  text: string,
}

const About = (props: Props) => (
  <Fragment>
    <p>{props.text}</p>
    <Link route="/">
      <a>Index Page</a>
    </Link>
  </Fragment>
)

const enhancer = compose(
  withState('text', '', 'This is the about page'),
  pure
)

export default enhancer(About)
