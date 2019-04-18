import React from 'react'
import { render } from 'react-testing-library'
import Header from '../header'

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header siteTitle='Default Starter' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
