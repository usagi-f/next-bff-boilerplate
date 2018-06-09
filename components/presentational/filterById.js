// @flow

import React from 'react'
import { compose, pure } from 'recompose'
import { Dropdown } from 'semantic-ui-react'
import nativeReload from '../../utils/nativeReload'

type Props = {
  userId: number,
}

const options = () =>
  [...Array(11)].map((_, i) => ({
    text: i === 0 ? 'ALL' : `ID ${i}`,
    value: i,
  }))

const handleReload = (value: number) => {
  const url: string = value === 0 ? '/' : `/?userId=${value}`
  nativeReload(url)
}

const FilterById = (props: Props) => (
  <Dropdown
    selection
    placeholder="Select ID"
    selectOnNavigation={false}
    defaultValue={Number(props.userId)}
    options={options()}
    onChange={(e, data) => handleReload(data.value)}
  />
)

export default compose(pure)(FilterById)
