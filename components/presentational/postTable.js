// @flow

import React from 'react'
import { compose, pure } from 'recompose'
import { Table } from 'semantic-ui-react'
import { Posts, PostItem } from '../../declare/reducers'

type Props = {
  posts: Posts,
}

const Record = ({ data }) => (
  <Table.Row>
    <Table.Cell>{data.userId}</Table.Cell>
    <Table.Cell>{data.title}</Table.Cell>
    <Table.Cell>{data.body}</Table.Cell>
  </Table.Row>
)

const RenderTableData = ({ posts }) => {
  if (posts.length > 0) {
    return posts.map((data: PostItem) => <Record data={data} key={data.id} />)
  }
  return (
    <Table.Row>
      <td colSpan={3}>No Data</td>
    </Table.Row>
  )
}

export const PostTableBase = (props: Props) => (
  <Table celled size="small" selectable={props.posts.length > 0}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Body</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <RenderTableData posts={props.posts} />
    </Table.Body>
  </Table>
)

const PostTable = compose(pure)(PostTableBase)

export default PostTable
