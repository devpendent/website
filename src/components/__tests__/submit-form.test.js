import SubmitForm from 'components/submit-form'
import React from 'react'
import { fireEvent, render, waitForElement } from 'react-testing-library'

describe('SubmitForm', () => {
  it('renders Calon A field as a number', () => {
    const { getByLabelText } = render(<SubmitForm />)

    const calonA = getByLabelText('Calon A')
    fireEvent.change(calonA, { target: { value: 'abc' } })
    expect(calonA).toHaveProperty('value', '')
    fireEvent.change(calonA, { target: { value: '123' } })
    expect(calonA).toHaveProperty('value', '123')
  })

  it('renders Calon B field as a number', () => {
    const { getByLabelText } = render(<SubmitForm />)

    const calonA = getByLabelText('Calon B')
    fireEvent.change(calonA, { target: { value: 'abc' } })
    expect(calonA).toHaveProperty('value', '')
    fireEvent.change(calonA, { target: { value: '123' } })
    expect(calonA).toHaveProperty('value', '123')
  })

  it('validates field requirements correctly', async () => {
    const { getByText } = render(<SubmitForm />)
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {})

    const submit = getByText('Kirim')
    fireEvent.submit(submit)

    const errorCalonA = await waitForElement(() =>
      getByText('Masukkan total perolehan suara Calon A'))
    expect(errorCalonA).toBeVisible()
    expect(getByText('Masukkan total perolehan suara Calon B')).toBeVisible()

    expect(warn).toHaveBeenCalledTimes(2)
    expect(warn).toHaveBeenNthCalledWith(1, 'async-validator:', [
      'candidateA is required'
    ])
    expect(warn).toHaveBeenNthCalledWith(2, 'async-validator:', [
      'candidateB is required'
    ])

    warn.mockRestore()
  })
})
