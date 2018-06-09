import React from 'react'
import { mount } from 'enzyme'
import { PostTableBase } from '../../components/presentational/postTable'

describe('PostTable', () => {
  test('render record item value', () => {
    const props = [
      {
        userId: 1,
        id: 1,
        title: 'foo',
        body: 'barbaz',
      },
    ]
    const wrapper = mount(<PostTableBase posts={props} />)
    const row = wrapper.find('TableRow').at(1)
    const tds = row.find('td')
    expect(tds.at(0).prop('children')).toBe(props[0].userId)
    expect(tds.at(1).prop('children')).toBe(props[0].title)
    expect(tds.at(2).prop('children')).toBe(props[0].body)
  })

  test('render multiple records', () => {
    const props = [
      {
        userId: 1,
        id: 1,
        title: 'foo',
        body: 'barbaz',
      },
      {
        userId: 2,
        id: 2,
        title: 'foo',
        body: 'barbaz',
      },
      {
        userId: 3,
        id: 3,
        title: 'foo',
        body: 'barbaz',
      },
    ]
    const wrapper = mount(<PostTableBase posts={props} />)
    const rows = wrapper.find('TableRow')
    expect(rows).toHaveLength(props.length + 1)
  })
})
