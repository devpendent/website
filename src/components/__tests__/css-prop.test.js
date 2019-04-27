import styled from '@emotion/styled'
import serializer from 'jest-emotion'
import React from 'react'
import { render } from 'react-testing-library'

expect.addSnapshotSerializer(serializer)

test('renders with correct styles', () => {
  const H1 = styled.h1`
    float: left;
  `
  const tree = render(<H1>hello world</H1>)
  expect(tree).toMatchSnapshot()
})
