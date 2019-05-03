import SubmitForm from 'components/submit-form'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'

describe('SubmitForm', () => {
  it('renders Calon A field as a number', () => {
    const { getByLabelText } = render(<SubmitForm />)

    const calonA = getByLabelText('Calon A')
    fireEvent.change(calonA, { target: { value: 'abc' } })
    expect(calonA).toHaveProperty('value', '')
    fireEvent.change(calonA, { target: { value: '123' } })
    expect(calonA).toHaveProperty('value', '123')
  })
})
