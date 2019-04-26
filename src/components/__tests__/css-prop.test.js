import styled from '@emotion/styled'
import serializer from 'jest-emotion'
import React from 'react'
import renderer from 'react-test-renderer'

expect.addSnapshotSerializer(serializer)

test('renders with correct styles', () => {
  const H1 = styled.h1`
    float: left;
  `

  const tree = renderer.create(<H1>hello world</H1>).toJSON()

  expect(tree).toMatchSnapshot()
})
