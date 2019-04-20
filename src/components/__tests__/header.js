import React from 'react'
import { render } from 'react-testing-library'
import Header from '../header'

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header siteTitle='Devpendent' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
