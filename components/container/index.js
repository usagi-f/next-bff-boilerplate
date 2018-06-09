// @flow

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, pure } from 'recompose'
import { Header, Button, Modal, Segment } from 'semantic-ui-react'
import css from 'styled-jsx/css'
import { Link } from '../../routes'
import { Alert, Posts } from '../../declare/reducers'
import * as actions from '../../actions/'
import PostTable from '../presentational/postTable'
import FilterById from '../presentational/filterById'

type Props = {
  actions: Object,
  userId: number,
  alert: Alert,
  posts: Posts,
}

const style = css`
  span {
    color: tomato;
  }
`

const Index = (props: Props) => (
  <Fragment>
    <Header>
      <span>Index Page</span>
    </Header>
    <Link route="/about">
      <a>About Page</a>
    </Link>
    <Segment basic>
      <Button onClick={props.actions.showAlert}>Click to Modal Open</Button>
    </Segment>
    <FilterById userId={props.userId} />
    <PostTable posts={props.posts} />
    <Modal
      closeIcon
      size="tiny"
      open={props.alert.isShow}
      onClose={props.actions.hideAlert}
    >
      <Modal.Header>Sample Modal-window Open</Modal.Header>
      <Modal.Content>
        <p>
          Dictum in. Non tristique diam interdum, fringilla nunc mollis nec
          semper ridiculus. Consectetuer. Id vulputate Pharetra, cursus dis sed
          rhoncus.
        </p>
      </Modal.Content>
    </Modal>
    <style jsx>{style}</style>
  </Fragment>
)

export default compose(
  connect(
    (state: any) => ({
      alert: state.alert,
      posts: state.posts,
    }),
    (dispatch: any) => ({
      actions: bindActionCreators(actions, dispatch),
    })
  ),
  pure
)(Index)
