import SubmitForm from 'components/submit-form'
import React from 'react'
import { fireEvent, render, waitForElement } from 'react-testing-library'

describe('SubmitForm', () => {
  const onSubmit = jest.fn()
  const warn = jest.spyOn(console, 'warn').mockImplementation(() => {})

  beforeEach(() => {
    onSubmit.mockClear()
    warn.mockClear()
  })

  it.each([['Calon A'], ['Calon B']])('renders %s field as a number', label => {
    const { getByLabelText } = render(<SubmitForm onSubmit={onSubmit} />)

    const calonA = getByLabelText(label)
    fireEvent.change(calonA, { target: { value: 'abc' } })
    expect(calonA).toHaveProperty('value', '')
    fireEvent.change(calonA, { target: { value: '123' } })
    expect(calonA).toHaveProperty('value', '123')
  })

  it('validates field requirements correctly', async () => {
    const { getByText } = render(<SubmitForm onSubmit={onSubmit} />)

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
  })

  it('validates maximum digit on number field correctly', async () => {
    const { getByLabelText, getByText } = render(
      <SubmitForm onSubmit={onSubmit} />
    )

    const calonA = getByLabelText('Calon A')
    fireEvent.change(calonA, { target: { value: '1234' } })
    expect(calonA).toHaveProperty('value', '1234')

    const errorCalonA = await waitForElement(() =>
      getByText('Total suara tidak boleh melebihi 3 digit angka'))
    expect(errorCalonA).toBeVisible()

    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn).toHaveBeenNthCalledWith(1, 'async-validator:', [
      'candidateA cannot be longer than 3 characters'
    ])
  })

  it('submit forms correctly', () => {
    const { getByLabelText, getByText, queryByText } = render(
      <SubmitForm onSubmit={onSubmit} />
    )

    fireEvent.change(getByLabelText('Calon A'), { target: { value: '123' } })
    fireEvent.change(getByLabelText('Calon B'), { target: { value: '456' } })
    fireEvent.submit(getByText('Kirim'))

    expect(
      queryByText('Masukkan total perolehan suara Calon A')
    ).not.toBeInTheDocument()
    expect(
      queryByText('Masukkan total perolehan suara Calon B')
    ).not.toBeInTheDocument()

    expect(warn).toHaveBeenCalledTimes(0)
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenNthCalledWith(1, {
      candidateA: 123,
      candidateB: 456
    })
  })

  it('disables autocompletion on the form', () => {
    const { container } = render(<SubmitForm onSubmit={onSubmit} />)

    expect(container.firstChild).toHaveAttribute('autocomplete', 'off')
  })
})
