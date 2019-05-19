import SubmitForm from 'components/submit-form'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'

describe('SubmitForm', () => {
  const onSubmit = jest.fn()
  const warn = jest.spyOn(console, 'warn').mockImplementation(() => {})

  beforeEach(() => {
    onSubmit.mockClear()
    warn.mockClear()
  })

  it.each([
    ['Calon A'],
    ['Calon B'],
    ['Tidak Sah'],
    ['Sah'],
    ['Sah + Tidak Sah']
  ])('renders %s field as a number', label => {
    const { getByLabelText } = render(<SubmitForm onSubmit={onSubmit} />)

    const calonA = getByLabelText(label)
    fireEvent.change(calonA, { target: { value: 'abc' } })
    expect(calonA).toHaveProperty('value', '')
    fireEvent.change(calonA, { target: { value: '123' } })
    expect(calonA).toHaveProperty('value', '123')
  })

  it('validates field requirements correctly', async () => {
    const { findByText, getByText } = render(<SubmitForm onSubmit={onSubmit} />)

    const submit = getByText('Kirim')
    fireEvent.submit(submit)

    const errorCalonA = await findByText(
      'Masukkan total perolehan suara Calon A'
    )
    expect(errorCalonA).toBeVisible()
    expect(getByText('Masukkan total perolehan suara Calon B')).toBeVisible()
    expect(getByText('Masukkan jumlah suara tidak sah')).toBeVisible()
    expect(getByText('Masukkan jumlah seluruh suara sah (A + B)')).toBeVisible()
    expect(
      getByText('Masukkan jumlah seluruh suara sah dan suara tidak sah')
    ).toBeVisible()

    expect(warn).toHaveBeenCalledTimes(5)
    expect(warn).toHaveBeenNthCalledWith(1, 'async-validator:', [
      'candidateA is required'
    ])
    expect(warn).toHaveBeenNthCalledWith(2, 'async-validator:', [
      'candidateB is required'
    ])
    expect(warn).toHaveBeenNthCalledWith(3, 'async-validator:', [
      'invalid is required'
    ])
    expect(warn).toHaveBeenNthCalledWith(4, 'async-validator:', [
      'valid is required'
    ])
    expect(warn).toHaveBeenNthCalledWith(5, 'async-validator:', [
      'total is required'
    ])
  })

  it('validates maximum digit on number field correctly', async () => {
    const { findByText, getByLabelText } = render(
      <SubmitForm onSubmit={onSubmit} />
    )

    const calonA = getByLabelText('Calon A')
    fireEvent.change(calonA, { target: { value: '1234' } })
    expect(calonA).toHaveProperty('value', '1234')

    const errorCalonA = await findByText(
      'Total suara tidak boleh melebihi 3 digit angka'
    )
    expect(errorCalonA).toBeVisible()

    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn).toHaveBeenNthCalledWith(1, 'async-validator:', [
      'candidateA cannot be longer than 3 characters'
    ])
  })

  it('validates incorrect suara sah calculation correctly', async () => {
    const { findByText, getByLabelText } = render(
      <SubmitForm onSubmit={onSubmit} />
    )

    fireEvent.change(getByLabelText('Calon A'), { target: { value: '123' } })
    fireEvent.change(getByLabelText('Calon B'), { target: { value: '456' } })
    fireEvent.change(getByLabelText('Sah'), { target: { value: '578' } })

    const errorSuaraSah = await findByText('Perhitungan suara sah salah')
    expect(errorSuaraSah).toBeVisible()

    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn).toHaveBeenNthCalledWith(1, 'async-validator:', [
      'valid is mathematically incorrect'
    ])
  })

  it('validates incorrect total calculation correctly', async () => {
    const { findByText, getByLabelText } = render(
      <SubmitForm onSubmit={onSubmit} />
    )

    fireEvent.change(getByLabelText('Calon A'), { target: { value: '123' } })
    fireEvent.change(getByLabelText('Calon B'), { target: { value: '456' } })
    fireEvent.change(getByLabelText('Tidak Sah'), { target: { value: '21' } })
    fireEvent.change(getByLabelText('Sah'), { target: { value: '579' } })
    fireEvent.change(getByLabelText('Sah + Tidak Sah'), {
      target: { value: '601' }
    })

    const errorTotal = await findByText(
      'Perhitungan jumlah seluruh suara sah dan suara tidak sah salah'
    )
    expect(errorTotal).toBeVisible()

    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn).toHaveBeenNthCalledWith(1, 'async-validator:', [
      'total is mathematically incorrect'
    ])
  })

  it('submit forms correctly', () => {
    const { getByLabelText, getByText, queryByText } = render(
      <SubmitForm onSubmit={onSubmit} />
    )

    fireEvent.change(getByLabelText('Calon A'), { target: { value: '123' } })
    fireEvent.change(getByLabelText('Calon B'), { target: { value: '456' } })
    fireEvent.change(getByLabelText('Tidak Sah'), { target: { value: '21' } })
    fireEvent.change(getByLabelText('Sah'), { target: { value: '579' } })
    fireEvent.change(getByLabelText('Sah + Tidak Sah'), {
      target: { value: '600' }
    })
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
      candidateB: 456,
      invalid: 21,
      total: 600,
      valid: 579
    })
  })

  it('disables autocompletion on the form', () => {
    const { container } = render(<SubmitForm onSubmit={onSubmit} />)

    expect(container.firstChild).toHaveAttribute('autocomplete', 'off')
  })
})
